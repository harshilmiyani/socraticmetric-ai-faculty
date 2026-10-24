"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import { addAssignment, courseHasFinalTest } from "@/lib/portal/assignments-store";
import { findCourseById } from "@/lib/portal/mock-courses";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/create-assignment.css";
import "@/styles/portal/create-final.css";

const FINAL_STEPS = [
  { id: 1, title: "Questions", desc: "Standard Framework" },
  { id: 2, title: "Reference", desc: "Materials & Concepts" },
  { id: 3, title: "Essays", desc: "Student Essays (Optional)" },
];

type CreateFinalTestViewProps = {
  courseId: string;
  courseTitle?: string;
};

type WizardStep = 1 | 2 | 3;

type StudentEssay = {
  id: string;
  email: string;
  name: string;
  essay: string;
  fileName?: string;
};

const FINAL_QUESTIONS = [
  {
    id: 1,
    tag: "Application",
    title: "Problem-Solving & Application",
    prompt:
      "Identify a major issue where the concepts and lessons from this course can be applied. Explain which lessons you would use, why you chose them, and how they would help address the issue.",
    probeType: "Live Socratic Adaptive Follow-up",
  },
  {
    id: 2,
    tag: "Perspective",
    title: "Critical Thinking & Perspective",
    prompt:
      "Discuss a key debate or differing viewpoint in this subject. How has your understanding evolved through this course, and what factors contributed to that shift?",
    probeType: "Counter-Argument Analysis Probe",
  },
  {
    id: 3,
    tag: "Reflection",
    title: "Integration & Reflection",
    prompt:
      "Reflect on how this course has influenced your approach to problem-solving. Provide an example of how you might apply what you've learned in a real-world context.",
    probeType: "Real-World Context Probe",
  },
  {
    id: 4,
    tag: "Essay Defense",
    title: "Written Essay Defense & Synthesis",
    prompt:
      "Give a brief summary of your turned in written essay and explain its relevance to the course lectures and/or course reading assignments.",
    probeType: "Personalized Submission Probe",
  },
];

const CONCEPTS_TOOLTIP =
  "Describe key concepts students should demonstrate understanding of. The Socratic AI evaluator will formulate targeted follow-ups around these focus points.";
const ESSAYS_TOOLTIP =
  "Optional: Attach individual student essays so the AI evaluator can tailor Question #4 to each student's specific written submission.";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function DocumentUploadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <polyline points="9 15 12 12 15 15" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm-create__info-wrap">
      <button
        type="button"
        className="sm-create__info-btn"
        aria-label="More information"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <InfoIcon />
      </button>
      {open && <div className="sm-create__info-tooltip" role="tooltip">{text}</div>}
    </div>
  );
}

function nameFromEmail(email: string) {
  const local = email.split("@")[0] || "Student";
  const first = local.split(/[._-]/)[0] || local;
  return first.charAt(0).toUpperCase() + first.slice(1);
}

export function CreateFinalTestView({ courseId, courseTitle }: CreateFinalTestViewProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const essayFileInputRef = useRef<HTMLInputElement>(null);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<WizardStep>(1);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [referenceMaterial, setReferenceMaterial] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [concepts, setConcepts] = useState("");
  const [essayEmail, setEssayEmail] = useState("");
  const [essayText, setEssayText] = useState("");
  const [essayFileName, setEssayFileName] = useState("");
  const [essayError, setEssayError] = useState("");
  const [studentEssays, setStudentEssays] = useState<StudentEssay[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const resolvedTitle = useMemo(() => {
    if (courseTitle?.trim()) return courseTitle.trim();
    return findCourseById(courseId)?.title ?? "Course";
  }, [courseId, courseTitle]);

  const coursePath = "/assignments";

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);

    if (courseHasFinalTest(courseId)) {
      router.replace(coursePath);
      return;
    }

    setReady(true);
  }, [router, courseId, coursePath]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handlePrevious = () => {
    if (step === 1) {
      router.push(coursePath);
      return;
    }
    setStep((prev) => (prev === 3 ? 2 : 1));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadedFileName(file.name);
    if (!referenceMaterial.trim()) {
      setReferenceMaterial(`Uploaded file: ${file.name}`);
    }
    event.target.value = "";
  };

  const handleEssayFileClick = () => {
    essayFileInputRef.current?.click();
  };

  const handleEssayFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setEssayFileName(file.name);
    if (!essayText.trim()) {
      setEssayText(`Uploaded file: ${file.name}`);
    }
    event.target.value = "";
  };

  const handleAddEssay = () => {
    const email = essayEmail.trim().toLowerCase();
    const essay = essayText.trim() || (essayFileName ? `Uploaded file: ${essayFileName}` : "");
    if (!email || !essay) {
      setEssayError("Please add a student email and essay text or upload a file.");
      return;
    }
    if (!email.includes("@")) {
      setEssayError("Please enter a valid student email address.");
      return;
    }

    setStudentEssays((prev) => [
      ...prev,
      {
        id: `essay-${Date.now()}`,
        email,
        name: nameFromEmail(email),
        essay,
        fileName: essayFileName || undefined,
      },
    ]);
    setEssayEmail("");
    setEssayText("");
    setEssayFileName("");
    setEssayError("");
  };

  const handleRemoveEssay = (id: string) => {
    setStudentEssays((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      setStep(3);
      return;
    }

    if (submitting || courseHasFinalTest(courseId)) return;
    setSubmitting(true);

    addAssignment({
      courseId,
      name: "Final SM Assessment",
      dueDate: "",
      kind: "final",
      referenceMaterial: referenceMaterial.trim() || uploadedFileName || undefined,
      concepts: concepts.trim() || undefined,
      instructions: concepts.trim()
        ? `Final oral exam concepts students should understand: ${concepts.trim()}`
        : "Final SM Assessment: Comprehensive Oral Defense across core course pillars.",
      essays: studentEssays,
      questionCount: 4,
      questionTypes: ["Adaptive", "Adaptive", "Adaptive", "Adaptive"],
      difficulty: "medium",
      minIterations: 2,
    });

    router.push(coursePath);
  };

  if (!ready) return <div className="sm-portal" aria-busy="true" />;

  return (
    <PortalShell
      active="assignments"
      title="Create Final Test"
      courseId={courseId}
      courseTitle={resolvedTitle}
      userEmail={userEmail}
      subtitle="Design a comprehensive oral final assessment powered by Socratic dialogue."
      backLabel="Back to assignments"
      onBack={() => router.push(coursePath)}
    >
      <div className="sm-create sm-create--embedded">
        {/* Full-Width Modern Stepper Header */}
        <nav className="sm-create__stepper" aria-label="Final Test Creation Steps">
          {FINAL_STEPS.map((s) => {
            const isCompleted = s.id < step;
            const isCurrent = s.id === step;
            return (
              <button
                type="button"
                key={s.id}
                className={`sm-create__step-item${isCurrent ? " sm-create__step-item--current" : ""}${isCompleted ? " sm-create__step-item--done" : ""}`}
                onClick={() => {
                  if (isCompleted) setStep(s.id as WizardStep);
                }}
                disabled={!isCompleted && !isCurrent}
              >
                <div className="sm-create__step-badge">
                  {isCompleted ? <CheckIcon /> : s.id}
                </div>
                <div className="sm-create__step-info">
                  <span className="sm-create__step-num">Step {s.id}</span>
                  <span className="sm-create__step-title">{s.title}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Main Full-Width Form Workspace */}
        <form className="sm-create__form" onSubmit={handleSubmit}>
          {/* STEP 1: FINAL QUESTIONS & FRAMEWORK */}
          {step === 1 && (
            <div className="sm-create__step-content sm-create__grid sm-create__grid--two-col">
              {/* Left Column: Questions Framework */}
              <div className="sm-create__section-card" style={{ flex: "1.4" }}>
                <div className="sm-final__info-banner">
                  <div className="sm-final__info-icon" aria-hidden="true">
                    <SparkleIcon />
                  </div>
                  <div className="sm-final__info-text">
                    <h3>Standardized Socratic Final Examination Framework</h3>
                    <p>
                      The SocraticMetric Final Assessment evaluates higher-order thinking through four comprehensive oral pillars. The AI evaluator dynamically asks adaptive follow-ups to probe each student's mastery.
                    </p>
                  </div>
                </div>

                <div className="sm-final__questions-grid">
                  {FINAL_QUESTIONS.map((q) => (
                    <article className="sm-final__question-card" key={q.id}>
                      <div className="sm-final__question-top">
                        <span className="sm-final__question-num">Pillar {q.id}</span>
                        <span className="sm-final__question-badge">{q.tag}</span>
                      </div>
                      <h3 className="sm-final__question-title">{q.title}</h3>
                      <p className="sm-final__question-prompt">{q.prompt}</p>
                      <div className="sm-final__question-footer">
                        <MicrophoneIcon />
                        <span>{q.probeType}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Right Column: Final Oral Blueprint Live Summary */}
              <div className="sm-create__blueprint-card">
                <div className="sm-create__blueprint-header">
                  <div>
                    <span className="sm-create__blueprint-tag">Final Exam Blueprint</span>
                    <h3 className="sm-create__blueprint-title">Final Oral Defense</h3>
                  </div>
                </div>

                <div className="sm-create__blueprint-body">
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Course</span>
                    <span className="sm-create__bp-val">{resolvedTitle}</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Assessment Type</span>
                    <span className="sm-create__bp-val">Comprehensive Oral Final</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Format</span>
                    <span className="sm-create__bp-val">4 Standard Pillars • Live Socratic AI</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Probing Level</span>
                    <span className="sm-create__bp-val">Multi-Turn Adaptive Probing</span>
                  </div>

                  <div className="sm-create__bp-divider" />

                  <span className="sm-create__bp-label">Standard Evaluation Pillars:</span>
                  <div className="sm-final__pillar-list">
                    <div className="sm-final__pillar-item">
                      <span className="sm-final__pillar-badge">1</span>
                      <span>Problem-Solving & Application</span>
                    </div>
                    <div className="sm-final__pillar-item">
                      <span className="sm-final__pillar-badge">2</span>
                      <span>Critical Thinking & Perspective</span>
                    </div>
                    <div className="sm-final__pillar-item">
                      <span className="sm-final__pillar-badge">3</span>
                      <span>Integration & Reflection</span>
                    </div>
                    <div className="sm-final__pillar-item">
                      <span className="sm-final__pillar-badge">4</span>
                      <span>Written Essay Defense & Synthesis</span>
                    </div>
                  </div>

                  <div className="sm-create__bp-divider" />

                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Reference Material</span>
                    <span className="sm-create__bp-val">
                      {uploadedFileName ? `Attached: ${uploadedFileName}` : referenceMaterial ? "Custom text attached" : "Configure in Step 2"}
                    </span>
                  </div>

                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Student Essays</span>
                    <span className="sm-create__bp-val">
                      {studentEssays.length > 0 ? `${studentEssays.length} attached` : "Optional (Step 3)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: REFERENCE MATERIALS & CONCEPTS */}
          {step === 2 && (
            <div className="sm-create__step-content sm-create__grid sm-create__grid--two-col">
              {/* Left Column: Reference Materials Upload & Text */}
              <div className="sm-create__section-card">
                <div className="sm-create__card-header-row">
                  <div>
                    <h2 className="sm-create__section-heading">Course Reference Materials</h2>
                    <p className="sm-create__field-desc">
                      Upload syllabi, textbooks, lecture slides, or rubrics (.pdf or .docx) for the AI evaluator.
                    </p>
                  </div>
                  <InfoTooltip text="The AI evaluator uses this reference material to verify facts, course-specific terminology, and lecture concepts during oral probing." />
                </div>

                <div
                  className={`sm-create__dropzone${uploadedFileName ? " sm-create__dropzone--has-file" : ""}`}
                  onClick={handleUploadClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleUploadClick();
                  }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sm-create__hidden-file"
                    onChange={handleFileSelected}
                  />
                  <div className="sm-create__dropzone-icon">
                    <DocumentUploadIcon />
                  </div>
                  <p className="sm-create__dropzone-text">
                    {uploadedFileName ? "Click to replace document" : "Click to Upload Final Reference Material"}
                  </p>
                  <span className="sm-create__dropzone-sub">Supports PDF, DOCX up to 25MB</span>
                </div>

                {uploadedFileName && (
                  <div className="sm-create__file-chip">
                    <span className="sm-create__file-badge">📄 {uploadedFileName}</span>
                    <button
                      type="button"
                      className="sm-create__file-remove"
                      onClick={() => {
                        setUploadedFileName("");
                        if (referenceMaterial.startsWith("Uploaded file:")) setReferenceMaterial("");
                      }}
                      aria-label="Remove uploaded file"
                    >
                      ✕
                    </button>
                  </div>
                )}

                <div className="sm-create__field" style={{ marginTop: "16px" }}>
                  <label htmlFor="final-reference">Or Paste Reference Material Text Directly</label>
                  <textarea
                    id="final-reference"
                    className="sm-create__textarea"
                    placeholder="Paste reading selections, lecture notes, discussion prompts, or rubric criteria directly..."
                    rows={6}
                    value={referenceMaterial}
                    onChange={(e) => setReferenceMaterial(e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column: Core Course Concepts */}
              <div className="sm-create__section-card">
                <div className="sm-create__card-header-row">
                  <div>
                    <h2 className="sm-create__section-heading">Core Course Concepts</h2>
                    <p className="sm-create__field-desc">
                      What key concepts, frameworks, or problem domains must students demonstrate mastery of?
                    </p>
                  </div>
                  <InfoTooltip text={CONCEPTS_TOOLTIP} />
                </div>

                <div className="sm-create__field">
                  <label htmlFor="final-concepts">Demonstrated Understanding Focus</label>
                  <textarea
                    id="final-concepts"
                    className="sm-create__textarea"
                    placeholder="Example: Demonstrating understanding of microservices vs monolith trade-offs, loose coupling, event-driven architecture, and caching strategies."
                    rows={8}
                    value={concepts}
                    onChange={(e) => setConcepts(e.target.value)}
                  />
                </div>

                <div className="sm-create__suggestion-helper">
                  <span className="sm-create__helper-label">💡 Recommended focus template:</span>
                  <p className="sm-create__helper-text">
                    Students should demonstrate comprehensive understanding of core course principles, synthesize theoretical frameworks, and evaluate real-world trade-offs.
                  </p>
                  <button
                    type="button"
                    className="sm-create__helper-apply"
                    onClick={() => {
                      if (!concepts.trim()) {
                        setConcepts(
                          `Students should demonstrate comprehensive understanding of core ${resolvedTitle} principles, synthesize theoretical frameworks, and evaluate real-world trade-offs.`
                        );
                      }
                    }}
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: STUDENT ESSAYS (OPTIONAL) */}
          {step === 3 && (
            <div className="sm-create__step-content sm-create__grid sm-create__grid--two-col">
              {/* Left Column: Add Student Essay Form */}
              <div className="sm-create__section-card">
                <div className="sm-create__card-header-row">
                  <div>
                    <h2 className="sm-create__section-heading">Attach Student Essay (Optional)</h2>
                    <p className="sm-create__field-desc">
                      Question #4 evaluates the student's written essay. Attach individual essays here for tailored Socratic probing.
                    </p>
                  </div>
                  <InfoTooltip text={ESSAYS_TOOLTIP} />
                </div>

                <div className="sm-create__field">
                  <label htmlFor="essay-email">Student Email Address</label>
                  <input
                    id="essay-email"
                    type="email"
                    className="sm-create__input"
                    placeholder="student@university.edu"
                    value={essayEmail}
                    onChange={(e) => {
                      setEssayEmail(e.target.value);
                      if (essayError) setEssayError("");
                    }}
                  />
                </div>

                <div className="sm-create__field">
                  <label htmlFor="essay-text">Essay Content</label>
                  <textarea
                    id="essay-text"
                    className="sm-create__textarea"
                    placeholder="Paste student's turned-in paper or capstone essay here..."
                    rows={4}
                    value={essayText}
                    onChange={(e) => {
                      setEssayText(e.target.value);
                      if (essayError) setEssayError("");
                    }}
                  />
                </div>

                <div className="sm-create__essay-file-row">
                  <button
                    type="button"
                    className="sm-create__upload-btn"
                    onClick={handleEssayFileClick}
                  >
                    Upload Student Essay (.docx/.pdf)
                  </button>
                  {essayFileName && (
                    <span className="sm-create__file-name">{essayFileName}</span>
                  )}
                  <input
                    ref={essayFileInputRef}
                    type="file"
                    accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sm-create__hidden-file"
                    onChange={handleEssayFileSelected}
                  />
                </div>

                {essayError && <p className="sm-create__error-banner">{essayError}</p>}

                <button
                  type="button"
                  className="sm-create__add-item-btn"
                  onClick={handleAddEssay}
                >
                  + Add Essay to Final Test
                </button>
              </div>

              {/* Right Column: Attached Essays Roster */}
              <div className="sm-create__section-card">
                <div className="sm-create__essays-header">
                  <h2 className="sm-create__section-heading">
                    Attached Essays ({studentEssays.length})
                  </h2>
                </div>

                {studentEssays.length === 0 ? (
                  <div className="sm-create__essays-empty">
                    <p>No individual student essays added.</p>
                    <span className="sm-create__empty-hint">
                      This step is optional. If no essay is attached for a student, Question 4 will synthesize the core reference materials and course readings.
                    </span>
                  </div>
                ) : (
                  <div className="sm-create__essays-roster">
                    {studentEssays.map((item) => (
                      <article className="sm-create__essay-card" key={item.id}>
                        <div className="sm-create__essay-header">
                          <span className="sm-create__essay-email">{item.email}</span>
                          <button
                            type="button"
                            className="sm-create__essay-del"
                            onClick={() => handleRemoveEssay(item.id)}
                            aria-label={`Remove essay for ${item.email}`}
                            title="Remove essay"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                        <p className="sm-create__essay-snippet">{item.essay}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* DOCKED FULL-WIDTH FOOTER */}
          <footer className="sm-create__footer">
            <button
              type="button"
              className="sm-create__btn-secondary"
              onClick={handlePrevious}
            >
              {step === 1 ? "Cancel" : "← Previous Step"}
            </button>

            <span className="sm-create__footer-step">
              Step {step} of {FINAL_STEPS.length}
            </span>

            <div className="sm-create__footer-actions">
              {step === 1 && (
                <button type="submit" className="sm-create__btn-primary">
                  Next: Reference & Concepts →
                </button>
              )}

              {step === 2 && (
                <button type="submit" className="sm-create__btn-primary">
                  Next: Student Essays →
                </button>
              )}

              {step === 3 && (
                <button
                  type="submit"
                  className="sm-create__btn-primary"
                  disabled={submitting}
                >
                  {submitting ? "Creating..." : "Create Final Test ✓"}
                </button>
              )}
            </div>
          </footer>
        </form>
      </div>
    </PortalShell>
  );
}

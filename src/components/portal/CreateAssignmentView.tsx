"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import { addAssignment } from "@/lib/portal/assignments-store";
import { findCourseById } from "@/lib/portal/mock-courses";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/create-assignment.css";

const ASSIGNMENT_STEPS = [
  { id: 1, title: "Details", desc: "Title & Objectives" },
  { id: 2, title: "Reference", desc: "Curated Content" },
  { id: 3, title: "Configure", desc: "Questions & Probing" },
  { id: 4, title: "Essays", desc: "Student Essays (Optional)" },
];

type CreateAssignmentViewProps = {
  courseId: string;
  courseTitle?: string;
};

type WizardStep = 1 | 2 | 3 | 4;
type QuestionType = "Adaptive" | "Hypothetical" | "Additive";
type Difficulty = "easy" | "medium" | "hard";
type StudentEssay = {
  id: string;
  email: string;
  name: string;
  essay: string;
  fileName?: string;
};

const TOPIC_MAX = 200;
const TOPIC_TOOLTIP =
  "These instructions will be visible to students. Describe what concepts should be demonstrated. Maximum 200 characters.";
const MATERIALS_TOOLTIP =
  "Mention the titles of books, articles, or lectures assigned for this session. Full text or files can be added in the next step.";
const ITERATIONS_TOOLTIP =
  "Minimum number of follow-up probe questions the Socratic AI evaluator will ask for each question during the oral session.";

const QUESTION_TYPE_INFO: Record<QuestionType, string> = {
  Adaptive: "Probes deeper into the student's stated reasoning and logic.",
  Hypothetical: "Presents a realistic 'what-if' edge-case scenario.",
  Additive: "Introduces an additional constraint or related parameter.",
};

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

function needsTopicImprovement(topic: string) {
  const value = topic.trim();
  if (!value) return true;
  if (value.length < 24) return true;
  const lowered = value.toLowerCase();
  const hasIntent =
    lowered.includes("understand") ||
    lowered.includes("assess") ||
    lowered.includes("concept") ||
    lowered.includes("learn");
  return !hasIntent;
}

function buildSuggestion(topic: string) {
  const base = topic.trim() || "this topic";
  return `${base} and assess the student's understanding of this.`.slice(0, TOPIC_MAX);
}

function formatDueDate(value: string) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  return `${month}/${day}/${year}`;
}

function nameFromEmail(email: string) {
  const local = email.split("@")[0] || "Student";
  const first = local.split(/[._-]/)[0] || local;
  return first.charAt(0).toUpperCase() + first.slice(1);
}

export function CreateAssignmentView({ courseId, courseTitle }: CreateAssignmentViewProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const essayFileInputRef = useRef<HTMLInputElement>(null);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<WizardStep>(1);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [topic, setTopic] = useState("");
  const [materials, setMaterials] = useState("");
  const [referenceMaterial, setReferenceMaterial] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [questionCount, setQuestionCount] = useState(3);
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>([
    "Adaptive",
    "Hypothetical",
    "Additive",
  ]);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [minIterations, setMinIterations] = useState(2);
  const [topicInvalid, setTopicInvalid] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [showImproveModal, setShowImproveModal] = useState(false);
  const [essayEmail, setEssayEmail] = useState("");
  const [essayText, setEssayText] = useState("");
  const [essayFileName, setEssayFileName] = useState("");
  const [essayError, setEssayError] = useState("");
  const [studentEssays, setStudentEssays] = useState<StudentEssay[]>([]);

  const resolvedTitle = useMemo(() => {
    if (courseTitle?.trim()) return courseTitle.trim();
    return findCourseById(courseId)?.title ?? "Course";
  }, [courseId, courseTitle]);

  const coursePath = "/assignments";

  const instructionsPreview = useMemo(() => {
    const topicText = topic.trim() || "the assigned concepts";
    const matText = materials.trim() || "the curated reading materials";
    return `This Socratic Metric session is designed to assess the student's understanding of ${topicText}. The curated materials for this session are ${matText}.`;
  }, [topic, materials]);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);
    setReady(true);
  }, [router]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    if (!showImproveModal) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowImproveModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showImproveModal]);

  const markTopicNeedsImprovement = () => {
    const nextSuggestion = buildSuggestion(topic);
    setSuggestion(nextSuggestion);
    setTopicInvalid(true);
    setShowImproveModal(true);
  };

  const handleMaterialsBlur = () => {
    if (!materials.trim()) return;
    if (needsTopicImprovement(topic)) {
      markTopicNeedsImprovement();
    }
  };

  const applySuggestion = () => {
    setTopic(suggestion || buildSuggestion(topic));
    setTopicInvalid(false);
    setShowImproveModal(false);
  };

  const editManually = () => {
    setShowImproveModal(false);
  };

  const handlePrevious = () => {
    if (step === 1) {
      router.push(coursePath);
      return;
    }
    setStep((prev) => {
      if (prev === 4) return 3;
      if (prev === 3) return 2;
      return 1;
    });
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

  const updateQuestionCount = (count: number) => {
    setQuestionCount(count);
    setQuestionTypes((prev) => {
      const next = [...prev];
      const defaults: QuestionType[] = ["Adaptive", "Hypothetical", "Additive"];
      while (next.length < count) {
        next.push(defaults[next.length % defaults.length]);
      }
      return next.slice(0, count);
    });
  };

  const updateQuestionType = (index: number, value: QuestionType) => {
    setQuestionTypes((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const handleNext = (event: FormEvent) => {
    event.preventDefault();

    if (step === 1) {
      if (!title.trim() || !dueDate.trim() || !topic.trim() || !materials.trim()) {
        return;
      }
      if (needsTopicImprovement(topic)) {
        markTopicNeedsImprovement();
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      setStep(3);
      return;
    }

    if (step === 4) {
      saveAndExit();
      return;
    }

    // Step 3 submission: saves assignment
    saveAndExit();
  };

  const saveAndExit = () => {
    if (!title.trim() || !dueDate.trim()) {
      setStep(1);
      return;
    }

    addAssignment({
      courseId,
      name: title.trim(),
      dueDate,
      topic: topic.trim(),
      materials: materials.trim(),
      instructions: instructionsPreview,
      referenceMaterial: referenceMaterial.trim() || uploadedFileName || undefined,
      questionCount,
      questionTypes,
      difficulty,
      minIterations,
      essays: studentEssays,
    });

    router.push(coursePath);
  };

  const handleAddEssays = () => {
    setEssayError("");
    setStep(4);
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

  const handleAddEssayItem = () => {
    const email = essayEmail.trim().toLowerCase();
    const essay = essayText.trim();

    if (!email || (!essay && !essayFileName)) {
      setEssayError("Please provide a student email and essay content or file.");
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
        essay: essay || `Uploaded file: ${essayFileName}`,
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

  if (!ready) {
    return <div className="sm-portal" aria-busy="true" />;
  }

  return (
    <PortalShell
      active="assignments"
      title="Create New Assignment"
      courseId={courseId}
      courseTitle={resolvedTitle}
      userEmail={userEmail}
      subtitle="Design an oral assessment powered by Socratic dialogue."
      backLabel="Back to assignments"
      onBack={() => router.push(coursePath)}
    >
      <div className="sm-create sm-create--embedded">
        {/* Full-Width Modern Stepper Header */}
        <nav className="sm-create__stepper" aria-label="Assignment Creation Steps">
          {ASSIGNMENT_STEPS.map((s) => {
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
        <form className="sm-create__form" onSubmit={handleNext}>
          {/* STEP 1: BASIC DETAILS */}
          {step === 1 && (
            <div className="sm-create__step-content">
              {/* Top Row: Title + Due Date */}
              <div className="sm-create__section-card">
                <div className="sm-create__grid sm-create__grid--title-row">
                  <div className="sm-create__field">
                    <label htmlFor="assignment-title">
                      Assignment Title <span className="sm-create__required">*</span>
                    </label>
                    <input
                      id="assignment-title"
                      type="text"
                      className="sm-create__input"
                      placeholder="e.g. Sprint 1 Architecture Review & Oral Defense"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="sm-create__field">
                    <label htmlFor="assignment-due-date">
                      Due Date <span className="sm-create__required">*</span>
                    </label>
                    <input
                      id="assignment-due-date"
                      type="date"
                      className="sm-create__input"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Bottom 2-Column: Dialogue Focus & Curated Materials */}
              <div className="sm-create__grid sm-create__grid--two-col">
                {/* Column 1: Dialogue Focus */}
                <div className={`sm-create__section-card${topicInvalid ? " sm-create__section-card--invalid" : ""}`}>
                  <div className="sm-create__field-header">
                    <div>
                      <label htmlFor="assignment-topic" className="sm-create__section-heading">
                        Dialogue Focus & Objectives <span className="sm-create__required">*</span>
                      </label>
                      <p className="sm-create__field-desc">
                        What concepts, frameworks, or decisions should the student demonstrate understanding of?
                      </p>
                    </div>
                    <InfoTooltip text={TOPIC_TOOLTIP} />
                  </div>

                  <textarea
                    id="assignment-topic"
                    className="sm-create__textarea"
                    placeholder="e.g. Microservices vs monolithic tradeoffs, API boundary design, scalability bottlenecks, and data consistency models..."
                    maxLength={TOPIC_MAX}
                    rows={5}
                    value={topic}
                    onChange={(e) => {
                      setTopic(e.target.value);
                      if (topicInvalid) setTopicInvalid(false);
                    }}
                    required
                  />

                  <div className="sm-create__field-footer">
                    <span className="sm-create__char-counter">
                      {topic.length} / {TOPIC_MAX} characters
                    </span>
                    {topicInvalid && (
                      <span className="sm-create__invalid-tag">Needs Improvement</span>
                    )}
                  </div>

                  {topicInvalid && suggestion && (
                    <div className="sm-create__suggestion-box">
                      <div className="sm-create__suggestion-header">
                        <strong>Suggested Improvement:</strong>
                        <button type="button" className="sm-create__apply-btn" onClick={applySuggestion}>
                          Apply Suggestion
                        </button>
                      </div>
                      <p>{suggestion}</p>
                    </div>
                  )}
                </div>

                {/* Column 2: Curated Materials */}
                <div className="sm-create__section-card">
                  <div className="sm-create__field-header">
                    <div>
                      <label htmlFor="assignment-materials" className="sm-create__section-heading">
                        Curated Learning Materials <span className="sm-create__required">*</span>
                      </label>
                      <p className="sm-create__field-desc">
                        List titles of assigned readings, textbook chapters, slide decks, or video lectures.
                      </p>
                    </div>
                    <InfoTooltip text={MATERIALS_TOOLTIP} />
                  </div>

                  <textarea
                    id="assignment-materials"
                    className="sm-create__textarea"
                    placeholder="e.g. Chapter 4: Distributed Systems Design, Lecture Slides 8-10, Martin Fowler Microservices Guide..."
                    rows={5}
                    value={materials}
                    onChange={(e) => setMaterials(e.target.value)}
                    onBlur={handleMaterialsBlur}
                    required
                  />
                  <div className="sm-create__field-footer">
                    <span className="sm-create__field-hint">
                      Reference files can be uploaded in Step 2.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: REFERENCE MATERIAL */}
          {step === 2 && (
            <div className="sm-create__step-content">
              <div className="sm-create__grid sm-create__grid--two-col">
                {/* Upload Zone */}
                <div className="sm-create__section-card">
                  <h2 className="sm-create__section-heading">Upload Document File</h2>
                  <p className="sm-create__field-desc">
                    Attach course materials or rubrics (.docx or .pdf) for the AI evaluator to ground questions in.
                  </p>

                  <div
                    className="sm-create__dropzone"
                    onClick={handleUploadClick}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="sm-create__dropzone-icon">
                      <DocumentUploadIcon />
                    </div>
                    <span className="sm-create__dropzone-title">
                      {uploadedFileName ? "Replace Document" : "Click to Upload Document"}
                    </span>
                    <span className="sm-create__dropzone-hint">
                      Supports PDF, DOCX up to 25MB
                    </span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sm-create__hidden-file"
                    onChange={handleFileSelected}
                  />

                  {uploadedFileName && (
                    <div className="sm-create__uploaded-badge">
                      <span className="sm-create__file-name">{uploadedFileName}</span>
                      <button
                        type="button"
                        className="sm-create__remove-file-btn"
                        onClick={() => {
                          setUploadedFileName("");
                          if (referenceMaterial.startsWith("Uploaded file:")) {
                            setReferenceMaterial("");
                          }
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Paste Text */}
                <div className="sm-create__section-card">
                  <h2 className="sm-create__section-heading">Reference Material Text (Optional)</h2>
                  <p className="sm-create__field-desc">
                    Or paste notes, discussion prompts, rubrics, or case study excerpts directly.
                  </p>
                  <textarea
                    id="assignment-reference"
                    className="sm-create__textarea sm-create__textarea--tall"
                    placeholder="Paste reference text, case study, or discussion questions here..."
                    rows={8}
                    value={referenceMaterial}
                    onChange={(e) => setReferenceMaterial(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CONFIGURE & LIVE PREVIEW */}
          {step === 3 && (
            <div className="sm-create__step-content sm-create__grid sm-create__grid--config-layout">
              {/* Left Column: Parameters */}
              <div className="sm-create__config-column">
                {/* Number of Questions */}
                <div className="sm-create__section-card">
                  <h2 className="sm-create__section-heading">Number of Questions</h2>
                  <p className="sm-create__field-desc">
                    Total oral assessment questions the student will be asked.
                  </p>
                  <div className="sm-create__segmented">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={`sm-create__segment-btn${questionCount === n ? " sm-create__segment-btn--active" : ""}`}
                        onClick={() => updateQuestionCount(n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question Types */}
                <div className="sm-create__section-card">
                  <h2 className="sm-create__section-heading">Question Methodology</h2>
                  <p className="sm-create__field-desc">
                    Choose the questioning approach for each question.
                  </p>
                  <div className="sm-create__qtypes-list">
                    {questionTypes.map((type, idx) => (
                      <div className="sm-create__qtype-row" key={`q-${idx}`}>
                        <div className="sm-create__qtype-meta">
                          <span className="sm-create__qnum-pill">Question {idx + 1}</span>
                          <span className="sm-create__qtype-desc">{QUESTION_TYPE_INFO[type]}</span>
                        </div>
                        <div className="sm-create__qtype-buttons">
                          {(["Adaptive", "Hypothetical", "Additive"] as QuestionType[]).map((t) => (
                            <button
                              type="button"
                              key={t}
                              className={`sm-create__qtype-opt${type === t ? " sm-create__qtype-opt--active" : ""}`}
                              onClick={() => updateQuestionType(idx, t)}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Difficulty & Probing */}
                <div className="sm-create__section-card">
                  <div className="sm-create__grid sm-create__grid--two-col">
                    <div>
                      <h2 className="sm-create__section-heading">Difficulty Level</h2>
                      <div className="sm-create__difficulty-row">
                        {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
                          <button
                            type="button"
                            key={level}
                            className={`sm-create__diff-card sm-create__diff-card--${level}${difficulty === level ? " is-selected" : ""}`}
                            onClick={() => setDifficulty(level)}
                          >
                            <span className="sm-create__diff-title">
                              {level.charAt(0).toUpperCase() + level.slice(1)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="sm-create__field-header">
                        <h2 className="sm-create__section-heading">Probing Iterations</h2>
                        <InfoTooltip text={ITERATIONS_TOOLTIP} />
                      </div>
                      <p className="sm-create__field-desc">Follow-up probes per question.</p>
                      <div className="sm-create__segmented">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            type="button"
                            key={n}
                            className={`sm-create__segment-btn${minIterations === n ? " sm-create__segment-btn--active" : ""}`}
                            onClick={() => setMinIterations(n)}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Oral Blueprint */}
              <div className="sm-create__blueprint-card">
                <div className="sm-create__blueprint-header">
                  <div>
                    <span className="sm-create__blueprint-tag">Live Summary</span>
                    <h3 className="sm-create__blueprint-title">Oral Assessment Blueprint</h3>
                  </div>
                </div>

                <div className="sm-create__blueprint-body">
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Course</span>
                    <span className="sm-create__bp-val">{resolvedTitle}</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Assignment Title</span>
                    <span className="sm-create__bp-val">{title || "Untitled Assignment"}</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Due Date</span>
                    <span className="sm-create__bp-val">{formatDueDate(dueDate) || "Not set"}</span>
                  </div>
                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Format</span>
                    <span className="sm-create__bp-val">
                      {questionCount} Questions • {difficulty.toUpperCase()} • {minIterations} Probes
                    </span>
                  </div>

                  <div className="sm-create__bp-divider" />

                  <span className="sm-create__bp-label">Session Dialogue Prompt Preview:</span>
                  <div className="sm-create__bp-prompt-box">
                    {instructionsPreview}
                  </div>

                  <div className="sm-create__bp-divider" />

                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Reference Material</span>
                    <span className="sm-create__bp-val">
                      {uploadedFileName ? `Attached: ${uploadedFileName}` : referenceMaterial ? "Custom text attached" : "None provided"}
                    </span>
                  </div>

                  <div className="sm-create__bp-row">
                    <span className="sm-create__bp-label">Student Essays</span>
                    <span className="sm-create__bp-val">
                      {studentEssays.length > 0 ? `${studentEssays.length} attached` : "Standard (None)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: STUDENT ESSAYS (OPTIONAL) */}
          {step === 4 && (
            <div className="sm-create__step-content sm-create__grid sm-create__grid--two-col">
              {/* Left Column: Add Essay Form */}
              <div className="sm-create__section-card">
                <h2 className="sm-create__section-heading">Add Student Essay (Optional)</h2>
                <p className="sm-create__field-desc">
                  Attach individual essays for personalized student oral questioning.
                </p>

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
                  <label htmlFor="essay-text">Essay Text</label>
                  <textarea
                    id="essay-text"
                    className="sm-create__textarea"
                    placeholder="Paste student's essay or submission here..."
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
                  onClick={handleAddEssayItem}
                >
                  + Add Essay to Assignment
                </button>
              </div>

              {/* Right Column: Attached Essays List */}
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
                      This step is optional. Students without individual essays will be evaluated on the core reference materials.
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
              Step {step} of {ASSIGNMENT_STEPS.length}
            </span>

            <div className="sm-create__footer-actions">
              {step < 3 && (
                <button type="submit" className="sm-create__btn-primary">
                  {step === 1 ? "Next: Reference Material →" : "Next: Configure →"}
                </button>
              )}

              {step === 3 && (
                <>
                  <button
                    type="button"
                    className="sm-create__btn-secondary"
                    onClick={handleAddEssays}
                  >
                    Add Essays (Optional)
                  </button>
                  <button type="submit" className="sm-create__btn-primary">
                    Create Assignment ✓
                  </button>
                </>
              )}

              {step === 4 && (
                <button type="submit" className="sm-create__btn-primary">
                  Finish & Create Assignment ✓
                </button>
              )}
            </div>
          </footer>
        </form>

        {/* MODAL: TOPIC IMPROVEMENT */}
        {showImproveModal && (
          <div className="sm-create__modal" role="presentation">
            <div
              className="sm-create__modal-backdrop"
              onClick={() => setShowImproveModal(false)}
            />
            <div
              className="sm-create__modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="topic-improve-title"
            >
              <div className="sm-create__modal-header">
                <h2 id="topic-improve-title">Assignment Topic Needs Improvement</h2>
                <button
                  type="button"
                  className="sm-create__modal-close"
                  aria-label="Close"
                  onClick={() => setShowImproveModal(false)}
                >
                  ✕
                </button>
              </div>

              <p className="sm-create__modal-copy">
                To maximize oral assessment quality, state clearly what concepts, trade-offs, or
                methods students are expected to demonstrate understanding of.
              </p>

              <p className="sm-create__modal-suggest-label">Suggested Revision:</p>
              <div className="sm-create__modal-suggest-box">{suggestion}</div>

              <div className="sm-create__modal-actions">
                <button type="button" className="sm-create__btn-primary" onClick={applySuggestion}>
                  Apply Suggested Revision
                </button>
                <button type="button" className="sm-create__btn-secondary" onClick={editManually}>
                  I&apos;ll Edit Manually
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PortalShell>
  );
}

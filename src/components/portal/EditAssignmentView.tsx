"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import {
  getAssignmentById,
  updateAssignment,
  type AssignmentEssay,
  type LateExtension,
  type PortalAssignment,
} from "@/lib/portal/assignments-store";
import { findCourseById } from "@/lib/portal/mock-courses";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/edit-assignment.css";

type EditAssignmentViewProps = {
  assignmentId: string;
  courseId?: string;
  courseTitle?: string;
};

type QuestionType = "Adaptive" | "Hypothetical" | "Additive";
type Difficulty = "easy" | "medium" | "hard";
type DarkSelectOption = { value: string; label: string };

const ITERATIONS_TOOLTIP =
  "The minimum number of iterations that a student will have to answer before moving to the next question. Each iteration includes answering the question and reading the feedback that is provided.";
const ESSAYS_TOOLTIP =
  "This is an optional feature where you can personalize a student's assignment with their submitted essay. The AI will have access to the student's essay during the Socratic session.";

const QUESTION_COUNT_OPTIONS: DarkSelectOption[] = [1, 2, 3, 4, 5].map((n) => ({
  value: String(n),
  label: String(n),
}));
const QUESTION_TYPE_OPTIONS: DarkSelectOption[] = [
  { value: "Adaptive", label: "Adaptive" },
  { value: "Hypothetical", label: "Hypothetical" },
  { value: "Additive", label: "Additive" },
];
const ITERATION_OPTIONS: DarkSelectOption[] = [1, 2, 3, 4, 5].map((n) => ({
  value: String(n),
  label: String(n),
}));

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoButton({
  text,
  open,
  onOpen,
  onClose,
}: {
  text: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      className="sm-edit__info"
      aria-label="More information"
      aria-expanded={open}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onClose}
      onClick={(event) => {
        event.preventDefault();
        if (open) onClose();
        else onOpen();
      }}
    >
      i
      {open && (
        <span className="sm-edit__tooltip" role="tooltip">
          {text}
        </span>
      )}
    </button>
  );
}

function DarkSelect({
  menuTitle,
  value,
  options,
  open,
  onToggle,
  onClose,
  onChange,
  ariaLabel,
}: {
  menuTitle: string;
  value: string;
  options: DarkSelectOption[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onChange: (value: string) => void;
  ariaLabel: string;
}) {
  const selected = options.find((option) => option.value === value)?.label ?? value;

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(`[data-dark-select="${ariaLabel}"]`)) onClose();
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [open, onClose, ariaLabel]);

  return (
    <div className="sm-edit__dark-select" data-dark-select={ariaLabel}>
      <button
        type="button"
        className="sm-edit__dark-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={onToggle}
      >
        <span>{selected}</span>
        <ChevronIcon />
      </button>
      {open && (
        <div className="sm-edit__dark-menu" role="listbox" aria-label={menuTitle}>
          <p className="sm-edit__dark-menu-title">{menuTitle}</p>
          <ul>
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`sm-edit__dark-option${isSelected ? " sm-edit__dark-option--selected" : ""}`}
                    onClick={() => {
                      onChange(option.value);
                      onClose();
                    }}
                  >
                    {isSelected ? <span aria-hidden="true">✓</span> : <span className="sm-edit__dark-option-spacer" />}
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function nameFromEmail(email: string) {
  const local = email.split("@")[0] || "Student";
  const first = local.split(/[._-]/)[0] || local;
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function buildInstructions(assignment: PortalAssignment) {
  if (assignment.instructions?.trim()) return assignment.instructions;
  if (assignment.topic?.trim() || assignment.materials?.trim()) {
    return `This socratic metric session is designed to assess the student's understanding of ${assignment.topic || "…"}. The curated materials for this session are ${assignment.materials || "…"}.`;
  }
  return "";
}

export function EditAssignmentView({
  assignmentId,
  courseId,
  courseTitle,
}: EditAssignmentViewProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const essayFileInputRef = useRef<HTMLInputElement>(null);
  const [ready, setReady] = useState(false);
  const [missing, setMissing] = useState(false);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [resolvedCourseId, setResolvedCourseId] = useState(courseId || "");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [referenceMaterial, setReferenceMaterial] = useState("");
  const [questionCount, setQuestionCount] = useState(3);
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>([
    "Adaptive",
    "Adaptive",
    "Adaptive",
  ]);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [minIterations, setMinIterations] = useState(1);
  const [essays, setEssays] = useState<AssignmentEssay[]>([]);
  const [extensions, setExtensions] = useState<LateExtension[]>([]);
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [iterationsTooltipOpen, setIterationsTooltipOpen] = useState(false);
  const [essaysTooltipOpen, setEssaysTooltipOpen] = useState(false);
  const [showExtensionModal, setShowExtensionModal] = useState(false);
  const [showEssaysModal, setShowEssaysModal] = useState(false);
  const [extensionEmail, setExtensionEmail] = useState("");
  const [extensionDate, setExtensionDate] = useState("");
  const [essayEmail, setEssayEmail] = useState("");
  const [essayText, setEssayText] = useState("");
  const [essayFileName, setEssayFileName] = useState("");
  const [toast, setToast] = useState("");

  const resolvedTitle = useMemo(() => {
    if (courseTitle?.trim()) return courseTitle.trim();
    return findCourseById(resolvedCourseId)?.title ?? "Course";
  }, [courseTitle, resolvedCourseId]);

  const coursePath = "/assignments";

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);

    const assignment = getAssignmentById(assignmentId);
    if (!assignment) {
      setMissing(true);
      setReady(true);
      return;
    }

    const nextCourseId = courseId || assignment.courseId;
    setResolvedCourseId(nextCourseId);
    setTitle(assignment.name);
    setDueDate(assignment.dueDate);
    setInstructions(buildInstructions(assignment));
    setReferenceMaterial(assignment.referenceMaterial || "");
    const count = assignment.questionCount || 3;
    setQuestionCount(count);
    const types = (assignment.questionTypes || []).slice(0, count) as QuestionType[];
    while (types.length < count) types.push("Adaptive");
    setQuestionTypes(types);
    setDifficulty((assignment.difficulty as Difficulty) || "medium");
    setMinIterations(assignment.minIterations || 1);
    setEssays(assignment.essays || []);
    setExtensions(assignment.extensions || []);
    setReady(true);
  }, [assignmentId, courseId, router]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!showExtensionModal && !showEssaysModal) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowExtensionModal(false);
        setShowEssaysModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showExtensionModal, showEssaysModal]);

  const updateQuestionCount = (count: number) => {
    setQuestionCount(count);
    setQuestionTypes((prev) => {
      const next = [...prev];
      while (next.length < count) next.push("Adaptive");
      return next.slice(0, count);
    });
  };

  const persist = (patch?: Partial<PortalAssignment>) => {
    updateAssignment(assignmentId, {
      name: title.trim(),
      dueDate,
      instructions: instructions.trim(),
      referenceMaterial: referenceMaterial.trim(),
      questionCount,
      questionTypes,
      difficulty,
      minIterations,
      essays,
      extensions,
      ...patch,
    });
  };

  const handleSave = (event?: FormEvent) => {
    event?.preventDefault();
    persist();
    setToast("Changes saved");
  };

  const handleAddExtension = (event: FormEvent) => {
    event.preventDefault();
    const email = extensionEmail.trim().toLowerCase();
    if (!email || !extensionDate) return;
    const next: LateExtension = {
      id: `ext-${Date.now()}`,
      email,
      extendedDueDate: extensionDate,
    };
    const nextExtensions = [...extensions, next];
    setExtensions(nextExtensions);
    persist({ extensions: nextExtensions });
    setExtensionEmail("");
    setExtensionDate("");
    setShowExtensionModal(false);
  };

  const handleRemoveExtension = (id: string) => {
    const nextExtensions = extensions.filter((item) => item.id !== id);
    setExtensions(nextExtensions);
    persist({ extensions: nextExtensions });
  };

  const handleAddEssay = (event: FormEvent) => {
    event.preventDefault();
    const email = essayEmail.trim().toLowerCase();
    const essay = essayText.trim() || (essayFileName ? `Uploaded file: ${essayFileName}` : "");
    if (!email || !essay) return;
    const next: AssignmentEssay = {
      id: `essay-${Date.now()}`,
      email,
      name: nameFromEmail(email),
      essay,
      fileName: essayFileName || undefined,
    };
    const nextEssays = [...essays, next];
    setEssays(nextEssays);
    persist({ essays: nextEssays });
    setEssayEmail("");
    setEssayText("");
    setEssayFileName("");
  };

  const handleRemoveEssay = (id: string) => {
    const nextEssays = essays.filter((item) => item.id !== id);
    setEssays(nextEssays);
    persist({ essays: nextEssays });
  };

  if (!ready) return <div className="sm-portal" aria-busy="true" />;

  if (missing) {
    return (
      <div className="sm-edit sm-edit--embedded">
        <div className="sm-edit__missing">
          <h1>Assignment not found</h1>
          <p>This assignment may have been removed.</p>
          <button type="button" className="sm-edit__btn-primary" onClick={() => router.push(coursePath)}>
            Back to assignments
          </button>
        </div>
      </div>
    );
  }

  return (
    <PortalShell
      active="assignments"
      title="View Your Assignment"
      courseId={resolvedCourseId}
      courseTitle={resolvedTitle}
      userEmail={userEmail}
      subtitle="Update configuration, due date, extensions, and student essays."
      backLabel="Back to assignments"
      onBack={() => router.push(coursePath)}
    >
      <div className="sm-edit sm-edit--embedded">
        <form className="sm-edit__main" onSubmit={handleSave}>
          <section className="sm-edit__card">
            <div className="sm-edit__field">
              <label>Number of Questions</label>
              <DarkSelect
                menuTitle="Select Number of Questions"
                ariaLabel="Number of Questions"
                value={String(questionCount)}
                options={QUESTION_COUNT_OPTIONS}
                open={openSelect === "count"}
                onToggle={() => setOpenSelect((prev) => (prev === "count" ? null : "count"))}
                onClose={() => setOpenSelect(null)}
                onChange={(value) => updateQuestionCount(Number(value))}
              />
            </div>

            <div className="sm-edit__field">
              <p className="sm-edit__section-title">Question Types</p>
              <div className="sm-edit__type-list">
                {questionTypes.map((type, index) => (
                  <div className="sm-edit__type-row" key={`type-${index}`}>
                    <span>Question {index + 1}:</span>
                    <DarkSelect
                      menuTitle="Select Question Type"
                      ariaLabel={`Question ${index + 1} type`}
                      value={type}
                      options={QUESTION_TYPE_OPTIONS}
                      open={openSelect === `type-${index}`}
                      onToggle={() =>
                        setOpenSelect((prev) => (prev === `type-${index}` ? null : `type-${index}`))
                      }
                      onClose={() => setOpenSelect(null)}
                      onChange={(value) =>
                        setQuestionTypes((prev) =>
                          prev.map((item, i) => (i === index ? (value as QuestionType) : item)),
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="sm-edit__field">
              <p className="sm-edit__section-title">Difficulty Level</p>
              <div className="sm-edit__radio-row" role="radiogroup" aria-label="Difficulty">
                {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
                  <label key={level} className="sm-edit__radio">
                    <input
                      type="radio"
                      name="difficulty"
                      checked={difficulty === level}
                      onChange={() => setDifficulty(level)}
                    />
                    <span>{level[0].toUpperCase() + level.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sm-edit__field">
              <div className="sm-edit__label-row">
                <label>Minimum Iterations Per Question</label>
                <InfoButton
                  text={ITERATIONS_TOOLTIP}
                  open={iterationsTooltipOpen}
                  onOpen={() => {
                    setIterationsTooltipOpen(true);
                    setEssaysTooltipOpen(false);
                  }}
                  onClose={() => setIterationsTooltipOpen(false)}
                />
              </div>
              <DarkSelect
                menuTitle="Select minimum iterations"
                ariaLabel="Minimum Iterations Per Question"
                value={String(minIterations)}
                options={ITERATION_OPTIONS}
                open={openSelect === "iterations"}
                onToggle={() =>
                  setOpenSelect((prev) => (prev === "iterations" ? null : "iterations"))
                }
                onClose={() => setOpenSelect(null)}
                onChange={(value) => setMinIterations(Number(value))}
              />
            </div>

            <div className="sm-edit__field">
              <div className="sm-edit__extensions-head">
                <p className="sm-edit__section-title">Late Submission Extensions</p>
                <button
                  type="button"
                  className="sm-edit__add-ext"
                  onClick={() => setShowExtensionModal(true)}
                >
                  + Add
                </button>
              </div>
              {extensions.length === 0 ? (
                <p className="sm-edit__empty-ext">No extensions added</p>
              ) : (
                <div className="sm-edit__ext-list">
                  {extensions.map((item) => (
                    <div className="sm-edit__ext-item" key={item.id}>
                      <span>
                        {item.email} · {item.extendedDueDate}
                      </span>
                      <button type="button" onClick={() => handleRemoveExtension(item.id)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="sm-edit__card">
            <div className="sm-edit__details-head">
              <h2>Assignment Details</h2>
              <button type="submit" className="sm-edit__btn-primary">
                Save changes
              </button>
            </div>

            <div className="sm-edit__field">
              <label htmlFor="edit-title">Title</label>
              <input
                id="edit-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>

            <div className="sm-edit__field">
              <label htmlFor="edit-due-date">Due Date</label>
              <input
                id="edit-due-date"
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
                required
              />
            </div>

            <div className="sm-edit__summary">
              <strong>Question Configuration</strong>
              <span>Number of Questions: {questionCount}</span>
              <span>Difficulty: {difficulty}</span>
              <span>Min Iterations per Question: {minIterations}</span>
              {questionTypes.map((type, index) => (
                <span key={`summary-${index}`}>
                  Question {index + 1}: {type.toLowerCase()}
                </span>
              ))}
            </div>

            <div className="sm-edit__field">
              <label htmlFor="edit-instructions">Assignment Instructions</label>
              <textarea
                id="edit-instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="sm-edit__field">
              <label htmlFor="edit-reference">Reference Material</label>
              <textarea
                id="edit-reference"
                value={referenceMaterial}
                onChange={(event) => setReferenceMaterial(event.target.value)}
              />
              <button
                type="button"
                className="sm-edit__upload"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload .docx or .pdf File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="sm-edit__file-input"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  setReferenceMaterial((prev) =>
                    prev.trim()
                      ? `${prev.trim()}\n\nUploaded file: ${file.name}`
                      : `Uploaded file: ${file.name}`,
                  );
                  event.target.value = "";
                }}
              />
            </div>

            <div className="sm-edit__details-actions">
              <button
                type="button"
                className="sm-edit__btn-primary"
                onClick={() => setShowEssaysModal(true)}
              >
                View Student Essays
              </button>
            </div>
          </section>
        </form>

      {showExtensionModal && (
        <div className="sm-edit__modal" role="presentation">
          <button
            type="button"
            className="sm-edit__modal-backdrop"
            aria-label="Close dialog"
            onClick={() => setShowExtensionModal(false)}
          />
          <form
            className="sm-edit__modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="extension-title"
            onSubmit={handleAddExtension}
          >
            <div className="sm-edit__modal-header">
              <h2 id="extension-title">Add Late Submission Extension</h2>
              <button
                type="button"
                className="sm-edit__modal-close"
                aria-label="Close"
                onClick={() => setShowExtensionModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="sm-edit__field">
              <label htmlFor="extension-email">Student email</label>
              <input
                id="extension-email"
                type="email"
                placeholder="student@example.edu"
                value={extensionEmail}
                onChange={(event) => setExtensionEmail(event.target.value)}
                required
              />
            </div>

            <div className="sm-edit__field">
              <label htmlFor="extension-date">Extended due date</label>
              <input
                id="extension-date"
                type="date"
                value={extensionDate}
                onChange={(event) => setExtensionDate(event.target.value)}
                required
              />
            </div>

            <div className="sm-edit__modal-actions">
              <button
                type="button"
                className="sm-edit__btn-cancel"
                onClick={() => setShowExtensionModal(false)}
              >
                Cancel
              </button>
              <button type="submit" className="sm-edit__btn-primary">
                Add Extension
              </button>
            </div>
          </form>
        </div>
      )}

      {showEssaysModal && (
        <div className="sm-edit__modal" role="presentation">
          <button
            type="button"
            className="sm-edit__modal-backdrop"
            aria-label="Close dialog"
            onClick={() => setShowEssaysModal(false)}
          />
          <form
            className="sm-edit__modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="essays-title"
            onSubmit={handleAddEssay}
          >
            <div className="sm-edit__modal-header">
              <h2 id="essays-title">
                Student Essays (optional)
                <InfoButton
                  text={ESSAYS_TOOLTIP}
                  open={essaysTooltipOpen}
                  onOpen={() => {
                    setEssaysTooltipOpen(true);
                    setIterationsTooltipOpen(false);
                  }}
                  onClose={() => setEssaysTooltipOpen(false)}
                />
              </h2>
              <button
                type="button"
                className="sm-edit__modal-close"
                aria-label="Close"
                onClick={() => setShowEssaysModal(false)}
              >
                ✕
              </button>
            </div>

            <p className="sm-edit__modal-sub">Add New</p>

            <div className="sm-edit__field">
              <input
                type="email"
                placeholder="Add student email here..."
                value={essayEmail}
                onChange={(event) => setEssayEmail(event.target.value)}
                required
              />
            </div>

            <div className="sm-edit__field">
              <textarea
                placeholder="Paste essay here..."
                value={essayText}
                onChange={(event) => setEssayText(event.target.value)}
              />
            </div>

            <button
              type="button"
              className="sm-edit__upload"
              onClick={() => essayFileInputRef.current?.click()}
            >
              Upload .docx or .pdf File
            </button>
            {essayFileName && <p className="sm-edit__modal-sub">{essayFileName}</p>}
            <input
              ref={essayFileInputRef}
              type="file"
              accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sm-edit__file-input"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                setEssayFileName(file.name);
                if (!essayText.trim()) setEssayText(`Uploaded file: ${file.name}`);
                event.target.value = "";
              }}
            />

            {essays.length > 0 && (
              <div className="sm-edit__essay-list">
                {essays.map((item) => (
                  <article className="sm-edit__essay-item" key={item.id}>
                    <h3>
                      {item.email} · {item.name}
                    </h3>
                    <p>{item.essay}</p>
                    <button type="button" onClick={() => handleRemoveEssay(item.id)}>
                      Remove Essay
                    </button>
                  </article>
                ))}
              </div>
            )}

            <div className="sm-edit__modal-actions">
              <button type="submit" className="sm-edit__btn-primary">
                + Add Essay
              </button>
            </div>
          </form>
        </div>
      )}

      {toast && <div className="sm-edit__toast">{toast}</div>}
      </div>
    </PortalShell>
  );
}

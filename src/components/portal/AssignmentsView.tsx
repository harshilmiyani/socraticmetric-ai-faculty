"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import {
  courseHasFinalTest,
  getAssignmentsForCourse,
  removeAssignment,
  type PortalAssignment,
} from "@/lib/portal/assignments-store";
import { findCourseById, getActiveCourse, setActiveCourse, type PortalCourse } from "@/lib/portal/mock-courses";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/assignments.css";
import "@/styles/portal/create-final.css";

type Assignment = Pick<PortalAssignment, "id" | "name" | "dueDate" | "kind">;

type AssignmentsViewProps = {
  courseId?: string;
  courseTitle?: string;
};

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 14a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 5.93"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10a5 5 0 0 0-7.07 0L4.1 12.83a5 5 0 0 0 7.07 7.07L13 18.07"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function EmptyDocumentIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CopySuccessIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function formatDueDateDisplay(value?: string) {
  if (!value) return "No due date";
  const parts = value.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    const [year, month, day] = parts;
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
  }
  return value;
}

export function AssignmentsView({ courseId, courseTitle }: AssignmentsViewProps) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [hasFinalTest, setHasFinalTest] = useState(false);
  const [activeCourse, setActiveCourseState] = useState<PortalCourse | undefined>(undefined);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const effectiveCourseId = activeCourse?.id ?? courseId ?? "";
  const resolvedTitle = courseTitle?.trim() || activeCourse?.title || "Course";

  const refreshAssignments = (cid: string) => {
    if (!cid) {
      setAssignments([]);
      setHasFinalTest(false);
      return;
    }
    setAssignments(getAssignmentsForCourse(cid));
    setHasFinalTest(courseHasFinalTest(cid));
  };

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);

    let resolved: PortalCourse | undefined;
    if (courseId) {
      const found = findCourseById(courseId);
      resolved = found || { id: courseId, title: courseTitle || "Course", semester: "" };
    } else {
      resolved = getActiveCourse();
    }

    if (resolved) {
      setActiveCourseState(resolved);
      setActiveCourse(resolved);
      refreshAssignments(resolved.id);
    } else {
      refreshAssignments("");
    }
    setReady(true);
  }, [router, courseId, courseTitle]);

  const handleCopyLink = async (assignment: Assignment) => {
    const url = `${window.location.origin}/assignments?assignment=${assignment.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(assignment.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      console.log("Copy link:", url);
    }
  };

  const handleDeleteAssignment = (id: string) => {
    removeAssignment(id);
    refreshAssignments(effectiveCourseId);
  };

  const handleCreateAssignment = () => {
    const title = encodeURIComponent(resolvedTitle);
    router.push(`/add-new-assignment?courseId=${encodeURIComponent(effectiveCourseId)}&title=${title}`);
  };

  const handleCreateFinalTest = () => {
    if (hasFinalTest) return;
    const title = encodeURIComponent(resolvedTitle);
    router.push(`/add-new-final?courseId=${encodeURIComponent(effectiveCourseId)}&title=${title}`);
  };

  const isFinalAssignment = (assignment: Assignment) =>
    assignment.kind === "final" || assignment.name === "Final SM Assessment";

  if (!ready) return <div className="sm-portal" aria-busy="true" />;

  const headerActions = (
    <div className="sm-assign__header-actions">
      <button
        type="button"
        className="sm-assign__btn-primary"
        onClick={handleCreateAssignment}
      >
        <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
        Create Assignment
      </button>
      <button
        type="button"
        className={`sm-assign__btn-secondary${hasFinalTest ? " sm-assign__btn-secondary--disabled" : ""}`}
        onClick={handleCreateFinalTest}
        disabled={hasFinalTest}
        title={hasFinalTest ? "A final test already exists for this course" : undefined}
      >
        <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
        Create Final Test
      </button>
    </div>
  );

  return (
    <PortalShell
      active="assignments"
      title="Assignments"
      courseId={effectiveCourseId}
      courseTitle={resolvedTitle}
      userEmail={userEmail}
      subtitle="Create assignments, open submissions, or manage your final test."
      headerActions={headerActions}
    >
      <div className="sm-assign sm-assign--embedded">
        {assignments.length === 0 ? (
          <div className="sm-assign__empty-card">
            <div className="sm-assign__empty-icon-wrap" aria-hidden="true">
              <EmptyDocumentIcon />
            </div>
            <h2 className="sm-assign__empty-title">No assignments yet</h2>
            <p className="sm-assign__empty-desc">
              Create an oral assessment or configure a final test for this course to evaluate student understanding through natural Socratic dialogue.
            </p>
            <div className="sm-assign__empty-actions">
              <button
                type="button"
                className="sm-assign__btn-primary"
                onClick={handleCreateAssignment}
              >
                <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
                Create Assignment
              </button>
              <button
                type="button"
                className={`sm-assign__btn-secondary${hasFinalTest ? " sm-assign__btn-secondary--disabled" : ""}`}
                onClick={handleCreateFinalTest}
                disabled={hasFinalTest}
                title={hasFinalTest ? "A final test already exists for this course" : undefined}
              >
                <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
                Create Final Test
              </button>
            </div>
          </div>
        ) : (
          <section className="sm-assign__panel" aria-label="Assignments list">
            <div className="sm-assign__thead" role="row">
              <span role="columnheader">Assignment Name</span>
              <span role="columnheader">Due Date</span>
              <span role="columnheader" className="sm-assign__th-actions">Actions</span>
            </div>

            <div className="sm-assign__tbody">
              {assignments.map((assignment) => {
                const isFinal = isFinalAssignment(assignment);
                return (
                  <article className="sm-assign__row" role="row" key={assignment.id}>
                    <div role="cell" className="sm-assign__cell-name">
                      <span className="sm-assign__label">Name</span>
                      <div className="sm-assign__name-wrap">
                        <span className={`sm-assign__type-pill sm-assign__type-pill--${isFinal ? "final" : "standard"}`}>
                          {isFinal ? "Final Test" : "Assignment"}
                        </span>
                        <p className="sm-assign__name">{assignment.name}</p>
                      </div>
                    </div>

                    <div role="cell" className="sm-assign__cell-due">
                      <span className="sm-assign__label">Due Date</span>
                      <p className="sm-assign__due">
                        <CalendarIcon />
                        <span>{formatDueDateDisplay(assignment.dueDate)}</span>
                      </p>
                    </div>

                    <div role="cell" className="sm-assign__cell-actions">
                      <span className="sm-assign__label">Actions</span>
                      <div className="sm-assign__actions">
                        <button
                          type="button"
                          className="sm-assign__btn-outline"
                          onClick={() => {
                            const title = encodeURIComponent(resolvedTitle);
                            router.push(
                              `/submissions?courseId=${encodeURIComponent(effectiveCourseId)}&title=${title}&assignmentId=${encodeURIComponent(assignment.id)}`,
                            );
                          }}
                        >
                          Submissions
                        </button>
                        <button
                          type="button"
                          className="sm-assign__btn-outline"
                          onClick={() => {
                            const title = encodeURIComponent(resolvedTitle);
                            router.push(
                              `/assignments/${assignment.id}?courseId=${encodeURIComponent(effectiveCourseId)}&title=${title}`,
                            );
                          }}
                        >
                          {isFinal ? "Edit Final" : "Edit"}
                        </button>
                        <button
                          type="button"
                          className="sm-assign__icon-btn"
                          onClick={() => handleCopyLink(assignment)}
                          aria-label={`Copy link for ${assignment.name}`}
                          title={copiedId === assignment.id ? "Link copied!" : "Copy assignment link"}
                        >
                          {copiedId === assignment.id ? <CopySuccessIcon /> : <LinkIcon />}
                        </button>
                        {!isFinal && (
                          <button
                            type="button"
                            className="sm-assign__icon-btn sm-assign__icon-btn--danger"
                            onClick={() => handleDeleteAssignment(assignment.id)}
                            aria-label={`Delete ${assignment.name}`}
                            title="Delete assignment"
                          >
                            <TrashIcon />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </PortalShell>
  );
}

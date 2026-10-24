"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import { getAssignmentById } from "@/lib/portal/assignments-store";
import { findCourseById } from "@/lib/portal/mock-courses";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/assignments.css";
import "@/styles/portal/submissions.css";

type Submission = {
  id: string;
  userId: string;
  studentName: string;
  dateSubmitted: string;
  gradedStatus: "Graded" | "Ungraded" | "In Progress";
};

type SubmissionsViewProps = {
  courseId: string;
  courseTitle?: string;
  assignmentId?: string;
};

function EmptySubmissionsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function SubmissionsView({
  courseId,
  courseTitle,
  assignmentId,
}: SubmissionsViewProps) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [submissions] = useState<Submission[]>([]);
  const [copied, setCopied] = useState(false);

  const resolvedTitle = useMemo(() => {
    if (courseTitle?.trim()) return courseTitle.trim();
    return findCourseById(courseId)?.title ?? "Course";
  }, [courseId, courseTitle]);

  const assignmentName = useMemo(() => {
    if (!assignmentId) return null;
    return getAssignmentById(assignmentId)?.name ?? null;
  }, [assignmentId]);

  const coursePath = "/assignments";

  const handleCopyLink = async () => {
    if (!assignmentId) return;
    const url = `${window.location.origin}/assignments?assignment=${assignmentId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.log("Copy link:", url);
    }
  };

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);
    setReady(true);
  }, [router]);

  if (!ready) return <div className="sm-portal" aria-busy="true" />;

  return (
    <PortalShell
      active="assignments"
      title="Submissions"
      courseId={courseId}
      courseTitle={resolvedTitle}
      userEmail={userEmail}
      subtitle={
        assignmentName
          ? `Review student submissions for “${assignmentName}”.`
          : "Review student submissions for this course."
      }
      backLabel="Back to assignments"
      onBack={() => router.push(coursePath)}
    >
      <div className="sm-assign sm-assign--embedded">
        {submissions.length === 0 ? (
          <div className="sm-assign__empty-card">
            <div className="sm-assign__empty-icon-wrap" aria-hidden="true">
              <EmptySubmissionsIcon />
            </div>
            <h2 className="sm-assign__empty-title">No submissions yet</h2>
            <p className="sm-assign__empty-desc">
              {assignmentName
                ? `Student oral assessment dialogues and AI evaluation metrics for “${assignmentName}” will appear here once students complete their sessions.`
                : "Student oral assessment dialogues and AI evaluation metrics will appear here once students complete their sessions."}
            </p>
            <div className="sm-assign__empty-actions">
              <button
                type="button"
                className="sm-assign__btn-outline"
                onClick={() => router.push(coursePath)}
              >
                ← Back to assignments
              </button>
              {assignmentId && (
                <button
                  type="button"
                  className="sm-assign__btn-primary"
                  onClick={handleCopyLink}
                >
                  {copied ? (
                    <>
                      <CheckIcon />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <LinkIcon />
                      Copy Assignment Link
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          <section className="sm-assign__panel" aria-label="Submissions list">
            <div className="sm-assign__thead sm-submissions__thead" role="row">
              <span role="columnheader">User ID</span>
              <span role="columnheader">Student Name</span>
              <span role="columnheader">Date Submitted</span>
              <span role="columnheader">Graded Status</span>
              <span role="columnheader">Actions</span>
            </div>

            {submissions.map((submission) => (
              <article
                className="sm-assign__row sm-submissions__row"
                role="row"
                key={submission.id}
              >
                <div role="cell">
                  <span className="sm-assign__label">User ID</span>
                  <p className="sm-assign__name">{submission.userId}</p>
                </div>
                <div role="cell">
                  <span className="sm-assign__label">Student Name</span>
                  <p className="sm-assign__name">{submission.studentName}</p>
                </div>
                <div role="cell">
                  <span className="sm-assign__label">Date Submitted</span>
                  <p className="sm-assign__due">{submission.dateSubmitted}</p>
                </div>
                <div role="cell">
                  <span className="sm-assign__label">Graded Status</span>
                  <span
                    className={`sm-submissions__status sm-submissions__status--${submission.gradedStatus
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {submission.gradedStatus}
                  </span>
                </div>
                <div role="cell">
                  <span className="sm-assign__label">Actions</span>
                  <div className="sm-assign__actions">
                    <button type="button" className="sm-assign__btn-outline">
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </PortalShell>
  );
}

"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/portal/auth";
import { findCourseById, getActiveCourse, setActiveCourse, type PortalCourse } from "@/lib/portal/mock-courses";
import {
  addStudent,
  addStudents,
  getStudentsForCourse,
  parseStudentsCsv,
  removeStudent,
  type PortalStudent,
} from "@/lib/portal/students-store";
import { PortalShell } from "@/components/portal/PortalShell";
import "@/styles/portal/assignments.css";
import "@/styles/portal/students.css";

type StudentsViewProps = {
  courseId?: string;
  courseTitle?: string;
};

const CSV_TOOLTIP =
  "Upload a CSV file with student names and emails. Supported formats: 'Student Name' + 'Email', or 'First Name' + 'Last Name' + 'Email/Email Address'.";

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V5M12 5l-4 4M12 5l4 4M5 19h14"
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function EmptyStudentsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function StudentsView({ courseId, courseTitle }: StudentsViewProps) {
  const router = useRouter();
  const csvInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [ready, setReady] = useState(false);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [students, setStudents] = useState<PortalStudent[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [csvTooltipOpen, setCsvTooltipOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [formError, setFormError] = useState("");

  const [activeCourse, setActiveCourseState] = useState<PortalCourse | undefined>(undefined);

  const effectiveCourseId = activeCourse?.id ?? courseId ?? "";
  const resolvedTitle = courseTitle?.trim() || activeCourse?.title || "Course";

  const refreshStudents = (cid: string) => {
    if (!cid) {
      setStudents([]);
      return;
    }
    setStudents(getStudentsForCourse(cid));
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
      refreshStudents(resolved.id);
    } else {
      refreshStudents("");
    }
    setReady(true);
  }, [router, courseId, courseTitle]);

  useEffect(() => {
    if (!isAddOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => nameInputRef.current?.focus(), 40);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAddModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isAddOpen]);

  const closeAddModal = () => {
    setIsAddOpen(false);
    setStudentName("");
    setStudentEmail("");
    setFormError("");
  };

  const handleAddStudent = (event: FormEvent) => {
    event.preventDefault();
    const name = studentName.trim();
    const email = studentEmail.trim().toLowerCase();
    if (!email) {
      setFormError("Student email is required.");
      return;
    }
    if (!email.includes("@")) {
      setFormError("Please enter a valid student email.");
      return;
    }
    addStudent({
      courseId: effectiveCourseId,
      name: name || email.split("@")[0] || "Student",
      email,
    });
    refreshStudents(effectiveCourseId);
    closeAddModal();
  };

  const handleCsvSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseStudentsCsv(text, effectiveCourseId);
      if (parsed.length === 0) {
        addStudent({
          courseId: effectiveCourseId,
          name: file.name.replace(/\.csv$/i, "") || "Imported Student",
          email: `imported.${Date.now()}@example.com`,
        });
      } else {
        addStudents(parsed);
      }
      refreshStudents(effectiveCourseId);
    } catch {
      addStudent({
        courseId: effectiveCourseId,
        name: file.name.replace(/\.csv$/i, "") || "Imported Student",
        email: `imported.${Date.now()}@example.com`,
      });
      refreshStudents(effectiveCourseId);
    }
    event.target.value = "";
  };

  if (!ready) return <div className="sm-portal" aria-busy="true" />;

  const headerActions = (
    <div className="sm-students__toolbar">
      <button
        type="button"
        className="sm-assign__btn-primary"
        onClick={() => setIsAddOpen(true)}
      >
        <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
        Add Student
      </button>

      <div className="sm-students__csv-wrap">
        <button
          type="button"
          className="sm-assign__btn-secondary"
          onClick={() => csvInputRef.current?.click()}
          onMouseEnter={() => setCsvTooltipOpen(true)}
          onMouseLeave={() => setCsvTooltipOpen(false)}
          onFocus={() => setCsvTooltipOpen(true)}
          onBlur={() => setCsvTooltipOpen(false)}
        >
          <UploadIcon />
          Upload CSV
        </button>
        {csvTooltipOpen && (
          <div className="sm-students__csv-tooltip" role="tooltip">
            {CSV_TOOLTIP}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <PortalShell
        active="students"
        title="Students"
        courseId={effectiveCourseId}
        courseTitle={resolvedTitle}
        userEmail={userEmail}
        subtitle="Manage student enrollment and course roster."
        headerActions={students.length > 0 ? headerActions : undefined}
      >
        <div className="sm-assign sm-assign--embedded">
          {/* Always mounted hidden file input for CSV uploads */}
          <input
            ref={csvInputRef}
            type="file"
            accept=".csv,text/csv"
            className="sm-students__file-input"
            onChange={handleCsvSelected}
            aria-hidden="true"
            tabIndex={-1}
          />

          {students.length === 0 ? (
            <div className="sm-assign__empty-card">
              <div className="sm-assign__empty-icon-wrap" aria-hidden="true">
                <EmptyStudentsIcon />
              </div>
              <h2 className="sm-assign__empty-title">No students enrolled yet</h2>
              <p className="sm-assign__empty-desc">
                Build your class roster by adding students individually or uploading a CSV file to enroll students in this course.
              </p>
              <div className="sm-assign__empty-actions">
                <button
                  type="button"
                  className="sm-assign__btn-primary"
                  onClick={() => setIsAddOpen(true)}
                >
                  <span className="sm-assign__btn-icon" aria-hidden="true">+</span>
                  Add Student
                </button>
                <div className="sm-students__csv-wrap">
                  <button
                    type="button"
                    className="sm-assign__btn-secondary"
                    onClick={() => csvInputRef.current?.click()}
                    onMouseEnter={() => setCsvTooltipOpen(true)}
                    onMouseLeave={() => setCsvTooltipOpen(false)}
                    onFocus={() => setCsvTooltipOpen(true)}
                    onBlur={() => setCsvTooltipOpen(false)}
                  >
                    <UploadIcon />
                    Upload CSV
                  </button>
                  {csvTooltipOpen && (
                    <div className="sm-students__csv-tooltip" role="tooltip">
                      {CSV_TOOLTIP}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <section className="sm-assign__panel" aria-label="Students list">
              <div className="sm-assign__thead sm-assign__thead--students" role="row">
                <span role="columnheader">Name</span>
                <span role="columnheader">Email</span>
                <span role="columnheader">Actions</span>
              </div>

              {students.map((student) => (
                <article
                  className="sm-assign__row sm-assign__row--students"
                  role="row"
                  key={student.id}
                >
                  <div role="cell">
                    <span className="sm-assign__label">Name</span>
                    <p className="sm-assign__name">{student.name}</p>
                  </div>
                  <div role="cell">
                    <span className="sm-assign__label">Email</span>
                    <p className="sm-assign__cell-email">{student.email}</p>
                  </div>
                  <div role="cell">
                    <span className="sm-assign__label">Actions</span>
                    <div className="sm-assign__actions">
                      <button
                        type="button"
                        className="sm-assign__btn-outline"
                        onClick={() => {
                          const title = encodeURIComponent(resolvedTitle);
                          router.push(
                            `/submissions?courseId=${encodeURIComponent(effectiveCourseId)}&title=${title}`,
                          );
                        }}
                      >
                        View Submissions
                      </button>
                      <button
                        type="button"
                        className="sm-assign__icon-btn sm-assign__icon-btn--danger"
                        onClick={() => {
                          removeStudent(student.id);
                          refreshStudents(effectiveCourseId);
                        }}
                        aria-label={`Remove ${student.name}`}
                        title="Remove student"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </PortalShell>

      {isAddOpen && (
        <div className="sm-students__modal" role="presentation">
          <button
            type="button"
            className="sm-students__modal-backdrop"
            aria-label="Close dialog"
            onClick={closeAddModal}
          />
          <form
            className="sm-students__modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-student-title"
            onSubmit={handleAddStudent}
          >
            <div className="sm-students__modal-header">
              <h2 id="add-student-title">Add New Student</h2>
              <button
                type="button"
                className="sm-students__modal-close"
                aria-label="Close"
                onClick={closeAddModal}
              >
                ✕
              </button>
            </div>

            <div className="sm-students__field">
              <label htmlFor="student-name">Student Name</label>
              <input
                ref={nameInputRef}
                id="student-name"
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
              />
            </div>

            <div className="sm-students__field">
              <label htmlFor="student-email">
                Student Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="student-email"
                type="email"
                placeholder="Enter student email"
                value={studentEmail}
                onChange={(event) => {
                  setStudentEmail(event.target.value);
                  if (formError) setFormError("");
                }}
                required
              />
            </div>

            {formError && (
              <p className="sm-students__error" role="alert">
                {formError}
              </p>
            )}

            <div className="sm-students__modal-actions">
              <button type="submit" className="sm-students__modal-submit">
                Add Student
              </button>
              <button type="button" className="sm-students__modal-cancel" onClick={closeAddModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

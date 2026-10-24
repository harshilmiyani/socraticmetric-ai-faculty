"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSession, getSession } from "@/lib/portal/auth";
import {
  getCourses,
  addCourse,
  archiveCourse,
  setActiveCourse,
  type PortalCourse,
} from "@/lib/portal/mock-courses";
import { getAssignmentsForCourse } from "@/lib/portal/assignments-store";
import { getStudentsForCourse } from "@/lib/portal/students-store";
import "@/styles/portal/dashboard.css";

type Course = PortalCourse;

type CourseForm = {
  id: string;
  title: string;
  semester: string;
};

const EMPTY_COURSE_FORM: CourseForm = {
  id: "",
  title: "",
  semester: "SP26",
};

const SEMESTER_PRESETS = [
  { label: "Spring 2026", value: "SP26" },
  { label: "Fall 2026", value: "FA26" },
  { label: "Summer 2026", value: "SU26" },
  { label: "No Semester", value: "NO_SEMESTER" },
];

const formatSemester = (semester: string) => {
  if (!semester || semester === "NO_SEMESTER") {
    return { label: "No semester", tone: "neutral" as const };
  }
  if (semester === "SP26") return { label: "Spring 2026", tone: "primary" as const };
  if (semester === "FA26") return { label: "Fall 2026", tone: "secondary" as const };
  if (semester === "SU26") return { label: "Summer 2026", tone: "accent" as const };
  return { label: semester, tone: "primary" as const };
};

const getInitials = (title: string) => {
  const words = title.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const getGradientTheme = (title: string) => {
  const palettes = [
    "from-blue-to-indigo",
    "from-teal-to-cyan",
    "from-violet-to-purple",
    "from-amber-to-orange",
    "from-emerald-to-teal",
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % palettes.length;
  return palettes[index];
};

export function DashboardView() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [userEmail, setUserEmail] = useState("educator@socraticmetric.ai");
  const [courses, setCourses] = useState<Course[]>([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "title" | "assignments">("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState<CourseForm>(EMPTY_COURSE_FORM);
  const [formError, setFormError] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastArchivedCourse, setLastArchivedCourse] = useState<Course | null>(null);
  const [courseToArchive, setCourseToArchive] = useState<Course | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Initialize session and courses from persistent store
  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUserEmail(session.email);
    setCourses(getCourses());
    setReady(true);
  }, [router]);

  // Global keyboard shortcuts (Press / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        if (userMenuOpen) setUserMenuOpen(false);
        if (courseToArchive) setCourseToArchive(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userMenuOpen, courseToArchive]);

  // Click outside listener for user menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  // Lock body scroll when modal/drawer is open
  useEffect(() => {
    if (!isAddOpen && !courseToArchive) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (isAddOpen) {
      const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 60);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.clearTimeout(timer);
      };
    }
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isAddOpen, courseToArchive]);

  // Toast auto-dismiss
  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 4000);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  // Filtered and sorted courses
  const filteredCourses = useMemo(() => {
    let list = [...courses];
    const q = query.trim().toLowerCase();

    if (q) {
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          c.semester.toLowerCase().includes(q),
      );
    }

    if (sortBy === "title") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "assignments") {
      list.sort(
        (a, b) =>
          getAssignmentsForCourse(b.id).length - getAssignmentsForCourse(a.id).length,
      );
    }

    return list;
  }, [courses, query, sortBy]);

  const handleLogout = () => {
    clearSession();
    router.push("/login");
  };

  const openAddCourse = () => {
    setForm({
      id: `course-${Date.now().toString().slice(-6)}`,
      title: "",
      semester: "SP26",
    });
    setFormError("");
    setIsAddOpen(true);
  };

  const closeAddCourse = () => {
    setIsAddOpen(false);
    setFormError("");
  };

  const handleFormChange =
    (field: keyof CourseForm) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      if (formError) setFormError("");
    };

  const generateRandomId = () => {
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    setForm((prev) => ({ ...prev, id: `crs-${randomSuffix}` }));
  };

  const handleSubmitCourse = (event: FormEvent) => {
    event.preventDefault();

    const id = form.id.trim();
    const title = form.title.trim();
    const semester = form.semester.trim() || "NO_SEMESTER";

    if (!id || !title) {
      setFormError("Please fill in both Course Title and Course ID.");
      return;
    }

    if (courses.some((course) => course.id.toLowerCase() === id.toLowerCase())) {
      setFormError("A course with this ID already exists. Please choose a unique ID.");
      return;
    }

    const newCourse: Course = { id, title, semester };
    addCourse(newCourse);
    setCourses(getCourses());
    closeAddCourse();
    setToastMessage(`Course “${title}” created successfully!`);
  };

  const confirmArchive = (course: Course) => {
    setCourseToArchive(course);
  };

  const executeArchive = () => {
    if (!courseToArchive) return;
    const target = courseToArchive;
    archiveCourse(target.id);
    setLastArchivedCourse(target);
    setCourses(getCourses());
    setCourseToArchive(null);
    setToastMessage(`Course “${target.title}” archived.`);
  };

  const handleUndoArchive = () => {
    if (!lastArchivedCourse) return;
    addCourse(lastArchivedCourse);
    setCourses(getCourses());
    setToastMessage(`Course “${lastArchivedCourse.title}” restored.`);
    setLastArchivedCourse(null);
  };

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id).catch(() => {});
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === id ? null : curr));
    }, 2000);
  };

  const handleOpenCourse = (course: Course) => {
    setActiveCourse(course);
    router.push("/assignments");
  };

  const handleGoToAssignments = (e: React.MouseEvent, course: Course) => {
    e.stopPropagation();
    setActiveCourse(course);
    router.push("/assignments");
  };

  const handleGoToStudents = (e: React.MouseEvent, course: Course) => {
    e.stopPropagation();
    setActiveCourse(course);
    router.push("/students");
  };

  if (!ready) {
    return (
      <div className="sm-dash sm-dash--loading">
        <div className="sm-dash__spinner" />
      </div>
    );
  }

  return (
    <div className="sm-dash">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="sm-dash__toast" role="status" aria-live="polite">
          <span className="sm-dash__toast-icon">✓</span>
          <span className="sm-dash__toast-text">{toastMessage}</span>
          {lastArchivedCourse && toastMessage.includes("archived") && (
            <button
              type="button"
              className="sm-dash__toast-undo"
              onClick={handleUndoArchive}
            >
              Undo
            </button>
          )}
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sm-dash__topbar">
        <div className="sm-dash__brand">
          <div className="sm-dash__brand-link" onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            <img
              className="sm-dash__logo sm-dash__logo--full"
              src="/logos/sm_nav_logo.svg"
              alt="SocraticMetric AI"
            />
            <img
              className="sm-dash__logo sm-dash__logo--mark"
              src="/logos/sm_logo.svg"
              alt="SocraticMetric AI"
            />
          </div>
          <span className="sm-dash__portal-badge">Faculty Portal</span>
        </div>

        {/* User Profile & Menu */}
        <div className="sm-dash__user-wrapper" ref={userMenuRef}>
          <button
            type="button"
            className="sm-dash__user-btn"
            onClick={() => setUserMenuOpen((prev) => !prev)}
            aria-expanded={userMenuOpen}
            aria-haspopup="true"
          >
            <div className="sm-dash__avatar" aria-hidden="true">
              {userEmail.charAt(0).toUpperCase()}
            </div>
            <div className="sm-dash__user-meta">
              <span className="sm-dash__user-name" title={userEmail}>
                {userEmail.split("@")[0]}
              </span>
              <span className="sm-dash__user-role">Faculty</span>
            </div>
            <svg
              className={`sm-dash__user-chevron ${userMenuOpen ? "is-open" : ""}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {userMenuOpen && (
            <div className="sm-dash__dropdown">
              <div className="sm-dash__dropdown-header">
                <p className="sm-dash__dropdown-label">Signed in as</p>
                <p className="sm-dash__dropdown-email">{userEmail}</p>
              </div>
              <div className="sm-dash__dropdown-divider" />
              <button
                type="button"
                className="sm-dash__dropdown-item sm-dash__dropdown-item--danger"
                onClick={handleLogout}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="sm-dash__main">
        {/* Hero Section */}
        <section className="sm-dash__hero">
          <div className="sm-dash__hero-content">
            <h1 className="sm-dash__title">Course Management</h1>
            <p className="sm-dash__subtitle">
              Administer Socratic oral defenses, verify authentic student comprehension, and manage students.
            </p>
          </div>

          <div className="sm-dash__hero-actions">
            <button
              type="button"
              className="sm-dash__btn-primary"
              onClick={openAddCourse}
              id="add-course-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Add New Course</span>
            </button>
          </div>
        </section>

        {/* Controls Toolbar: Search, Sort & View Mode */}
        <div className="sm-dash__toolbar">
          <div className="sm-dash__toolbar-left">
            {/* Search Input */}
            <div className="sm-dash__search">
              <svg
                className="sm-dash__search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search courses by title, ID, or semester..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search courses"
              />
              {query ? (
                <button
                  type="button"
                  className="sm-dash__search-clear"
                  onClick={() => {
                    setQuery("");
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              ) : (
                <span className="sm-dash__search-shortcut" title="Press '/' to search">
                  /
                </span>
              )}
            </div>
            <span className="sm-dash__count-badge">
              {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
            </span>
          </div>

          <div className="sm-dash__toolbar-right">
            {/* Sort Select */}
            <div className="sm-dash__sort-wrapper">
              <label htmlFor="course-sort" className="sm-dash__sort-label">
                Sort:
              </label>
              <select
                id="course-sort"
                className="sm-dash__sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="recent">Recently Added</option>
                <option value="title">Course Title (A-Z)</option>
                <option value="assignments">Most Assessments</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div className="sm-dash__view-toggle" role="group" aria-label="View format">
              <button
                type="button"
                className={`sm-dash__view-btn ${viewMode === "grid" ? "is-active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                title="Grid view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </button>
              <button
                type="button"
                className={`sm-dash__view-btn ${viewMode === "list" ? "is-active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
                title="List view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" />
                  <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" />
                  <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Courses Container */}
        {filteredCourses.length === 0 ? (
          <div className="sm-dash__empty-card">
            <div className="sm-dash__empty-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h2>No courses found</h2>
            <p>
              {query
                ? "No matching courses found for your search. Try different keywords or clear the search."
                : "You don't have any courses configured yet. Create your first course to begin."}
            </p>
            {query ? (
              <button
                type="button"
                className="sm-dash__btn-secondary"
                onClick={() => setQuery("")}
              >
                Clear Search
              </button>
            ) : (
              <button type="button" className="sm-dash__btn-primary" onClick={openAddCourse}>
                Add Your First Course
              </button>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* GRID VIEW */
          <div className="sm-dash__cards-grid" aria-label="Course cards list">
            {filteredCourses.map((course) => {
              const semester = formatSemester(course.semester);
              const assignmentsCount = getAssignmentsForCourse(course.id).length;
              const studentsCount = getStudentsForCourse(course.id).length;
              const initials = getInitials(course.title);
              const theme = getGradientTheme(course.title);
              const isCopied = copiedId === course.id;

              return (
                <article
                  className="sm-dash__course-card"
                  key={course.id}
                  onClick={() => handleOpenCourse(course)}
                >
                  <div className="sm-dash__card-header">
                    <div className="sm-dash__card-identity">
                      <div className={`sm-dash__avatar-badge sm-dash__avatar-badge--${theme}`}>
                        {initials}
                      </div>
                      <div className="sm-dash__title-group">
                        <h2 className="sm-dash__course-title" title={course.title}>
                          {course.title}
                        </h2>
                        <span className={`sm-dash__badge sm-dash__badge--${semester.tone}`}>
                          {semester.label}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="sm-dash__btn-archive"
                      onClick={(e) => {
                        e.stopPropagation();
                        confirmArchive(course);
                      }}
                      aria-label={`Archive course ${course.title}`}
                      title="Archive course"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8v13H3V8" />
                        <path d="M1 3h22v5H1z" />
                        <path d="M10 12h4" />
                      </svg>
                    </button>
                  </div>

                  {/* Course ID Monospace Tag with Copy Button */}
                  <div className="sm-dash__id-strip">
                    <span className="sm-dash__id-label">Course ID</span>
                    <button
                      type="button"
                      className="sm-dash__id-pill"
                      onClick={(e) => handleCopyId(e, course.id)}
                      title="Click to copy full Course ID"
                    >
                      <span className="sm-dash__id-text">{course.id}</span>
                      <span className="sm-dash__id-action">
                        {isCopied ? (
                          <span className="sm-dash__copied-text">Copied!</span>
                        ) : (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>

                  {/* Metrics Row */}
                  <div className="sm-dash__metrics-row">
                    <div
                      className="sm-dash__metric-chip"
                      onClick={(e) => handleGoToAssignments(e, course)}
                      title="View assignments for this course"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>
                        <strong>{assignmentsCount}</strong> {assignmentsCount === 1 ? "Assessment" : "Assessments"}
                      </span>
                    </div>

                    <div
                      className="sm-dash__metric-chip"
                      onClick={(e) => handleGoToStudents(e, course)}
                      title="View students for this course"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <span>
                        <strong>{studentsCount}</strong> {studentsCount === 1 ? "Student" : "Students"}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="sm-dash__card-footer">
                    <button
                      type="button"
                      className="sm-dash__btn-open"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCourse(course);
                      }}
                    >
                      <span>Open Course</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="sm-dash__btn-sub"
                      onClick={(e) => handleGoToAssignments(e, course)}
                      title="Manage assignments"
                    >
                      Assignments
                    </button>
                    <button
                      type="button"
                      className="sm-dash__btn-sub"
                      onClick={(e) => handleGoToStudents(e, course)}
                      title="Manage students"
                    >
                      Students
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* LIST VIEW */
          <div className="sm-dash__table-card" role="region" aria-label="Course list table">
            <table className="sm-dash__table">
              <thead>
                <tr>
                  <th>Course Title & ID</th>
                  <th>Semester</th>
                  <th>Assessments</th>
                  <th>Students</th>
                  <th>Status</th>
                  <th className="sm-dash__th-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => {
                  const semester = formatSemester(course.semester);
                  const assignmentsCount = getAssignmentsForCourse(course.id).length;
                  const studentsCount = getStudentsForCourse(course.id).length;
                  const initials = getInitials(course.title);
                  const theme = getGradientTheme(course.title);

                  return (
                    <tr
                      key={course.id}
                      className="sm-dash__table-row"
                      onClick={() => handleOpenCourse(course)}
                    >
                      <td>
                        <div className="sm-dash__table-course-cell">
                          <div className={`sm-dash__avatar-badge sm-dash__avatar-badge--sm sm-dash__avatar-badge--${theme}`}>
                            {initials}
                          </div>
                          <div>
                            <span className="sm-dash__table-title">{course.title}</span>
                            <span className="sm-dash__table-id">{course.id}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`sm-dash__badge sm-dash__badge--${semester.tone}`}>
                          {semester.label}
                        </span>
                      </td>
                      <td>
                        <span className="sm-dash__table-count">
                          <strong>{assignmentsCount}</strong> {assignmentsCount === 1 ? "Assessment" : "Assessments"}
                        </span>
                      </td>
                      <td>
                        <span className="sm-dash__table-count">
                          <strong>{studentsCount}</strong> {studentsCount === 1 ? "Student" : "Students"}
                        </span>
                      </td>
                      <td>
                        <span className="sm-dash__status-indicator">
                          <span className="sm-dash__status-dot" />
                          Active
                        </span>
                      </td>
                      <td className="sm-dash__td-right" onClick={(e) => e.stopPropagation()}>
                        <div className="sm-dash__table-actions">
                          <button
                            type="button"
                            className="sm-dash__btn-table-primary"
                            onClick={() => handleOpenCourse(course)}
                          >
                            Open
                          </button>
                          <button
                            type="button"
                            className="sm-dash__btn-table-sub"
                            onClick={(e) => handleGoToAssignments(e, course)}
                          >
                            Assignments
                          </button>
                          <button
                            type="button"
                            className="sm-dash__btn-table-sub"
                            onClick={(e) => handleGoToStudents(e, course)}
                          >
                            Students
                          </button>
                          <button
                            type="button"
                            className="sm-dash__btn-archive"
                            onClick={() => confirmArchive(course)}
                            title="Archive course"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 8v13H3V8" />
                              <path d="M1 3h22v5H1z" />
                              <path d="M10 12h4" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Archive Confirmation Dialog */}
      {courseToArchive && (
        <div className="sm-dash__dialog-overlay" role="presentation">
          <div
            className="sm-dash__dialog"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="archive-dialog-title"
          >
            <div className="sm-dash__dialog-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 8v13H3V8" />
                <path d="M1 3h22v5H1z" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <h2 id="archive-dialog-title">Archive Course?</h2>
            <p>
              Are you sure you want to archive <strong>“{courseToArchive.title}”</strong>?
              You can undo this immediately from the notification banner.
            </p>
            <div className="sm-dash__dialog-actions">
              <button
                type="button"
                className="sm-dash__btn-secondary"
                onClick={() => setCourseToArchive(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="sm-dash__btn-danger"
                onClick={executeArchive}
              >
                Archive Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Course Drawer */}
      {isAddOpen && (
        <div className="sm-drawer" role="presentation">
          <button
            type="button"
            className="sm-drawer__backdrop"
            aria-label="Close add course drawer"
            onClick={closeAddCourse}
          />

          <aside
            className="sm-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-course-title"
          >
            <div className="sm-drawer__header">
              <div>
                <p className="sm-drawer__eyebrow">Courses Management</p>
                <h2 id="add-course-title">Add New Course</h2>
                <p className="sm-drawer__subtitle">
                  Configure a new course section to begin assigning Socratic oral assessments.
                </p>
              </div>
              <button
                type="button"
                className="sm-drawer__close"
                onClick={closeAddCourse}
                aria-label="Close drawer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="sm-drawer__form" onSubmit={handleSubmitCourse}>
              <div className="sm-drawer__field">
                <label htmlFor="course-title">
                  Course Title <span className="sm-drawer__req">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="course-title"
                  name="courseTitle"
                  type="text"
                  placeholder="e.g. CS 101: Introduction to Computer Science"
                  value={form.title}
                  onChange={handleFormChange("title")}
                  required
                />
              </div>

              <div className="sm-drawer__field">
                <div className="sm-drawer__field-label-row">
                  <label htmlFor="course-id">
                    Course ID <span className="sm-drawer__req">*</span>
                  </label>
                  <button
                    type="button"
                    className="sm-drawer__gen-id-btn"
                    onClick={generateRandomId}
                    title="Generate a unique ID automatically"
                  >
                    Auto-generate ID
                  </button>
                </div>
                <input
                  id="course-id"
                  name="courseId"
                  type="text"
                  placeholder="e.g. cs101-sp26 or b71e-..."
                  value={form.id}
                  onChange={handleFormChange("id")}
                  required
                />
                <span className="sm-drawer__field-hint">
                  A unique identifier for URLs and student access links.
                </span>
              </div>

              <div className="sm-drawer__field">
                <label htmlFor="course-semester">
                  Academic Term / Semester <span className="sm-drawer__req">*</span>
                </label>
                <input
                  id="course-semester"
                  name="semester"
                  type="text"
                  placeholder="e.g. SP26, FA26, or Fall 2026"
                  value={form.semester}
                  onChange={handleFormChange("semester")}
                  required
                />
                <div className="sm-drawer__presets">
                  <span className="sm-drawer__presets-label">Quick select:</span>
                  {SEMESTER_PRESETS.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      className={`sm-drawer__preset-tag ${form.semester === preset.value ? "is-selected" : ""}`}
                      onClick={() => setForm((prev) => ({ ...prev, semester: preset.value }))}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm-drawer__info-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p>
                  After creating your course, you can immediately configure AI-driven oral prompts, upload rubric docs, and add students.
                </p>
              </div>

              {formError && (
                <div className="sm-drawer__error" role="alert">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{formError}</span>
                </div>
              )}

              <div className="sm-drawer__actions">
                <button type="button" className="sm-drawer__cancel" onClick={closeAddCourse}>
                  Cancel
                </button>
                <button type="submit" className="sm-drawer__submit">
                  <span>Create Course</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </form>
          </aside>
        </div>
      )}
    </div>
  );
}

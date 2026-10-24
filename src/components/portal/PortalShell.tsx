"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSession } from "@/lib/portal/auth";
import "@/styles/portal/shell.css";

export type PortalNavKey = "home" | "assignments" | "students";

type PortalShellProps = {
  active: PortalNavKey;
  title: string;
  courseId: string;
  courseTitle: string;
  userEmail: string;
  subtitle?: string;
  backLabel?: string;
  onBack?: () => void;
  headerActions?: ReactNode;
  children: ReactNode;
};

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M4 18.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StudentsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16.5 12a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M2.5 19.5c.6-3 2.9-4.5 6.5-4.5s5.9 1.5 6.5 4.5M14.5 15c1.6-.3 3.4 0 4.9 1.1 1.2.9 1.8 2.1 2.1 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m7 16-4-4m0 0 4-4m-4 4h18m-4 4 4 4m0 0-4 4m4-4H3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function courseHref(courseId: string, courseTitle: string) {
  if (courseId) {
    return `/assignments?courseId=${encodeURIComponent(courseId)}&title=${encodeURIComponent(courseTitle)}`;
  }
  return "/assignments";
}

function studentsHref(courseId: string, courseTitle: string) {
  if (courseId) {
    return `/students?courseId=${encodeURIComponent(courseId)}&title=${encodeURIComponent(courseTitle)}`;
  }
  return "/students";
}

export function PortalShell({
  active,
  title,
  courseId,
  courseTitle,
  userEmail,
  subtitle,
  backLabel,
  onBack,
  headerActions,
  children,
}: PortalShellProps) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    clearSession();
    router.push("/login");
  };

  const closeMobile = () => setMobileOpen(false);

  const avatarInitial = (userEmail || "Faculty").charAt(0).toUpperCase();

  return (
    <div className="sm-portal">
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="sm-portal__backdrop"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Modern Sidebar */}
      <aside
        className={`sm-portal__sidebar${mobileOpen ? " sm-portal__sidebar--open" : ""}`}
        aria-label="Course navigation"
      >
        {/* Brand & Mobile Close */}
        <div className="sm-portal__brand-header">
          <button
            type="button"
            className="sm-portal__brand"
            onClick={() => {
              closeMobile();
              router.push("/");
            }}
          >
            <img
              src="/logos/sm_nav_logo.svg"
              alt="SocraticMetric AI"
              className="sm-portal__brand-logo"
            />
            <span className="sm-portal__brand-badge">Faculty Portal</span>
          </button>

          <button
            type="button"
            className="sm-portal__close-btn"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Active Course Card */}
        {courseTitle && (
          <div className="sm-portal__course-card">
            <div className="sm-portal__course-card-top">
              <span className="sm-portal__course-card-label">Active Course</span>
              <button
                type="button"
                className="sm-portal__course-switch-btn"
                onClick={() => {
                  closeMobile();
                  router.push("/");
                }}
                title="Switch to another course"
              >
                <span>Switch</span>
                <SwitchIcon />
              </button>
            </div>
            <p className="sm-portal__course-card-name" title={courseTitle}>
              {courseTitle}
            </p>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="sm-portal__nav" aria-label="Course Sections">
          <button
            type="button"
            className={`sm-portal__nav-btn${active === "home" ? " sm-portal__nav-btn--active" : ""}`}
            onClick={() => {
              closeMobile();
              router.push("/");
            }}
            aria-current={active === "home" ? "page" : undefined}
          >
            <span className="sm-portal__nav-icon">
              <HomeIcon />
            </span>
            <span className="sm-portal__nav-label">All Courses</span>
          </button>

          <button
            type="button"
            className={`sm-portal__nav-btn${active === "assignments" ? " sm-portal__nav-btn--active" : ""}`}
            onClick={() => {
              closeMobile();
              router.push(courseHref(courseId, courseTitle));
            }}
            aria-current={active === "assignments" ? "page" : undefined}
          >
            <span className="sm-portal__nav-icon">
              <BookIcon />
            </span>
            <span className="sm-portal__nav-label">Assignments</span>
          </button>

          <button
            type="button"
            className={`sm-portal__nav-btn${active === "students" ? " sm-portal__nav-btn--active" : ""}`}
            onClick={() => {
              closeMobile();
              router.push(studentsHref(courseId, courseTitle));
            }}
            aria-current={active === "students" ? "page" : undefined}
          >
            <span className="sm-portal__nav-icon">
              <StudentsIcon />
            </span>
            <span className="sm-portal__nav-label">Students</span>
          </button>
        </nav>

        {/* Bottom User Footer */}
        <div className="sm-portal__sidebar-footer">
          <div className="sm-portal__user-info">
            <div className="sm-portal__user-avatar" aria-hidden="true">
              {avatarInitial}
            </div>
            <div className="sm-portal__user-meta">
              <span className="sm-portal__user-email" title={userEmail}>
                {userEmail}
              </span>
              <span className="sm-portal__user-role">Faculty</span>
            </div>
          </div>
          <button
            type="button"
            className="sm-portal__logout-btn"
            onClick={handleLogout}
            title="Log out"
            aria-label="Log out"
          >
            <LogoutIcon />
          </button>
        </div>
      </aside>

      {/* Main Page Area */}
      <div className="sm-portal__body">
        <header className="sm-portal__topbar">
          <div className="sm-portal__topbar-left">
            <button
              type="button"
              className="sm-portal__menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>

            <div className="sm-portal__heading">
              {backLabel && onBack && (
                <button
                  type="button"
                  className="sm-portal__back-btn"
                  onClick={onBack}
                  aria-label={backLabel}
                >
                  <span className="sm-portal__back-arrow" aria-hidden="true">
                    <ArrowLeftIcon />
                  </span>
                  <span className="sm-portal__back-text">{backLabel}</span>
                </button>
              )}
              <div className="sm-portal__title-row">
                <h1>{title}</h1>
                {courseTitle && (
                  <span className="sm-portal__course-badge">
                    COURSE: {courseTitle.toUpperCase()}
                  </span>
                )}
              </div>
              {subtitle && <p className="sm-portal__subtitle">{subtitle}</p>}
            </div>
          </div>

          {headerActions && (
            <div className="sm-portal__header-actions">
              {headerActions}
            </div>
          )}
        </header>

        <main className="sm-portal__main">{children}</main>
      </div>
    </div>
  );
}

export function WizardSteps({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="sm-portal__steps" aria-label="Progress">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const done = stepNumber < current;
        const active = stepNumber === current;
        return (
          <div
            key={label}
            className={`sm-portal__step${active ? " sm-portal__step--active" : ""}${done ? " sm-portal__step--done" : ""}`}
          >
            <span className="sm-portal__step-index">{done ? "✓" : stepNumber}</span>
            {label}
          </div>
        );
      })}
    </div>
  );
}

export function CourseFlowHint({ current }: { current?: "assignments" | "students" | "create" }) {
  return null;
}

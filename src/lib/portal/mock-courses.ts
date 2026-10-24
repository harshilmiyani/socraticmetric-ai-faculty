export type PortalCourse = {
  id: string;
  title: string;
  semester: string;
};

export const MOCK_COURSES: PortalCourse[] = [
  {
    id: "cs-101",
    title: "CS 101: Introduction to Computer Science",
    semester: "Spring 2026",
  },
  {
    id: "cap-611",
    title: "CAP 611: SMART Capstone Project",
    semester: "Spring 2026",
  },
];

const STORAGE_KEY = "sm-faculty-courses";

export function getCourses(): PortalCourse[] {
  if (typeof window === "undefined") return MOCK_COURSES;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveCourses(MOCK_COURSES);
      return MOCK_COURSES;
    }
    const parsed = JSON.parse(raw) as PortalCourse[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      saveCourses(MOCK_COURSES);
      return MOCK_COURSES;
    }
    const cleaned = parsed.filter(
      (c) => c.id !== "b71e15c3-e278-44e1-907c-be3593d78eea" && c.id !== "1"
    );
    if (cleaned.length === 0) {
      saveCourses(MOCK_COURSES);
      return MOCK_COURSES;
    }
    if (cleaned.length !== parsed.length) {
      saveCourses(cleaned);
    }
    return cleaned;
  } catch {
    return MOCK_COURSES;
  }
}

export function saveCourses(courses: PortalCourse[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  } catch {
    // Ignore storage quota errors
  }
}

export function addCourse(course: PortalCourse): PortalCourse {
  const current = getCourses();
  const updated = [course, ...current];
  saveCourses(updated);
  return course;
}

export function archiveCourse(id: string): PortalCourse[] {
  const current = getCourses();
  const updated = current.filter((c) => c.id !== id);
  saveCourses(updated);
  return updated;
}

export function findCourseById(id: string): PortalCourse | undefined {
  if (typeof window !== "undefined") {
    const list = getCourses();
    const found = list.find((course) => course.id === id);
    if (found) return found;
  }
  return undefined;
}

const ACTIVE_COURSE_KEY = "sm-faculty-active-course";

export function setActiveCourse(course: PortalCourse | { id: string; title: string; semester?: string }) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      ACTIVE_COURSE_KEY,
      JSON.stringify({
        id: course.id,
        title: course.title,
        semester: course.semester || "",
      })
    );
  } catch {
    // Ignore storage quota errors
  }
}

export function getActiveCourse(): PortalCourse | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.localStorage.getItem(ACTIVE_COURSE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.id) return parsed;
    }
  } catch {
    // Ignore parse errors
  }
  const courses = getCourses();
  return courses[0];
}



export type PortalStudent = {
  id: string;
  courseId: string;
  name: string;
  email: string;
};

const STORAGE_KEY = "sm-faculty-students";

const SEED_STUDENTS: PortalStudent[] = [];

function readAll(): PortalStudent[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as PortalStudent[];
    if (!Array.isArray(parsed)) return [];
    const cleaned = parsed.filter(
      (item) =>
        item.id !== "s1" &&
        item.id !== "s2" &&
        item.courseId !== "b71e15c3-e278-44e1-907c-be3593d78eea" &&
        item.courseId !== "1"
    );
    if (cleaned.length !== parsed.length) {
      writeAll(cleaned);
    }
    return cleaned;
  } catch {
    return [];
  }
}

function writeAll(students: PortalStudent[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function getStudentsForCourse(courseId: string): PortalStudent[] {
  return readAll()
    .filter((item) => item.courseId === courseId)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function addStudent(student: Omit<PortalStudent, "id"> & { id?: string }): PortalStudent {
  const next: PortalStudent = {
    ...student,
    id: student.id ?? `s-${Date.now()}`,
    email: student.email.trim().toLowerCase(),
    name: student.name.trim(),
  };
  const all = readAll();
  writeAll([next, ...all]);
  return next;
}

export function addStudents(students: Array<Omit<PortalStudent, "id"> & { id?: string }>) {
  const all = readAll();
  const next = students.map((student, index) => ({
    ...student,
    id: student.id ?? `s-${Date.now()}-${index}`,
    email: student.email.trim().toLowerCase(),
    name: student.name.trim(),
  }));
  writeAll([...next, ...all]);
  return next;
}

export function removeStudent(id: string) {
  writeAll(readAll().filter((item) => item.id !== id));
}

function splitCsvLine(line: string) {
  return line.split(",").map((part) => part.trim().replace(/^"|"$/g, ""));
}

export function parseStudentsCsv(text: string, courseId: string): Array<Omit<PortalStudent, "id">> {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return [];

  const header = splitCsvLine(lines[0]).map((h) => h.toLowerCase());
  const hasHeader =
    header.some((h) => h.includes("email")) ||
    header.some((h) => h.includes("name"));

  const rows = hasHeader ? lines.slice(1) : lines;
  const emailIndex = hasHeader
    ? header.findIndex((h) => h === "email" || h === "email address" || h.includes("email"))
    : -1;
  const nameIndex = hasHeader ? header.findIndex((h) => h === "student name" || h === "name") : -1;
  const firstIndex = hasHeader ? header.findIndex((h) => h === "first name") : -1;
  const lastIndex = hasHeader ? header.findIndex((h) => h === "last name") : -1;

  return rows
    .map((line) => {
      const cols = splitCsvLine(line);
      if (hasHeader) {
        const email = emailIndex >= 0 ? cols[emailIndex] || "" : "";
        let name = nameIndex >= 0 ? cols[nameIndex] || "" : "";
        if (!name && firstIndex >= 0) {
          name = [cols[firstIndex], lastIndex >= 0 ? cols[lastIndex] : ""].filter(Boolean).join(" ");
        }
        if (!email) return null;
        return {
          courseId,
          email,
          name: name || email.split("@")[0] || "Student",
        };
      }

      if (cols.length >= 3) {
        return {
          courseId,
          name: `${cols[0]} ${cols[1]}`.trim(),
          email: cols[2],
        };
      }

      if (cols.length >= 2) {
        return {
          courseId,
          name: cols[0],
          email: cols[1],
        };
      }

      return null;
    })
    .filter((item): item is Omit<PortalStudent, "id"> => Boolean(item?.email));
}

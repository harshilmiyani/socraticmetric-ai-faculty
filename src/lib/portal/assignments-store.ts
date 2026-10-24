export type AssignmentEssay = {
  id: string;
  email: string;
  name: string;
  essay: string;
  fileName?: string;
};

export type LateExtension = {
  id: string;
  email: string;
  extendedDueDate: string;
};

export type AssignmentKind = "assignment" | "final";

export type PortalAssignment = {
  id: string;
  courseId: string;
  name: string;
  dueDate: string;
  kind?: AssignmentKind;
  topic?: string;
  materials?: string;
  instructions?: string;
  referenceMaterial?: string;
  concepts?: string;
  questionCount?: number;
  questionTypes?: string[];
  difficulty?: string;
  minIterations?: number;
  essays?: AssignmentEssay[];
  extensions?: LateExtension[];
  createdAt: string;
};

const STORAGE_KEY = "sm-faculty-assignments";

const SEED_ASSIGNMENTS: PortalAssignment[] = [];

function readAll(): PortalAssignment[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as PortalAssignment[];
    if (!Array.isArray(parsed)) return [];
    const cleaned = parsed.filter(
      (item) =>
        item.id !== "a1" &&
        item.id !== "a2" &&
        item.courseId !== "b71e15c3-e278-44e1-907c-be3593d78eea" &&
        item.courseId !== "1" &&
        item.name !== "Sprint 1 Architecture Review"
    );
    if (cleaned.length !== parsed.length) {
      writeAll(cleaned);
    }
    return cleaned;
  } catch {
    return [];
  }
}

function writeAll(assignments: PortalAssignment[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
}

export function getAssignmentsForCourse(courseId: string): PortalAssignment[] {
  return readAll()
    .filter((item) => item.courseId === courseId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getAssignmentById(id: string): PortalAssignment | undefined {
  return readAll().find((item) => item.id === id);
}

export function addAssignment(
  assignment: Omit<PortalAssignment, "id" | "createdAt"> & {
    id?: string;
    createdAt?: string;
  },
): PortalAssignment {
  const next: PortalAssignment = {
    essays: [],
    extensions: [],
    kind: "assignment",
    questionCount: 3,
    questionTypes: ["Adaptive", "Adaptive", "Adaptive"],
    difficulty: "medium",
    minIterations: 2,
    ...assignment,
    id: assignment.id ?? `a-${Date.now()}`,
    createdAt: assignment.createdAt ?? new Date().toISOString(),
  };
  const all = readAll();
  writeAll([next, ...all]);
  return next;
}

export function courseHasFinalTest(courseId: string): boolean {
  return readAll().some(
    (item) => item.courseId === courseId && (item.kind === "final" || item.name === "Final SM Assessment"),
  );
}

export function updateAssignment(
  id: string,
  patch: Partial<Omit<PortalAssignment, "id" | "createdAt" | "courseId">>,
): PortalAssignment | undefined {
  const all = readAll();
  const index = all.findIndex((item) => item.id === id);
  if (index < 0) return undefined;
  const updated = { ...all[index], ...patch };
  all[index] = updated;
  writeAll(all);
  return updated;
}

export function removeAssignment(id: string) {
  const all = readAll().filter((item) => item.id !== id);
  writeAll(all);
}

import type { Metadata } from "next";
import { StudentsView } from "@/components/portal/StudentsView";
import { findCourseById } from "@/lib/portal/mock-courses";

type PageProps = {
  searchParams: Promise<{ courseId?: string; title?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { courseId, title } = await searchParams;
  const courseTitle =
    title?.trim() || (courseId ? findCourseById(courseId)?.title : undefined) || "Course";

  return {
    title: `Students | ${courseTitle} | SocraticMetric`,
    description: `Manage students for ${courseTitle}.`,
  };
}

export default async function StudentsPage({ searchParams }: PageProps) {
  const { courseId, title } = await searchParams;
  const resolvedCourseId = courseId?.trim() || "";

  return <StudentsView courseId={resolvedCourseId} courseTitle={title} />;
}

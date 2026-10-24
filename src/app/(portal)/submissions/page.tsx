import type { Metadata } from "next";
import { SubmissionsView } from "@/components/portal/SubmissionsView";
import { findCourseById } from "@/lib/portal/mock-courses";

type PageProps = {
  searchParams: Promise<{
    courseId?: string;
    title?: string;
    assignmentId?: string;
  }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { courseId, title } = await searchParams;
  const courseTitle =
    title?.trim() || (courseId ? findCourseById(courseId)?.title : undefined) || "Course";

  return {
    title: `Submissions | ${courseTitle} | SocraticMetric`,
    description: `View student submissions for ${courseTitle}.`,
  };
}

export default async function SubmissionsPage({ searchParams }: PageProps) {
  const { courseId, title, assignmentId } = await searchParams;
  const resolvedCourseId = courseId?.trim() || "";

  return (
    <SubmissionsView
      courseId={resolvedCourseId}
      courseTitle={title}
      assignmentId={assignmentId}
    />
  );
}

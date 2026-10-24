import type { Metadata } from "next";
import { EditAssignmentView } from "@/components/portal/EditAssignmentView";
import { findCourseById } from "@/lib/portal/mock-courses";

type PageProps = {
  params: Promise<{ assignmentId: string }>;
  searchParams: Promise<{ courseId?: string; title?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { assignmentId } = await params;
  const { courseId, title } = await searchParams;
  const courseTitle =
    title?.trim() || (courseId ? findCourseById(courseId)?.title : undefined) || "Course";

  return {
    title: `Edit Assignment | ${courseTitle} | SocraticMetric`,
    description: `View and edit assignment ${assignmentId} for ${courseTitle}.`,
  };
}

export default async function AssignmentEditPage({ params, searchParams }: PageProps) {
  const { assignmentId } = await params;
  const { courseId, title } = await searchParams;

  return (
    <EditAssignmentView
      assignmentId={assignmentId}
      courseId={courseId}
      courseTitle={title}
    />
  );
}

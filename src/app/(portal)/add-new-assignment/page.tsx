import type { Metadata } from "next";
import { CreateAssignmentView } from "@/components/portal/CreateAssignmentView";
import { findCourseById } from "@/lib/portal/mock-courses";

type PageProps = {
  searchParams: Promise<{ courseId?: string; title?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { courseId, title } = await searchParams;
  const courseTitle =
    title?.trim() || (courseId ? findCourseById(courseId)?.title : undefined) || "Course";

  return {
    title: `Create Assignment | ${courseTitle} | SocraticMetric`,
    description: `Create a new assignment for ${courseTitle}.`,
  };
}

export default async function AddNewAssignmentPage({ searchParams }: PageProps) {
  const { courseId, title } = await searchParams;
  const resolvedCourseId = courseId?.trim() || "";

  return <CreateAssignmentView courseId={resolvedCourseId} courseTitle={title} />;
}

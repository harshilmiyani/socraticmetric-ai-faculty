import type { Metadata } from "next";
import { CreateFinalTestView } from "@/components/portal/CreateFinalTestView";
import { findCourseById } from "@/lib/portal/mock-courses";

type PageProps = {
  searchParams: Promise<{ courseId?: string; title?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { courseId, title } = await searchParams;
  const courseTitle =
    title?.trim() || (courseId ? findCourseById(courseId)?.title : undefined) || "Course";

  return {
    title: `Create Final | ${courseTitle} | SocraticMetric`,
    description: `Create a final SM assessment for ${courseTitle}.`,
  };
}

export default async function AddNewFinalPage({ searchParams }: PageProps) {
  const { courseId, title } = await searchParams;
  const resolvedCourseId = courseId?.trim() || "";

  return <CreateFinalTestView courseId={resolvedCourseId} courseTitle={title} />;
}

import type { Metadata } from "next";
import { AssignmentsView } from "@/components/portal/AssignmentsView";

export const metadata: Metadata = {
  title: "Assignments | SocraticMetric",
  description: "Manage course assignments and assessments.",
};

type PageProps = {
  searchParams: Promise<{ courseId?: string; title?: string }>;
};

export default async function AssignmentsPage({ searchParams }: PageProps) {
  const { courseId, title } = await searchParams;
  return <AssignmentsView courseId={courseId} courseTitle={title} />;
}

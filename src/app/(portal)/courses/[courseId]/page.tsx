import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ title?: string }>;
};

export default async function CoursePage({ params, searchParams }: PageProps) {
  const { courseId } = await params;
  const { title } = await searchParams;
  const query = new URLSearchParams();
  if (courseId) query.set("courseId", courseId);
  if (title) query.set("title", title);
  const qStr = query.toString();
  redirect(`/assignments${qStr ? `?${qStr}` : ""}`);
}

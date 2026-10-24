import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LegacyCourseDashboardRedirect({ params, searchParams }: PageProps) {
  const { courseId } = await params;
  const query = await searchParams;
  const titleValue = query.title;
  const title = Array.isArray(titleValue) ? titleValue[0] : titleValue;

  redirect("/assignments");
}

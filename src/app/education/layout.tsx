import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Higher Education",
  description:
    "When AI can write the essay, can your student defend it? Socratic Metric verifies authentic student comprehension through live oral assessment.",
  path: "/education",
});

export default function EducationLayout({ children }: { children: ReactNode }) {
  return children;
}

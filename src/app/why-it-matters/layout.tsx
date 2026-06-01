import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Why It Matters",
  description:
    "Verify true comprehension when AI can generate the output. Understand the verification gap and how Socratic Metric proves authentic understanding.",
  path: "/why-it-matters",
});

export default function WhyItMattersLayout({ children }: { children: ReactNode }) {
  return children;
}

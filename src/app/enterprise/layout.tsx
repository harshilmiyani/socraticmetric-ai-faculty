import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Enterprise",
  description:
    "Written output is no longer reliable proof of understanding. Verify authentic employee comprehension with Socratic Metric for enterprise training and compliance.",
  path: "/enterprise",
});

export default function EnterpriseLayout({ children }: { children: ReactNode }) {
  return children;
}

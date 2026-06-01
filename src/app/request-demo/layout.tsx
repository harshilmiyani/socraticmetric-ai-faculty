import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Request a Demo",
  description:
    "See how Socratic Metric verifies real understanding. Book a demo to evaluate live cognition beyond AI-generated content.",
  path: "/request-demo",
});

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return children;
}

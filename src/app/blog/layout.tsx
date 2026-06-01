import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

/**
 * Blog routes re-fetch published posts from Sanity on this interval (seconds) when visitors load pages.
 * No webhooks or live connections — publish in Studio, then wait up to this long (or trigger a redeploy).
 */
export const revalidate = 60;

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on authentic assessment, AI-era verification, and live cognition from the Socratic Metric team.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}

import type { ReactNode } from "react";

/**
 * Blog routes re-fetch published posts from Sanity on this interval (seconds) when visitors load pages.
 * No webhooks or live connections — publish in Studio, then wait up to this long (or trigger a redeploy).
 */
export const revalidate = 60;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}

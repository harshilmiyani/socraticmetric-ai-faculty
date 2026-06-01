import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "How Socratic Metric uses cookies and similar technologies on our website.",
  path: "/cookies",
});

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return children;
}

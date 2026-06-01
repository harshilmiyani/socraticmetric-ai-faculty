import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Government",
  description:
    "When AI can generate the procedure, written output no longer guarantees operational readiness. Verify authentic comprehension for government and public sector.",
  path: "/government",
});

export default function GovernmentLayout({ children }: { children: ReactNode }) {
  return children;
}

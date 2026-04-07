import type { ReactNode } from "react";

/** Time-based revalidation so new/edited Sanity posts appear without redeploying. */
export const revalidate = 60;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}

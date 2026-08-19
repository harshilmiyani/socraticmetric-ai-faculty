"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

const COMPACT_MOTION_QUERY = "(max-width: 1023px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function shouldReduceMotion() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia(COMPACT_MOTION_QUERY).matches ||
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/** Disables Framer Motion on mobile/tablet and for prefers-reduced-motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const update = () => setReduceMotion(shouldReduceMotion());

    update();

    const compactMq = window.matchMedia(COMPACT_MOTION_QUERY);
    const reducedMq = window.matchMedia(REDUCED_MOTION_QUERY);

    compactMq.addEventListener("change", update);
    reducedMq.addEventListener("change", update);

    return () => {
      compactMq.removeEventListener("change", update);
      reducedMq.removeEventListener("change", update);
    };
  }, []);

  return (
    <MotionConfig
      reducedMotion={reduceMotion ? "always" : "user"}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  );
}

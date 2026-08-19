"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  src: string;
  title: string;
  messageType: "sm-ent-hero" | "sm-gov-hero";
};

/** Loads the interactive preview on desktop after mount; on mobile only after tap. */
export function LazyHeroPreview({ src, title, messageType }: Props) {
  const [load, setLoad] = useState(false);
  const [iframeHeightPx, setIframeHeightPx] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setLoad(true);
    }
  }, []);

  useEffect(() => {
    if (!load) return;

    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; height?: number } | null;
      if (data?.type === messageType && typeof data.height === "number" && data.height > 0) {
        setIframeHeightPx(Math.min(Math.max(Math.round(data.height), 240), 2400));
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [load, messageType]);

  if (!load) {
    return (
      <button
        type="button"
        onClick={() => setLoad(true)}
        className="group relative flex min-h-[min(52vh,420px)] w-full flex-col items-center justify-center overflow-hidden rounded-[22px] border border-slate-200 bg-white px-6 py-12 text-center shadow-[0_4px_24px_rgba(15,23,42,0.07)]"
        aria-label={`Load ${title}`}
      >
        <span className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#3370F7] text-white shadow-lg shadow-[#3370F7]/30">
          <Play className="relative ml-0.5 h-7 w-7 fill-current" aria-hidden />
        </span>
        <span className="text-base font-bold text-[#1F2A44]">Tap to load interactive preview</span>
        <span className="mt-1.5 max-w-xs text-sm font-medium text-slate-500">
          Saved for faster mobile loading
        </span>
      </button>
    );
  }

  return (
    <iframe
      src={src}
      className="block w-full border-0 bg-transparent"
      style={{
        height: iframeHeightPx != null ? `${iframeHeightPx}px` : undefined,
        minHeight: iframeHeightPx == null ? "min(52vh, 480px)" : undefined,
      }}
      title={title}
      scrolling="no"
    />
  );
}

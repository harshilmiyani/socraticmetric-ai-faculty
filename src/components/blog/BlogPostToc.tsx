"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ListTree, X } from "lucide-react";
import type { TocEntry } from "@/lib/blog/toc";
import { cn } from "@/lib/utils";

function TocList({
  items,
  onItemClick,
  className,
}: {
  items: TocEntry[];
  onItemClick?: () => void;
  className?: string;
}) {
  return (
    <ul className={cn("m-0 list-none space-y-0.5 border-l-2 border-[#EAF1FE] pl-3", className)}>
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-2" : ""}>
          <a
            href={`#${item.id}`}
            onClick={onItemClick}
            className="block rounded-md py-1.5 pr-2 text-sm leading-snug text-[#85756F] transition-colors hover:bg-[#F1F5F9] hover:text-[#3370F7] line-clamp-4"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Fixed bottom-left “On this page” control (stays visible while scrolling); opens a
 * left drawer to jump to sections.
 */
export function BlogPostToc({ items }: { items: TocEntry[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const panelId = useId();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        fabRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (items.length === 0) return null;

  const portalContent = (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="toc-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden
            className="fixed inset-0 z-[70] bg-[#1F2A44]/40 backdrop-blur-[2px]"
            onClick={close}
          />
          <motion.aside
            key="toc-panel"
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-0 left-0 top-0 z-[71] flex w-[min(100vw-1rem,20.5rem)] flex-col border-r border-slate-200/90 bg-white/98 shadow-2xl shadow-[#1F2A44]/15 ring-1 ring-black/[0.06] backdrop-blur-xl sm:w-[min(100vw-2rem,22rem)]"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-4 sm:px-5">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF1FE] ring-1 ring-[#3370F7]/12">
                  <ListTree className="h-4 w-4 text-[#3370F7]" aria-hidden strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p id={titleId} className="text-sm font-bold text-[#1F2A44]">
                    On this page
                  </p>
                  <p className="text-xs text-[#85756F]">{items.length} sections</p>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => {
                  close();
                  fabRef.current?.focus();
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-[#F8FAFC] text-[#1F2A44] transition-colors hover:border-slate-300 hover:bg-slate-100"
                aria-label="Close table of contents"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5" aria-label="Article sections">
              <TocList
                items={items}
                onItemClick={() => {
                  close();
                  fabRef.current?.focus();
                }}
                className="border-l-[#3370F7]/25"
              />
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "fixed z-[65] flex items-center gap-2 rounded-full border border-[#3370F7]/25 bg-[#1F2A44] px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#1F2A44]/25 ring-2 ring-white/10 transition-transform hover:scale-[1.02] hover:bg-[#252f4d] active:scale-[0.98] sm:px-4 sm:py-3 sm:text-[11px]",
          "left-[max(0.75rem,env(safe-area-inset-left,0px))] bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:left-5 sm:bottom-8 lg:left-6",
        )}
      >
        <ListTree className="h-4 w-4 shrink-0 text-[#9BB8FF]" aria-hidden strokeWidth={2} />
        <span className="max-w-[9.5rem] truncate sm:max-w-none">On this page</span>
      </button>
      {mounted ? createPortal(portalContent, document.body) : null}
    </>
  );
}

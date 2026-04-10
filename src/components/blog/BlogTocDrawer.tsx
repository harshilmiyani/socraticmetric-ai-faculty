"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ListTree, X } from "lucide-react";
import type { TocEntry } from "@/lib/blog/toc";
import { cn } from "@/lib/utils";

type Props = {
  items: TocEntry[];
};

export function BlogTocDrawer({ items }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (items.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="blog-toc-drawer-panel"
        className={cn(
          "fixed z-[70] flex items-center gap-2.5 rounded-full border border-white/90 bg-white/95 px-4 py-3 text-sm font-bold text-[#1F2A44] shadow-xl shadow-[#1F2A44]/[0.1] ring-1 ring-black/[0.06] backdrop-blur-md",
          "transition-all hover:border-[#3370F7]/25 hover:text-[#3370F7] hover:shadow-2xl hover:shadow-[#3370F7]/12 hover:scale-[1.02] active:scale-[0.98]",
          "bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]",
          "md:bottom-8 md:right-8",
        )}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF1FE] ring-1 ring-[#3370F7]/15">
          <ListTree className="h-4 w-4 text-[#3370F7]" aria-hidden strokeWidth={2} />
        </span>
        Contents
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[75] bg-[#1F2A44]/40 backdrop-blur-[2px] cursor-default border-0 p-0 w-full"
              aria-label="Close table of contents"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              id="blog-toc-drawer-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-toc-drawer-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 340 }}
              className={cn(
                "fixed top-0 right-0 bottom-0 z-[80] flex w-full max-w-md flex-col",
                "border-l border-slate-200/90 bg-white/98 shadow-2xl shadow-[#1F2A44]/15 backdrop-blur-xl",
                "pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]",
              )}
            >
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100/90 bg-gradient-to-r from-[#F8FAFC] to-white px-5 py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF1FE] ring-1 ring-[#3370F7]/12">
                    <ListTree className="h-4 w-4 text-[#3370F7]" aria-hidden strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3370F7]">Navigate</p>
                    <h2 id="blog-toc-drawer-title" className="truncate font-sans text-base font-bold text-[#1F2A44]">
                      On this page
                    </h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#85756F] hover:bg-[#EAF1FE] hover:text-[#3370F7] transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4" aria-label="Article sections">
                <ul className="list-none m-0 space-y-1 border-l-2 border-[#EAF1FE] pl-4">
                  {items.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg py-2 pr-2 text-sm leading-snug text-[#85756F] transition-colors hover:bg-[#F1F5F9] hover:text-[#3370F7] line-clamp-4"
                        onClick={() => setOpen(false)}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

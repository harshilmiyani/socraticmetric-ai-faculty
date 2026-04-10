"use client";

import { ChevronDown, ListTree } from "lucide-react";
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

/** Collapsible outline at the top of the article — mobile and tablet (< lg). */
export function BlogPostTocMobile({ items }: { items: TocEntry[] }) {
  if (items.length === 0) return null;

  return (
    <details className="group mb-8 rounded-xl border border-slate-200/90 bg-[#F8FAFC] ring-1 ring-black/[0.03] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-bold text-[#1F2A44] [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-2.5 text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF1FE] ring-1 ring-[#3370F7]/12">
            <ListTree className="h-4 w-4 text-[#3370F7]" aria-hidden strokeWidth={2} />
          </span>
          <span className="truncate">On this page</span>
        </span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-[#85756F] transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <nav className="border-t border-slate-200/80 px-4 pb-4 pt-2" aria-label="Article sections">
        <TocList items={items} />
      </nav>
    </details>
  );
}

/** Sticky sidebar — large screens only (lg+). */
export function BlogPostTocSidebar({ items }: { items: TocEntry[] }) {
  if (items.length === 0) return null;

  return (
    <aside className="hidden shrink-0 lg:block lg:w-52 xl:w-56" aria-label="Article outline">
      <nav className="sticky top-28 rounded-2xl border border-white/90 bg-white/95 p-5 shadow-lg shadow-[#1F2A44]/[0.05] ring-1 ring-black/[0.05] backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF1FE] ring-1 ring-[#3370F7]/12">
            <ListTree className="h-4 w-4 text-[#3370F7]" aria-hidden strokeWidth={2} />
          </span>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3370F7]">On this page</p>
        </div>
        <TocList
          items={items}
          className="max-h-[min(70vh,520px)] overflow-y-auto overscroll-contain border-l-[#3370F7]/20 pr-1"
        />
      </nav>
    </aside>
  );
}

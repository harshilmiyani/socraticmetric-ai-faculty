"use client";

import { BookOpen, Building2, ClipboardList, Shield, Sparkles, Users } from "lucide-react";

export type SolutionsNavSideVariant = "education" | "enterprise" | "government";

/** Compact “product preview” cards for Solutions mega-menu — language aligned with solution pages + platform UI patterns. */
export function SolutionsNavSideVisual({ variant }: { variant: SolutionsNavSideVariant }) {
  if (variant === "education") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-violet-200/70 bg-gradient-to-br from-violet-50 via-white to-indigo-50/80 p-3.5 shadow-sm">
        <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-violet-300/25 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-1.5 border-b border-violet-200/40 pb-2">
          <span className="text-[9px] font-bold uppercase tracking-wide text-violet-900/75">
            Academic integrity
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/12 px-2 py-0.5 text-[8px] font-semibold text-amber-900/80">
            <Sparkles className="h-2.5 w-2.5" aria-hidden />
            Beyond the document
          </span>
        </div>
        <div className="relative mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-slate-200/90 bg-white/95 p-2 shadow-sm">
            <div className="mb-1.5 flex items-center justify-between gap-1">
              <span className="truncate text-[8px] font-semibold text-slate-700">Submitted artifact</span>
              <BookOpen className="h-3 w-3 shrink-0 text-slate-400" aria-hidden />
            </div>
            <div className="space-y-1">
              <div className="h-1 rounded bg-slate-200" />
              <div className="h-1 w-[92%] rounded bg-slate-200" />
              <div className="h-1 w-[78%] rounded bg-slate-200" />
              <div className="h-1 w-[85%] rounded bg-slate-200" />
            </div>
            <p className="mt-1.5 text-[7.5px] leading-snug text-slate-500">
              Essays &amp; files alone can mask shallow understanding — especially when generative tools are in play.
            </p>
          </div>
          <div className="flex flex-col rounded-xl border border-violet-200/70 bg-violet-50/60 p-2 shadow-sm">
            <div className="mb-1.5 flex items-center justify-between gap-1">
              <span className="text-[8px] font-semibold text-violet-950">Structured oral session</span>
              <span className="shrink-0 rounded bg-[#E24B4A]/15 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-[#B83232]">
                ● Rec
              </span>
            </div>
            <div className="flex flex-1 items-end justify-center gap-px rounded-md border border-violet-100/80 bg-white/70 px-1 py-1">
              {[5, 10, 16, 22, 14, 20, 11, 18, 9, 15, 12, 19].map((h, i) => (
                <span
                  key={i}
                  className="w-0.5 rounded-full bg-violet-500/75"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {["Reasoning depth", "Application"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-violet-200/80 bg-white/90 px-1.5 py-0.5 text-[7px] font-medium text-violet-900/85"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-1 text-[7.5px] leading-snug text-violet-900/70">
              Students defend claims in their own words — cohort-scalable, consistently scored.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "enterprise") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-sky-200/70 bg-gradient-to-br from-slate-50 via-white to-sky-50/90 p-3.5 shadow-sm">
        <div className="pointer-events-none absolute -left-4 bottom-0 h-24 w-24 rounded-full bg-sky-200/30 blur-2xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-2 border-b border-sky-100 pb-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-200/80 bg-white shadow-sm">
              <Building2 className="h-4 w-4 text-sky-700" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wide text-sky-950/85">Critical policy review</p>
              <p className="text-[8px] leading-snug text-slate-600">
                Owners &amp; approvers explain trade-offs, controls, and implications — not just what changed.
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-md bg-emerald-500/14 px-2 py-0.5 text-[7px] font-bold uppercase tracking-wide text-emerald-900">
            Post-training gate
          </span>
        </div>
        <div className="relative mt-2.5 space-y-2">
          <div className="rounded-xl border border-slate-200/90 bg-white p-2 shadow-sm">
            <div className="mb-1.5 flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
              <ClipboardList className="h-3 w-3 text-slate-400" aria-hidden />
              <span className="text-[8px] font-semibold text-slate-800">Playbook / policy checkpoint</span>
            </div>
            <p className="text-[8px] italic leading-snug text-slate-600">
              “Walk me through the exception path — who owns the decision, and what breaks if you skip the control?”
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-2 py-1.5">
            <div className="flex items-center gap-1 text-[7.5px] font-medium text-slate-600">
              <Users className="h-3 w-3 text-slate-400" aria-hidden />
              <span>Legal · Compliance · Ops alignment</span>
            </div>
            <div className="flex gap-1">
              {["Regulatory context", "Trade-offs"].map((t) => (
                <span
                  key={t}
                  className="rounded border border-sky-200/70 bg-white px-1.5 py-0.5 text-[7px] font-medium text-sky-900/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* government */
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-gradient-to-br from-slate-100 via-white to-emerald-50/60 p-3.5 shadow-sm">
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-emerald-400/15 blur-2xl" />
      <div className="relative flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/80 pb-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-300/80 bg-slate-900 text-white shadow-sm">
            <Shield className="h-4 w-4" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-wide text-slate-900">Mission-critical readiness</p>
            <p className="text-[8px] leading-snug text-slate-600">
              Scenario-based orals before high-risk execution — procedures, contingencies, decision points in plain language.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <div className="relative h-10 w-10">
            <svg className="h-10 w-10 -rotate-90" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
              <circle
                cx="20"
                cy="20"
                r="14"
                fill="none"
                stroke="#1D9E75"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="88"
                strokeDashoffset="24"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-800">
              82
            </span>
          </div>
          <span className="text-[7px] font-semibold uppercase tracking-wide text-slate-500">Reasoning score</span>
        </div>
      </div>
      <div className="relative mt-2.5 space-y-2">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-2 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/35 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-800">Live oral session</p>
            <p className="text-[7.5px] leading-snug text-slate-500">
              Timestamped capture · examiner-free at scale · defensible when stakes are highest.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-1.5 rounded-lg border border-emerald-200/60 bg-emerald-50/40 px-2 py-1.5">
          <span className="text-[7.5px] font-semibold text-emerald-950/80">Audit-ready verification record</span>
          <span className="rounded bg-white/90 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-slate-600">
            Training → oral gate → authorize
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Mic, Zap, Fingerprint, BookOpen } from "lucide-react";

const comparisons = [
  {
    icon: ShieldCheck,
    driver: "Proof of Competence",
    oldWay: "AI-written documents hide what people actually know.",
    newStandard: "Live oral verification proves true understanding.",
  },
  {
    icon: Mic,
    driver: "Assessment Format",
    oldWay: "Written tests are easily faked with AI.",
    newStandard: "AI-guided conversations adapt to test real knowledge.",
  },
  {
    icon: Zap,
    driver: "Feedback Loop",
    oldWay: "Grading feedback arrives too late to help.",
    newStandard: "Immediate AI feedback corrects mistakes instantly.",
  },
  {
    icon: Fingerprint,
    driver: "Identity & Authorship",
    oldWay: "You cannot verify who wrote a document.",
    newStandard: "Voice authentication proves exactly who did the work.",
  },
  {
    icon: BookOpen,
    driver: "Academic Integrity",
    oldWay: "AI essays destroy the value of degrees.",
    newStandard: "Oral tests ensure students are truly educated.",
  },
];

export function ValueComparison() {
  return (
    <section
      id="value-shift"
      aria-labelledby="value-shift-heading"
      className="py-14 md:py-20 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EAF1FE]/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 max-w-3xl mx-auto space-y-3"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
            The Value Shift
          </span>
          <h2 id="value-shift-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
            Before and After{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]">
              Socratic Metric
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Oral cognitive verification fundamentally changes how we assess real human understanding.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="hidden md:block w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr_1.1fr] border-b border-slate-200">
            {/* Empty first cell */}
            <div className="px-5 py-4 bg-slate-50/60 border-r border-slate-200" />

            {/* Before header */}
            <div className="px-5 py-4 bg-red-50/80 border-r border-slate-200 flex items-center gap-2">
              <span className="font-bold text-red-800 text-sm">Before Socratic Metric</span>
            </div>

            {/* After header — highlighted */}
            <div className="px-5 py-4 bg-emerald-50/80 flex items-center gap-2">
              <span className="text-base">⚡</span>
              <span className="font-bold text-emerald-700 text-sm">With Socratic Metric</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[1fr_1fr_1.1fr] ${idx < comparisons.length - 1 ? "border-b border-slate-100" : ""} group hover:bg-slate-50/40 transition-colors duration-200`}
            >
              {/* Value driver */}
              <div className="flex items-center gap-3 px-5 py-4 border-r border-slate-200 bg-slate-50/30 group-hover:bg-slate-50/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <row.icon className="w-4 h-4 text-[#3370F7]" />
                </div>
                <span className="text-slate-600 font-medium text-sm">{row.driver}</span>
              </div>

              {/* Old way */}
              <div className="flex items-center gap-2.5 px-5 py-4 border-r border-slate-200 bg-red-50/30 group-hover:bg-red-50/60 transition-colors">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-px" strokeWidth={2.5} />
                <p className="text-red-900/80 text-sm leading-snug">{row.oldWay}</p>
              </div>

              {/* New standard — highlighted column */}
              <div className="flex items-center gap-2.5 px-5 py-4 bg-emerald-50/40 group-hover:bg-emerald-50/70 transition-colors">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-px" strokeWidth={2.5} />
                <p className="text-emerald-950 font-medium text-sm leading-snug">{row.newStandard}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile fallback — stacked cards (shown below md) */}
        <div className="md:hidden mt-6 flex flex-col gap-3">
          {comparisons.map((row, idx) => (
            <motion.div
              key={`m-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Driver */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <row.icon className="w-3.5 h-3.5 text-[#3370F7]" />
                </div>
                <span className="text-slate-700 font-semibold text-sm">{row.driver}</span>
              </div>
              {/* Old */}
              <div className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 bg-red-50/30">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-red-900/80 text-sm leading-snug">{row.oldWay}</p>
                </div>
              </div>
              {/* New */}
              <div className="flex items-start gap-2.5 px-4 py-3 bg-emerald-50/50">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">With Socratic Metric</p>
                  <p className="text-emerald-950 font-medium text-sm leading-snug">{row.newStandard}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

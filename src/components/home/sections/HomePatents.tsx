"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, FileText, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

const patents = [
  {
    title:
      "Systems and methods for adaptive, AI-driven oral assessment of knowledge",
    id: "11,990,139",
    date: "May 21, 2024",
    accent: "from-[#3370F7] to-[#4C8FD6]",
  },
  {
    title:
      "Systems and methods for evaluating subject knowledge using interactive, AI-based dialogue",
    id: "12,165,655",
    date: "December 10, 2024",
    accent: "from-indigo-500 to-indigo-600",
  },
  {
    title:
      "Systems and methods for real-time assessment of knowledge through iterative, AI-mediated questioning",
    id: "12,211,511",
    date: "February 4, 2025",
    accent: "from-[#F58022] to-amber-500",
  },
  {
    title:
      "Artificial Intelligence System that generates questions and evaluates oral readings and responses",
    id: "12,586,589",
    date: "March 24, 2026",
    accent: "from-emerald-500 to-teal-500",
  },
];

export function HomePatents() {
  return (
    <section
      id="patents"
      aria-labelledby="home-patents-heading"
      className="relative z-10 overflow-hidden px-6 py-12 md:py-16"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#3370F7]/6 blur-[110px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#F58022]/6 blur-[110px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3370F7]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#3370F7]">
              Patented Technology
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3370F7]/40" />
          </div>
          <h2
            id="home-patents-heading"
            className="font-serif text-3xl font-bold leading-tight text-[#1F2A44] sm:text-4xl lg:text-5xl"
          >
            Backed by{" "}
            <span className="bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] bg-clip-text text-transparent">
              Four Issued US Patents
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
            Our oral verification approach is legally protected and grounded in
            peer-reviewed cognitive science.
          </p>
        </motion.div>

        {/* Patent cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 sm:p-7"
            >
              {/* Accent top line */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-opacity group-hover:opacity-100 ${patent.accent}`}
              />

              <div className="mb-4 flex items-start justify-between gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-105 ${patent.accent}`}
                >
                  <Award className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  USPTO Issued
                </span>
              </div>

              <h3 className="flex-1 text-[15px] font-bold leading-snug text-[#1F2A44] sm:text-base">
                {patent.title}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500">
                  <FileText className="h-3.5 w-3.5 text-[#F58022]" />
                  <span>
                    Patent No:{" "}
                    <span className="font-bold text-[#1F2A44]">{patent.id}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-[#3370F7]" />
                  <span>
                    Issued: <span className="font-semibold text-[#1F2A44]">{patent.date}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-12 md:flex-row md:gap-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white px-5 py-2.5 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-emerald-500" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-[#1F2A44]">
              Proprietary Oral Verification Technology
            </span>
          </div>

          <Link
            href="/patents"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#3370F7]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#3370F7]/40 active:scale-95"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              aria-hidden
            />
            <span className="relative">Explore the science &amp; IP</span>
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-[#3370F7]">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

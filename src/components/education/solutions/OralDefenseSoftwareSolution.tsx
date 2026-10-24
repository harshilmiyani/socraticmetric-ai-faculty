"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileSearch,
  HelpCircle,
  Sparkles,
  FileCheck,
  FileText,
  Code2,
  Users2,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function OralDefenseSoftwareSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const defenseMoves = [
    {
      step: "01",
      tag: "INGEST",
      title: "SocraticMetric reads the work",
      desc: "The submission is analyzed against your assignment brief and rubric — its argument structure, methods, and specific choices become the exam material.",
      icon: FileSearch,
    },
    {
      step: "02",
      tag: "PROBE",
      title: "Questions only this work raises",
      desc: "Why this framing and not the alternative? What's the weakest step here? What happens to your conclusion if this assumption fails? Generic prep doesn't help.",
      icon: HelpCircle,
    },
    {
      step: "03",
      tag: "ADAPT",
      title: "Follow-ups find the floor",
      desc: "Strong answers earn harder questions; vague ones get unpacked. The conversation finds where genuine understanding ends — for every student, in minutes.",
      icon: Sparkles,
    },
    {
      step: "04",
      tag: "REPORT",
      title: "You get the evidence",
      desc: "Rubric-aligned evaluation, quoted moments from the defense, full transcript and recording. You decide the grade with the whole picture in view.",
      icon: FileCheck,
    },
  ];

  const fitAreas = [
    {
      icon: FileText,
      title: "Writing-intensive courses",
      desc: "Essays and research papers are the most AI-exposed formats in the curriculum. A ten-minute defense restores their value as evidence of thinking — without abandoning writing itself.",
    },
    {
      icon: Code2,
      title: "Programming and technical projects",
      desc: "AI writes code fluently; explaining architecture decisions, trade-offs, and failure modes of your own project is a different matter. Code defenses separate builders from submitters.",
    },
    {
      icon: Users2,
      title: "Group projects",
      desc: "Individual defenses of shared work make each member's contribution — and comprehension — visible. The perennial free-rider problem finally has an instrument.",
    },
    {
      icon: Award,
      title: "Capstones and undergraduate theses",
      desc: "Give every capstone the defense a dissertation gets — as a milestone check mid-project, a final examination, or both.",
    },
  ];

  const faqs = [
    {
      q: "What is oral defense software?",
      a: "Oral defense software conducts a structured spoken examination about work a student has submitted — an essay, project, codebase, lab report, or thesis. SocraticMetric reads the submission, generates questions specific to it, conducts the defense in real-time conversation, and delivers a rubric-aligned evaluation with transcript to the instructor.",
    },
    {
      q: "How does SocraticMetric generate questions about a specific submission?",
      a: "SocraticMetric analyzes the submitted work against your course materials and rubric, then asks about the specific choices in it: why this argument or method, what the weakest point is, what would change under different assumptions. Follow-ups adapt to the student's answers, so the defense goes as deep as the student's understanding allows.",
    },
    {
      q: "Does this work for group projects?",
      a: "Yes — this is one of the most requested uses. Each group member completes an individual defense of the shared submission, which surfaces who can actually explain the work. Free-riding stops being invisible.",
    },
    {
      q: "What kinds of work can students defend?",
      a: "Essays and written arguments, research papers, code and technical projects, lab reports, business cases, design work, capstones, and theses. If a student submitted it, they can be asked to explain and defend it.",
    },
    {
      q: "How much of the grade should the defense carry?",
      a: "Instructors often start by weighting the defense at 15–30% of the assignment grade as an integrity and comprehension check, and adjust as they gain confidence. The exact weighting is always completely under faculty control.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Oral Defense Software overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Oral Defense Software
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            If they wrote it,{" "}
            <span className="italic text-[#3370F7]">they can defend it</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            SocraticMetric reads each submission and conducts a spoken defense tailored to it — probing the choices, the reasoning, the weak points. Work a student didn&apos;t do reveals itself within minutes of conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#oldest-quality-check"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE OLDEST QUALITY CHECK
      ──────────────────────────────────────────────────────────── */}
      <section
        id="oldest-quality-check"
        aria-label="How academia has always verified work"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Oldest Quality Check
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Academia already solved this — for one student at a time
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            The dissertation defense exists because universities have always known that a document alone proves nothing. The proof is in the room: can the candidate explain their choices, respond to challenges, and reason beyond what&apos;s on the page?
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            That check was reserved for the end of a PhD because it cost a committee an afternoon per candidate. Meanwhile, every undergraduate essay and project — the work most exposed to AI generation — got no defense at all. The document was the grade.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">SocraticMetric brings the defense to everyday coursework.</strong> Students submit as usual; then each one sits a short, adaptive spoken defense of exactly what they submitted. Two students can submit similar work with entirely different understanding behind it — the defense is what tells them apart.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. HOW A DEFENSE RUNS (4 Moves)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="how-a-defense-runs"
        aria-label="How a SocraticMetric defense works"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              How a defense runs
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              From submission to evidence in four moves
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {defenseMoves.map((move, idx) => {
              const Icon = move.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-slate-400">
                        {move.step}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3370F7] border border-blue-100 uppercase">
                        {move.tag}
                      </span>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-[#1F2A44] border border-slate-200">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="text-base font-bold text-[#1F2A44]">
                      {move.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {move.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. WHERE DEFENSES FIT
      ──────────────────────────────────────────────────────────── */}
      <section
        id="where-defenses-fit"
        aria-label="Where oral defenses fit in the curriculum"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Where defenses fit
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              One format, many courses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fitAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-7 flex flex-col space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#3370F7] border border-blue-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2A44]">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          5. FREQUENTLY ASKED QUESTIONS
      ──────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-label="Frequently asked questions"
        className="relative py-16 md:py-24 bg-[#F0F6FF] border-t border-slate-200/80"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="py-4 first:pt-0 last:pb-0"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between gap-4 text-left py-1 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-bold text-base sm:text-lg leading-snug transition-colors",
                        isOpen ? "text-[#2558D8]" : "text-[#1F2A44] group-hover:text-[#2558D8]"
                      )}
                      itemProp="name"
                    >
                      {faq.q}
                    </span>
                    <span className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all",
                      isOpen ? "bg-blue-50 text-[#2558D8]" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#2558D8]"
                    )}>
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm sm:text-base leading-relaxed text-slate-600" itemProp="text">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

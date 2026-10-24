"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Clock,
  Scale,
  Sparkles,
  SlidersHorizontal,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function ScalableOralExamsSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const scalesItems = [
    {
      icon: Layers,
      title: "Concurrent sessions",
      desc: "An entire cohort can complete oral exams within one assessment window. No scheduling grid, no exam-week interview marathon, no TA army.",
    },
    {
      icon: Scale,
      title: "Consistent evaluation",
      desc: "Human examiners drift — the tenth interview of the day is not graded like the first. SocraticMetric applies your rubric identically to student 1 and student 300, with quoted evidence for each.",
    },
    {
      icon: Clock,
      title: "Review speed",
      desc: "Each evaluation arrives structured: rubric scores, supporting quotes, full transcript. Skimming and signing off takes minutes — not the hour a live exam plus write-up costs.",
    },
  ];

  const constantItems = [
    {
      icon: Sparkles,
      title: "Adaptive rigor",
      desc: "Each conversation still probes the individual student — following up on weak answers, testing the edges of strong ones. Scale never means a fixed script.",
    },
    {
      icon: SlidersHorizontal,
      title: "Your standards",
      desc: "The rubric is yours, the materials are yours, and the final grade is always yours. Every override you make tunes your course's agents to grade more like you. SocraticMetric scales the labor, not the judgment.",
    },
    {
      icon: MessagesSquare,
      title: "The student experience",
      desc: "A real conversation about their work and reasoning — the kind of individual academic attention large courses almost never provide.",
    },
  ];

  const faqs = [
    {
      q: "How can oral exams possibly scale to hundreds of students?",
      a: "SocraticMetric conducts sessions concurrently — every student can take their oral exam within the same assessment window, without the instructor being present for any individual session. The instructor's time shifts from conducting conversations to reviewing structured, evidence-backed evaluations, which takes minutes per student instead of a scheduled half-hour.",
    },
    {
      q: "Does scaling oral exams mean lowering their quality?",
      a: "No — in many ways quality improves. Every student gets the same rubric applied the same way, with no examiner fatigue in hour six of interviews. Questions still adapt to each student's answers, so the conversation stays as probing as a good human examiner's. What changes is the marginal cost of each additional student, which drops to nearly zero.",
    },
    {
      q: "What happens to the instructor's role?",
      a: "Instructors design the assessment, set the rubric, and make final grading decisions. SocraticMetric handles the repetitive middle: conducting each conversation and drafting the evaluation with quoted evidence. Faculty review and sign off in minutes per student, compared to 20–30 minutes of live examination plus scheduling overhead.",
    },
    {
      q: "How do students take the exam at the same time?",
      a: "You set an assessment window, and each student joins from a link whenever suits them within it. Sessions run concurrently, so a 300-student cohort can complete oral exams in days — something that would take a faculty member months of continuous interviewing.",
    },
    {
      q: "Is this affordable for large courses?",
      a: "Yes. SocraticMetric is structured specifically for department-wide and high-enrollment adoption, with institutional pricing designed to make oral assessment viable at full course scale — without expensive proctoring hardware or extra grading staff.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Scalable Oral Exams overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Scalable Oral Exams
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Oral exams that scale to{" "}
            <span className="italic text-[#3370F7]">every student you teach</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            The most trustworthy assessment format was never the problem — the calendar was. SocraticMetric runs adaptive oral exams concurrently for entire cohorts, so class size stops deciding how rigorously you can assess.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#arithmetic"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE ARITHMETIC
      ──────────────────────────────────────────────────────────── */}
      <section
        id="arithmetic"
        aria-label="Why oral exams disappeared from syllabuses"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Arithmetic
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Why oral exams disappeared from your syllabus
            </h2>
          </div>

          <p className="text-base sm:text-lg font-medium text-[#1F2A44]">
            It was never a pedagogical decision. It was multiplication.
          </p>

          {/* Arithmetic Equation Box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-center font-mono text-sm sm:text-base text-slate-800 space-y-1">
            <div className="font-semibold text-[#1F2A44]">150 students &times; 20 min exam</div>
            <div className="text-slate-500">+ scheduling + note-taking + grading</div>
            <div className="pt-2 font-bold text-[#DC2626]">= weeks of faculty time, per assignment</div>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            So the format survived only where the stakes justified the cost: dissertation defenses, medical boards, bar-style examinations. Everywhere else, higher education settled for written proxies — essays and problem sets that were always weaker evidence of understanding, and that AI has now rendered close to worthless as verification.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">SocraticMetric changes the multiplication.</strong> Sessions run concurrently, evaluation is drafted automatically against your rubric, and your review takes minutes per student. The marginal cost of examining student number 300 is essentially the same as student number 3.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. HOW IT SCALES
      ──────────────────────────────────────────────────────────── */}
      <section
        id="how-it-scales"
        aria-label="How SocraticMetric scales oral exams"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              How it scales
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              What scales up — and what deliberately doesn&apos;t change
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: What Scales */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-blue-200">
                <span className="text-xs font-bold tracking-widest uppercase text-[#3370F7] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  SCALES UP
                </span>
                <span className="text-xs text-slate-500 font-medium">Removing the labor barrier</span>
              </div>

              <div className="space-y-4">
                {scalesItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#3370F7] border border-blue-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-bold text-[#1F2A44]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: What Doesn't Change */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-200">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  DOESN&apos;T CHANGE
                </span>
                <span className="text-xs text-slate-500 font-medium">Preserving academic rigor</span>
              </div>

              <div className="space-y-4">
                {constantItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-bold text-[#1F2A44]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. WHERE IT LANDS FIRST
      ──────────────────────────────────────────────────────────── */}
      <section
        id="where-it-lands"
        aria-label="Where scalable oral exams have the most impact"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Where it lands first
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Built for the courses where scale hurts most
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Large introductory courses are where assessment integrity is weakest and individual attention scarcest — exactly where AI-generated homework hits hardest. With SocraticMetric, an intro course can attach a short oral verification to each major assignment: five to fifteen minutes in which students explain what they submitted and why.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            The effect compounds. Students who know they will discuss their work engage with it differently while doing it — the assessment changes behavior upstream, not just measurement downstream. Faculty piloting SocraticMetric consistently describe this as the point: students respond rationally to incentives, and an oral exam is an incentive to actually understand.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-slate-800">
            <p className="text-sm sm:text-base leading-relaxed">
              <strong>Start with one assessment in one course.</strong> If the evidence quality convinces you — and it usually does — scaling to the rest of the syllabus is a configuration change, not a project.
            </p>
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

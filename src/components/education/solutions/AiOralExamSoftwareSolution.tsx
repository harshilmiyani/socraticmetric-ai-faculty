"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bot,
  ChevronDown,
  ChevronUp,
  Scale,
  FileCheck2,
  Zap,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function AiOralExamSoftwareSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      icon: Bot,
      category: "ADAPTIVE QUESTIONING",
      title: "No two exams alike",
      desc: "SocraticMetric probes deeper where answers are shallow and advances where mastery is clear. Every student gets a unique conversation — there are no answer keys to share or prepare.",
      color: "text-[#3370F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: Scale,
      category: "RUBRIC-ALIGNED GRADING",
      title: "Your standards, applied consistently",
      desc: "Upload your rubric and SocraticMetric evaluates every student against the same criteria — the consistency of a single examiner, across an entire cohort, with no drift between sessions.",
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: FileCheck2,
      category: "EVIDENCE & TRANSCRIPTS",
      title: "Every grade backed by quotes",
      desc: "Each evaluation includes the full transcript and quoted evidence for every rubric criterion — ready for grade reviews, accreditation audits, or a five-minute skim.",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: Zap,
      category: "FAST SETUP",
      title: "A plugin for your course as-is",
      desc: "Upload existing materials, set your rubric, share a link. SocraticMetric works alongside the course you already teach — no curriculum redesign, no semester-long integration project.",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
    },
    {
      icon: SlidersHorizontal,
      category: "FACULTY CONTROL",
      title: "You hold the red pen",
      desc: "SocraticMetric produces structured evidence and an initial assessment. Final grades always remain with you — and every correction you make helps your course's agents align more closely with your grading standards.",
      color: "text-[#F58022]",
      bg: "bg-orange-50 border-orange-100",
    },
    {
      icon: ShieldCheck,
      category: "SECURITY & COMPLIANCE",
      title: "Built for university procurement",
      desc: "Student data is handled with FERPA-aligned practices, encrypted in transit and at rest. SocraticMetric is built for higher-education procurement processes, with documentation prepared for institutional review.",
      color: "text-teal-600",
      bg: "bg-teal-50 border-teal-100",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Configure the exam",
      desc: "Upload course materials or the assignment students will discuss, set your rubric, and choose the exam's length and focus.",
    },
    {
      number: "2",
      title: "Students take the exam",
      desc: "Each student joins a spoken session from a link — no scheduling required. SocraticMetric conducts the conversation, adapting questions to each answer in real time.",
    },
    {
      number: "3",
      title: "Review and grade",
      desc: "You receive rubric-aligned evaluations with quoted evidence and full transcripts. Skim, adjust, and sign off — in minutes per student, not an hour each.",
    },
  ];

  const faqs = [
    {
      q: "How does the AI adapt questions in real time?",
      a: "SocraticMetric analyzes student answers as they speak. If an answer is shallow, it asks targeted follow-up questions to test foundational understanding; if the student demonstrates clear mastery, it advances to higher-order concepts on your rubric.",
    },
    {
      q: "How does this prevent AI cheating?",
      a: "Because the assessment is spoken, synchronous, and dynamically adaptive, students cannot copy-paste or read pre-generated answers. They must explain their reasoning out loud and respond spontaneously to unscripted follow-up probes.",
    },
    {
      q: "Do instructors retain final grading control?",
      a: "Yes. SocraticMetric produces an evidence-backed preliminary assessment with direct transcript citations. Faculty review the findings, make any adjustments, and sign off on final grades before they are recorded.",
    },
    {
      q: "How long does setup take for an existing course?",
      a: "Setup typically takes just a few minutes. Upload your syllabus or assignment prompt, attach your rubric, and generate a shareable link. No curriculum changes or IT overhauls required.",
    },
    {
      q: "How does SocraticMetric handle student data?",
      a: "Student data is treated as an educational record: encrypted in transit and at rest, never used to train public AI models, and handled in line with FERPA-aligned data practices. Documentation is available for institutional review.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="AI Oral Exam Software overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              AI Oral Exam Software
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            AI oral exam software that{" "}
            <span className="italic text-[#3370F7]">verifies real understanding</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            SocraticMetric conducts adaptive, spoken examinations with every student — then hands you rubric-aligned evaluations with full transcripts. The rigor of a one-on-one oral exam, without the calendar math.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#why-oral-exams"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. WHY ORAL EXAMS
      ──────────────────────────────────────────────────────────── */}
      <section
        id="why-oral-exams"
        aria-label="Why oral exams matter"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Why oral exams
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              The one format AI can&apos;t do for a student
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Essays, problem sets, and take-home exams can all be produced by a chatbot in seconds. An oral exam can&apos;t. When a student has to explain their reasoning out loud — and respond to follow-up questions they didn&apos;t see coming — understanding is either there or it isn&apos;t.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Faculty have always known this. Oral examination is how doctoral candidates defend dissertations, how medical boards certify physicians, and how European universities assessed students for centuries. The only reason it disappeared from most coursework is arithmetic: an instructor with 120 students cannot run 120 conversations per assignment.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">SocraticMetric removes that constraint.</strong> It conducts every conversation — adapting questions to each student in real time — and gives instructors structured, comparable results they can review in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. WHAT YOU GET (6 Core Pillars)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="features"
        aria-label="Platform features"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              What you get
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Everything an oral exam should be — at software speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl border", item.bg)}>
                        <Icon className={cn("h-5 w-5", item.color)} />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1F2A44]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. HOW IT WORKS (3 Simple Steps)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        aria-label="How SocraticMetric oral exams work"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              How it works
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              From syllabus to signed-off grades in three steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-7 flex flex-col items-start space-y-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2558D8] text-white font-bold text-base shadow-xs">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
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

                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
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

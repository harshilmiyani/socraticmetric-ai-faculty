"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Mic,
  Scale,
  MessageSquareQuote,
  Users2,
  SlidersHorizontal,
  FileCheck2,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function VivaVoicePlatformSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const preservedItems = [
    {
      icon: MessageSquareQuote,
      title: "Probing dialogue",
      desc: "Questions build on answers, press on weak points, and test the boundaries of understanding — the Socratic core that makes a viva a viva.",
    },
    {
      icon: SlidersHorizontal,
      title: "Academic judgment",
      desc: "Examiners set the scope and rubric, review the evidence, and decide outcomes. SocraticMetric conducts the conversation; the academy keeps the verdict.",
    },
    {
      icon: Mic,
      title: "The candidate's voice",
      desc: "Students speak their reasoning aloud, in their own words, in real time — the one medium generative AI cannot ghost-write.",
    },
  ];

  const addedItems = [
    {
      icon: Users2,
      title: "Any cohort size",
      desc: "Sessions run concurrently within a window you set. A 400-student module can sit vivas in a week without a single scheduling email.",
    },
    {
      icon: Scale,
      title: "Perfect consistency",
      desc: "No panel drift, no hard-marker lottery, no fatigue in the day's last session. One rubric, applied identically to every candidate.",
    },
    {
      icon: FileCheck2,
      title: "A complete record",
      desc: "Recording, transcript, rubric scores, quoted evidence — moderation, appeals, and external examination work from the full session, not reconstructed notes.",
    },
  ];

  const practiceTiers = [
    {
      icon: BookOpen,
      title: "Coursework verification",
      desc: "Short vivas attached to essays and projects, confirming each submission is understood by its author.",
    },
    {
      icon: GraduationCap,
      title: "Module examinations",
      desc: "A substantial viva replacing or complementing a traditional written final exam.",
    },
    {
      icon: Award,
      title: "Defense preparation",
      desc: "Realistic practice vivas for research and postgraduate students ahead of the real committee.",
    },
  ];

  const faqs = [
    {
      q: "What is a viva voce examination?",
      a: "Viva voce — Latin for 'with the living voice' — is the oral examination tradition in which a student answers questions and defends their work in live conversation with examiners. It remains the final gate for doctoral degrees across the UK, Europe, and much of the world, precisely because it is so hard to fake.",
    },
    {
      q: "What does an AI viva voce platform do?",
      a: "SocraticMetric conducts viva-style examinations through natural spoken conversation: questioning students on course material or submitted work, pressing with adaptive follow-ups, and producing a rubric-aligned evaluation with full transcript. It makes the viva format practical for everyday modules and large cohorts, not just final doctoral defenses.",
    },
    {
      q: "How does an AI viva compare to a panel of examiners?",
      a: "A human panel brings judgment that stays in the loop — examiners and module leaders review SocraticMetric's evidence and control outcomes. What the platform adds is consistency and reach: the same standards applied to every candidate without panel fatigue or scheduling limits, plus a complete transcript rather than examiners' notes.",
    },
    {
      q: "Is this suitable for undergraduate modules or only research degrees?",
      a: "The pedagogy transfers directly. Short vivas on coursework verify understanding at any level, and undergraduates arguably need it most: their written assessments are the most exposed to generative AI. Many faculty run 10–15 minute vivas attached to essays, projects, and problem sets.",
    },
    {
      q: "Does it support external-examiner and moderation processes?",
      a: "Yes. External examiners and departmental moderation teams receive verbatim transcripts, audio recordings, and cited rubric evidence, providing complete transparency and auditability for accreditation reviews.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Viva Voce Platform overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Viva Voce Platform
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            The viva voce,{" "}
            <span className="italic text-[#3370F7]">freed from the committee room</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            For centuries, &lsquo;with the living voice&rsquo; has been how universities verified real understanding. SocraticMetric conducts adaptive viva voce examinations for any course and any cohort size — with a full evidentiary record for every candidate.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#tradition"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE TRADITION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="tradition"
        aria-label="The tradition of viva voce examination"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Tradition
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              The exam that survived every technology so far
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Printing, typewriters, word processors, the internet — each made written work easier to produce and easier to copy. Through all of it, the viva voce kept its authority, because a live conversation cannot be plagiarized. Medicine and law never abandoned it; doctoral education never abandoned it; the professions that certify life-and-death competence never abandoned it.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            What kept the viva rare was cost: assembling examiners, scheduling candidates, and sitting through each session one at a time. A format reserved for the end of a doctorate — one examination per seven years of study — because that was all the system could afford.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">Generative AI has now broken every written alternative at once.</strong> The viva&apos;s moment has arrived — if it can scale.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. THE PLATFORM (Preserved vs Added)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="the-platform"
        aria-label="What the viva voce platform preserves and adds"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Platform
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Everything essential about the viva, none of the bottleneck
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Preserved */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-blue-200">
                <span className="text-xs font-bold tracking-widest uppercase text-[#3370F7] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  PRESERVED
                </span>
                <span className="text-xs text-slate-500 font-medium">The Socratic Core</span>
              </div>

              <div className="space-y-4">
                {preservedItems.map((item, idx) => {
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

            {/* Column 2: Added */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-200">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  ADDED
                </span>
                <span className="text-xs text-slate-500 font-medium">Platform Reach &amp; Auditability</span>
              </div>

              <div className="space-y-4">
                {addedItems.map((item, idx) => {
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
          4. IN PRACTICE
      ──────────────────────────────────────────────────────────── */}
      <section
        id="in-practice"
        aria-label="Viva voce in practice across education tiers"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              In Practice
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              From once-in-a-degree to every module
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Departments deploy SocraticMetric vivas across three distinct educational tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 space-y-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#3370F7] border border-blue-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2A44]">
                    {tier.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {tier.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-800 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              In every configuration, the pattern is the same: the examination method your institution already trusts most, applied where it was never affordable before.
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

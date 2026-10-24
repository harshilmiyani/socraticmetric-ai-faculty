"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CalendarX2,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function AsynchronousOralAssessmentSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const steps = [
    {
      step: "01",
      tag: "YOU SET THE WINDOW",
      title: "Define exam and deadline",
      desc: "Upload materials, set the rubric, choose session length, and open a window — an evening, a weekend, a week. Share one link with the class.",
    },
    {
      step: "02",
      tag: "STUDENTS JOIN FREELY",
      title: "Live conversation, flexible timing",
      desc: "Each student starts when ready. The session itself is fully live and adaptive — spoken questions, spoken answers, follow-ups that respond to what they just said.",
    },
    {
      step: "03",
      tag: "YOU REVIEW RESULTS",
      title: "Evidence, whenever you want it",
      desc: "Evaluations accumulate as students finish: rubric scores, quoted evidence, full transcripts and recordings. Review the whole cohort in one sitting.",
    },
  ];

  const comparisonRows = [
    {
      aspect: "Instructor time per student",
      scheduled: "20–30 min exam + notes + grading",
      asynchronous: "Minutes of evidence review",
    },
    {
      aspect: "Scheduling overhead",
      scheduled: "Appointment grid, no-shows, reschedules",
      asynchronous: "One shared window, one link",
    },
    {
      aspect: "Consistency across students",
      scheduled: "Varies with examiner fatigue and mood",
      asynchronous: "Same rubric, applied identically",
    },
    {
      aspect: "Record of the exam",
      scheduled: "Examiner's notes",
      asynchronous: "Full transcript + recording + quoted evidence",
    },
    {
      aspect: "Practical cohort size",
      scheduled: "Seminar-sized, at great cost",
      asynchronous: "Any — sessions run concurrently",
    },
  ];

  const faqs = [
    {
      q: "What is asynchronous oral assessment?",
      a: "It is an oral exam students take on their own schedule within a window you set, instead of at an appointment with the instructor. SocraticMetric conducts the spoken conversation whenever the student joins — adapting questions in real time — and delivers the evaluation and transcript to the instructor afterward. You get the rigor of a live oral exam without synchronizing two calendars.",
    },
    {
      q: "How is integrity maintained without the instructor present?",
      a: "Several ways. Questions are generated per student and adapt to each answer, so there is no fixed script to share or prepare canned answers for. The conversation happens in real time at speaking pace, leaving no practical gap to relay questions through a chatbot. And every session is fully recorded and transcribed, so anything anomalous is reviewable.",
    },
    {
      q: "Isn't a live exam with the professor still better?",
      a: "A live one-on-one exam is excellent — when it happens. In practice, scheduling constraints mean it almost never does, especially in large or online courses. Asynchronous oral assessment makes the format viable at all: every student gets a probing spoken examination, and the instructor reviews evidence instead of sitting through every session.",
    },
    {
      q: "What about students in different time zones or with jobs?",
      a: "That is precisely the population asynchronous assessment serves. Students join within the window from wherever they are, whenever works — no 3 a.m. exam slots for international students, no conflicts with work shifts or caregiving. It also simplifies many scheduling-related accommodations.",
    },
    {
      q: "How long is a typical session?",
      a: "You choose. Faculty commonly run 10–20 minute sessions for assignment verification and longer sessions for midterm-style examinations. Because sessions are asynchronous and concurrent, length is a pedagogical choice rather than a scheduling constraint.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Asynchronous Oral Assessment overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Asynchronous Oral Assessment
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Oral exams on the student&apos;s clock.{" "}
            <span className="italic text-[#3370F7]">Evidence on yours.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Set an assessment window. Students join a spoken, adaptive examination whenever suits them. You review rubric-aligned evaluations with full transcripts — no scheduling grid, no missed appointments.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#blocker"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE REAL BLOCKER
      ──────────────────────────────────────────────────────────── */}
      <section
        id="blocker"
        aria-label="The scheduling problem with oral exams"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Real Blocker
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              The hardest part of an oral exam was never the exam
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            It was the calendar. Coordinating dozens or hundreds of individual appointments, handling no-shows and reschedules, finding rooms and quiet hours — the logistics killed the format long before anyone questioned its pedagogy.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Asynchronous oral assessment removes the synchronization requirement while keeping everything that makes oral examination trustworthy: real-time spoken dialogue, adaptive follow-up questions, and no opportunity to outsource answers. The student still has to think out loud. They just don&apos;t have to do it at 2:40 p.m. on a Tuesday in your office.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">For online programs, working students, and international cohorts spread across time zones,</strong> this is often the difference between oral assessment being impossible and being routine.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. HOW IT WORKS: A window replaces a schedule
      ──────────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        aria-label="How asynchronous oral assessment works"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              How it works
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              A window replaces a schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col items-start space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold tracking-wider text-slate-400 font-mono">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#3370F7] border border-blue-100 uppercase">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2A44]">
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
          4. COMPARED: Scheduled vs Asynchronous Orals
      ──────────────────────────────────────────────────────────── */}
      <section
        id="comparison"
        aria-label="Scheduled vs asynchronous oral exam comparison"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-4xl px-6 md:px-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Compared
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Scheduled orals vs. asynchronous orals
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 p-4">
              <div className="col-span-4 sm:col-span-4">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-slate-600">Scheduled with Instructor</div>
              <div className="col-span-4 sm:col-span-4 text-[#2558D8]">Asynchronous with SocraticMetric</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-4 gap-2 sm:gap-4 items-center hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 sm:col-span-4 font-bold text-[#1F2A44]">
                    {row.aspect}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-600 leading-relaxed pr-2">
                    {row.scheduled}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-800 font-medium leading-relaxed bg-blue-50/50 p-2 rounded-xl border border-blue-100/60">
                    {row.asynchronous}
                  </div>
                </div>
              ))}
            </div>
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

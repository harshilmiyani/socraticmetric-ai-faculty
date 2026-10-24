"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessagesSquare,
  Sparkles,
  Calendar,
  CheckCircle2,
  AlertCircle,
  MessageSquareX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function DiscussionBoardAlternativeSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const comparisonRows = [
    {
      aspect: "Can AI complete it?",
      board: "Entirely, in under a minute",
      socratic: "No — live, adaptive, spoken",
    },
    {
      aspect: "What it measures",
      board: "Compliance with a posting ritual",
      socratic: "Comprehension, reasoning, engagement",
    },
    {
      aspect: "Follow-up on weak points",
      board: "None — posts stand as written",
      socratic: "Adaptive challenges in real time",
    },
    {
      aspect: "Grading burden",
      board: "Hundreds of posts to skim weekly",
      socratic: "Structured evaluations, minutes each",
    },
    {
      aspect: "Student experience",
      board: "A chore nobody believes in",
      socratic: "A real conversation about their ideas",
    },
  ];

  const faqs = [
    {
      q: "What can I use instead of discussion boards?",
      a: "Replace weekly discussion posts with short spoken discussions. Each student joins a 5–15 minute SocraticMetric conversation about the week's material — stating a position, responding to challenges, and connecting ideas to earlier weeks. It assesses the same participation and engagement goals discussion boards were meant to serve, in a format AI cannot complete on a student's behalf.",
    },
    {
      q: "Why are discussion boards broken?",
      a: "Because a 'post one, reply to two' thread is the easiest assignment in the curriculum to automate. Chatbots produce fluent, on-topic posts and polite replies in seconds, and instructors reading a hundred interchangeable paragraphs have no way to tell engagement from automation. The format measures compliance with a posting ritual, not thinking.",
    },
    {
      q: "Doesn't removing the board eliminate peer interaction?",
      a: "SocraticMetric replaces the assessment function of boards, not your community spaces. Many instructors keep an ungraded forum or chat for genuine peer conversation — which improves once posting is no longer a graded performance — while grading engagement through spoken discussions where each student's own thinking is visible.",
    },
    {
      q: "How is a spoken discussion graded?",
      a: "Against your rubric — comprehension of the material, quality of reasoning, engagement with counterarguments, and connections across the course. You receive a rubric-aligned evaluation with quoted evidence and full transcript per student, typically reviewable in a couple of minutes each.",
    },
    {
      q: "Does this work for large online courses?",
      a: "That is where it shines. Discussion boards became the default participation grade in online courses precisely because nothing else scaled. SocraticMetric sessions run concurrently within a window you set, so a 500-student online course can hold weekly spoken discussions with every enrolled student without scheduling bottlenecks.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Discussion Board Alternative overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Discussion Board Alternative
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Retire the discussion board.{" "}
            <span className="italic text-[#3370F7]">Keep the discussion.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Graded forum posts are now a chatbot ritual: AI writes them, nobody reads them. SocraticMetric replaces the format with short spoken discussions that show you — per student, per week — whether engagement is real.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#quiet-failure"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE QUIET FAILURE
      ──────────────────────────────────────────────────────────── */}
      <section
        id="quiet-failure"
        aria-label="Why discussion boards have failed"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Quiet Failure
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              &ldquo;Post once, reply to two peers&rdquo; was the first thing AI killed
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Discussion boards were always a compromise — a way to simulate seminar participation in courses too large or too remote for actual seminars. The compromise depended on one assumption: that writing a post required engaging with the material. That assumption is gone.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Today a graded thread is often AI end to end: generated posts, generated replies, and — as overwhelmed instructors reach for tools — increasingly AI-assisted grading of both. Every party performs; no party learns. The tragedy is that the pedagogical goal behind the boards was always right: students should articulate positions, defend them, and engage with other views.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">The instrument measures the wrong thing; the goal still matters.</strong> So keep the goal. Change the instrument.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. SIDE BY SIDE (Forum Posts vs Spoken Discussions)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="side-by-side"
        aria-label="Forum posts vs spoken discussions comparison"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-4xl px-6 md:px-12 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Side By Side
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Forum posts vs. spoken discussions
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 p-4">
              <div className="col-span-4 sm:col-span-4">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-rose-700">Discussion Board</div>
              <div className="col-span-4 sm:col-span-4 text-[#2558D8]">SocraticMetric Spoken Discussion</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-4 gap-2 sm:gap-4 items-center hover:bg-slate-50/60 transition-colors">
                  <div className="col-span-4 sm:col-span-4 font-bold text-[#1F2A44]">
                    {row.aspect}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-600 leading-relaxed pr-2">
                    {row.board}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-800 font-medium leading-relaxed bg-blue-50/50 p-2 rounded-xl border border-blue-100/60">
                    {row.socratic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. THE WEEKLY RHYTHM
      ──────────────────────────────────────────────────────────── */}
      <section
        id="weekly-rhythm"
        aria-label="Weekly spoken discussion workflow"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Weekly Rhythm
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Same cadence, real signal
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            The workflow maps one-to-one onto what you run today. Where students posted by Sunday night, they instead complete a short spoken discussion by Sunday night — joining from a link, any time in the window, no scheduling. SocraticMetric opens with a question about the week&apos;s material, challenges their position, and asks them to connect it to previous weeks or opposing views.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            You get a weekly per-student picture that no board ever provided: who is keeping up, who is coasting, where the whole cohort is confused. Participation grades become defensible — backed by transcript evidence instead of word counts — and the students who used to write thoughtful posts nobody read finally have a format where their thinking registers.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-800">
            <p className="text-sm sm:text-base leading-relaxed">
              <strong>Online programs, where the discussion board is most entrenched and most broken,</strong> see the largest gains — weekly spoken engagement at full course scale, with no synchronous meetings added to anyone&apos;s calendar.
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

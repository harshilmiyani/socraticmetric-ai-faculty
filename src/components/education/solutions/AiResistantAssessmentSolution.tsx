"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Clock,
  Sparkles,
  FileText,
  Quote,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  EyeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function AiResistantAssessmentSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const deadEndPoints = [
    {
      icon: AlertTriangle,
      title: "False positives punish honest students",
      desc: "Detectors flag human writing — disproportionately that of non-native English speakers — and a single false accusation can derail a student's academic career. No accuracy rate is high enough when the penalty is an integrity violation.",
    },
    {
      icon: RefreshCw,
      title: "Evasion is trivial",
      desc: "Paraphrasing tools, 'humanizer' services, and light manual editing defeat detection reliably. Each detector improvement is answered within weeks. The students most willing to cheat are the least likely to be caught.",
    },
    {
      icon: EyeOff,
      title: "Surveillance poisons the classroom",
      desc: "Treating every submission as a suspect exhibit turns instructors into prosecutors and students into defendants. That relationship damage persists long after any individual case.",
    },
  ];

  const designProperties = [
    {
      icon: Clock,
      category: "REAL-TIME",
      title: "No gap to fill with AI",
      desc: "Spoken conversation moves at speaking pace. There is no window to paste a question into a chatbot and read back the answer without the delay — and the secondhand phrasing — being obvious.",
      color: "text-[#3370F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: Sparkles,
      category: "ADAPTIVE",
      title: "Nothing to pre-generate",
      desc: "Every question depends on the student's previous answer. There is no question bank to leak, no essay prompt to feed a model in advance, no script that survives contact with a follow-up.",
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: FileText,
      category: "GROUNDED IN THEIR WORK",
      title: "Their submission, their defense",
      desc: "When the exam probes the student's own submission — why this argument, why this method, what breaks if we change this — outsourced work exposes itself. You can't defend reasoning you never did.",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-100",
    },
  ];

  const faqs = [
    {
      q: "What makes an assessment AI-resistant?",
      a: "An assessment is AI-resistant when using AI to complete it either doesn't help or is immediately visible. Real-time oral examination qualifies on both counts: questions adapt to each answer so there is nothing to pre-generate, and the conversation moves at speaking pace, leaving no practical way to relay questions through a chatbot without obvious gaps and secondhand answers.",
    },
    {
      q: "Why not just use AI detection tools?",
      a: "Detection tools have documented false-positive problems — flagging honest students, disproportionately non-native English speakers — and are trivially defeated by paraphrasing tools or light editing. They also create an adversarial dynamic between instructors and students. Assessment design avoids the arms race entirely: instead of trying to prove a text was AI-written, you verify understanding in a format AI can't perform on the student's behalf.",
    },
    {
      q: "Does AI-resistant mean banning AI from coursework?",
      a: "No — often the opposite. Once verification happens in conversation, students can be free to use AI in their process, the way professionals do. What SocraticMetric verifies is that learning happened along the way: the student can explain, defend, and extend the work they submitted, whatever tools were involved in producing it.",
    },
    {
      q: "Can't a student use AI to prepare for the oral exam?",
      a: "Yes — and that's the point. Preparing for an adaptive oral exam means learning the material well enough to discuss it. If a student uses AI as a study partner and then demonstrates genuine understanding in conversation, the assessment worked. What they can't do is have AI attend the conversation for them.",
    },
    {
      q: "How do we roll this out without redesigning courses?",
      a: "Think of SocraticMetric as a plugin for your existing course rather than a replacement for it. Keep your assignments and add a short oral verification layer to the ones that matter: students submit as usual, then complete a 10–15 minute SocraticMetric session about their work. Grading weight can shift gradually as your confidence in the format grows — and the final grade always remains the instructor's call.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="AI-Resistant Assessment overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              AI-Resistant Assessment
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Stop detecting AI.{" "}
            <span className="italic text-[#3370F7]">Start assessing what it can&apos;t fake.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Detection is an arms race educators are losing — with honest students as collateral damage. AI-resistant assessment takes the other path: verify understanding in live conversation, where no chatbot can stand in.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#detection-dead-end"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE DETECTION DEAD END
      ──────────────────────────────────────────────────────────── */}
      <section
        id="detection-dead-end"
        aria-label="Why AI detection tools fail"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-4xl px-6 md:px-12 space-y-8">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Detection Dead End
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Why the arms race can&apos;t be won
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            With the majority of students now using AI tools on coursework, the instinctive institutional response has been detection: run submissions through a classifier, flag the suspicious ones, prosecute the flagged. Every part of that pipeline is broken.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deadEndPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 space-y-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#1F2A44]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">The alternative isn&apos;t a better detector.</strong> It&apos;s assessment that doesn&apos;t depend on knowing who — or what — wrote the text.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. DESIGN OVER DETECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="design-over-detection"
        aria-label="Three properties that make assessment AI-resistant"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Design Over Detection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Three properties that make assessment resistant by design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designProperties.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl border", prop.bg)}>
                        <Icon className={cn("h-5 w-5", prop.color)} />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        {prop.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1F2A44]">
                      {prop.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. THE UPSIDE
      ──────────────────────────────────────────────────────────── */}
      <section
        id="the-upside"
        aria-label="AI-resistant doesn't mean anti-AI"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The Upside
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              AI-resistant doesn&apos;t mean anti-AI
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            The graduates your programs produce will use AI daily in their careers. Banning it from coursework prepares them for a world that no longer exists — and is unenforceable anyway. The question worth answering isn&apos;t &ldquo;did this student use AI?&rdquo; but &ldquo;does this student understand the material?&rdquo;
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Verification by conversation decouples those questions. Students can use modern tools in their process; the grade rests on what they can explain, defend, and extend in a live exchange. That standard is fair, transparent, announced in advance — and it changes behavior upstream, because studying for a conversation means actually learning.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-800 space-y-2">
            <Quote className="h-6 w-6 text-[#3370F7] opacity-80" />
            <p className="text-base sm:text-lg font-medium italic text-[#1F2A44] leading-relaxed">
              &ldquo;You can&apos;t defend reasoning you never did. That single fact does more for academic integrity than every detector on the market.&rdquo;
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Scale,
  FileCheck2,
  ShieldCheck,
  Zap,
  Layers,
  Users2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Stethoscope,
  Laptop,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { AnimatePresence, motion } from "framer-motion";

export function OralAssessmentPlatformSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const pillars = [
    {
      icon: Scale,
      category: "CONSISTENCY",
      title: "One rubric, every student",
      desc: "The same criteria applied identically across sections, instructors, and terms — no examiner drift, no section lottery. Rubric application is auditable down to quoted evidence from the transcript.",
      color: "text-[#3370F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: FileCheck2,
      category: "DEFENSIBILITY",
      title: "Evidence for every grade",
      desc: "Full transcripts and rubric-linked quotes back every evaluation — a paper trail for grade reviews, academic-integrity cases, and accreditation audits.",
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: ShieldCheck,
      category: "COMPLIANCE",
      title: "Procurement-ready",
      desc: "Student data is handled with FERPA-aligned practices and treated as the educational record it is. SocraticMetric is built for higher-education procurement, with documentation prepared for institutional review.",
      color: "text-teal-600",
      bg: "bg-teal-50 border-teal-100",
    },
    {
      icon: Zap,
      category: "FACULTY WORKFLOW",
      title: "Adoption without redesign",
      desc: "SocraticMetric works alongside the courses faculty already teach, not as a new curriculum. Upload existing materials and rubrics — a single assessment can be piloted in one afternoon, which is how most departments start.",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
    },
    {
      icon: Layers,
      category: "FORMATS",
      title: "More than exams",
      desc: "Oral exams, defenses of submitted work, professional role-plays, and case discussions — one platform covers the spoken-assessment formats programs actually use.",
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: Users2,
      category: "SUPPORT",
      title: "A partner, not just a login",
      desc: "Dedicated onboarding support through pilot and rollout — including faculty orientation on the platform, rubric design guidance, and ongoing assistance as your institution expands usage.",
      color: "text-[#F58022]",
      bg: "bg-orange-50 border-orange-100",
    },
  ];

  const targetAudiences = [
    {
      icon: BookOpen,
      title: "High-enrollment gateway courses",
      desc: "Where grade integrity matters most and one-on-one time is scarcest. SocraticMetric gives every student in a 300-seat course a real oral assessment — without adding to faculty workload.",
    },
    {
      icon: Stethoscope,
      title: "Professional programs",
      desc: "Nursing, business, law, and education programs that value spoken competence — patient conversations, client interactions, classroom scenarios — can now assess it systematically and at scale.",
    },
    {
      icon: Laptop,
      title: "Online and hybrid programs",
      desc: "Programs whose written assessments are most exposed to AI can add a spoken verification layer without proctoring software or scheduling marathons. Students join from a link within a window you set.",
    },
    {
      icon: Award,
      title: "Capstones, theses, and defenses",
      desc: "Extend the defense format below the graduate level — every capstone and major project defended in conversation, not just submitted to a dropbox.",
    },
  ];

  const faqs = [
    {
      q: "What is an oral assessment platform?",
      a: "An oral assessment platform lets institutions run spoken examinations — oral exams, defenses, role-plays, and structured discussions — as a repeatable, auditable process rather than an ad-hoc faculty effort. SocraticMetric handles conducting the conversations, applying rubrics consistently, and producing evidence-backed evaluations across courses and departments.",
    },
    {
      q: "How does SocraticMetric fit our procurement and security requirements?",
      a: "SocraticMetric is built for higher-education procurement. Student data is handled with FERPA-aligned practices, encrypted in transit and at rest, and never used to train public AI models. Documentation is available for institutional security review.",
    },
    {
      q: "Does it integrate with our LMS?",
      a: "SocraticMetric works alongside your existing course management system rather than replacing it. Faculty share assessment links through whatever channel they already use, and results export cleanly for your gradebook. No migration project is required to start a pilot.",
    },
    {
      q: "How do we keep grading consistent across sections and instructors?",
      a: "Rubrics are defined once and applied identically to every student — across sections, instructors, and terms. Every evaluation includes quoted evidence from the transcript, so departments can audit how criteria were applied and refine rubrics with real data.",
    },
    {
      q: "Who has the final say on grades?",
      a: "The instructor, always. SocraticMetric produces evidence and an initial rubric-aligned assessment; instructors review, adjust, and decide. Those adjustments help the system align more precisely with that instructor's standards over time — and only within your institution's courses.",
    },
    {
      q: "What does a pilot look like?",
      a: "Most institutions begin with a single department or 2–3 course sections. We assist with uploading your initial materials and rubrics, run a pilot cohort, and review the resulting transcripts and evidence alongside your faculty — typically within a single afternoon.",
    },
  ];

  return (
    <div className="relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Oral Assessment Platform overview"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Oral Assessment Platform
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            The oral assessment platform{" "}
            <span className="italic text-[#3370F7]">built for higher education</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl">
            Run oral exams, defenses, and role-plays as a consistent, auditable process — across courses, sections, and departments — with the compliance posture your procurement team expects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a demo &rarr;
            </Link>
            <a
              href="#institutional-problem"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-[#1F2A44] transition-colors hover:bg-[#EAF1FE] hover:border-[#3370F7]/30"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. THE INSTITUTIONAL PROBLEM
      ──────────────────────────────────────────────────────────── */}
      <section
        id="institutional-problem"
        aria-label="The institutional challenge of AI in assessment"
        className="relative py-16 md:py-20 bg-white border-y border-slate-200/80"
      >
        <div className="container mx-auto max-w-3xl px-6 md:px-12 text-left space-y-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              The institutional problem
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Written assessment no longer certifies anything
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            When AI can produce indistinguishable coursework, every grade built on written submissions carries an asterisk. That is not just an academic-integrity issue — it is an accreditation and reputation issue. Institutions certify that graduates know things. The instruments behind that certification are failing.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Individual instructors are improvising responses course by course: in-class handwritten exams, AI policies nobody can enforce, detection tools with well-documented false-positive problems. What institutions need is an assessment method that is trustworthy by design — and a platform that makes it operationally viable across a department, not just in one instructor&apos;s seminar.
          </p>

          <div className="rounded-2xl border border-blue-100 bg-[#EAF1FE]/60 p-5 sm:p-6 text-slate-800">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong className="text-[#1F2A44]">Oral assessment is that method.</strong> SocraticMetric is the platform that scales it — consistently, auditably, and without adding to faculty workload.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. BUILT FOR INSTITUTIONS (6 Core Pillars)
      ──────────────────────────────────────────────────────────── */}
      <section
        id="features"
        aria-label="Platform capabilities"
        className="relative py-16 md:py-24 bg-[#F0F6FF]"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Built for institutions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              What a department needs that a point tool can&apos;t provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => {
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
          4. WHO IT'S FOR
      ──────────────────────────────────────────────────────────── */}
      <section
        id="who-its-for"
        aria-label="Who oral assessment is for"
        className="relative py-16 md:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="container mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Who it&apos;s for
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Where oral assessment earns its keep first
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {targetAudiences.map((aud, idx) => {
              const Icon = aud.icon;
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
                      {aud.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {aud.desc}
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

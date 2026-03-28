"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type IndustryId = "education" | "government" | "enterprise";

type FaqItem = {
  question: string;
  answer: string;
};

const INDUSTRIES: { id: IndustryId; label: string; heading: string }[] = [
  { id: "education", label: "Education", heading: "Education questions" },
  { id: "government", label: "Government", heading: "Government questions" },
  { id: "enterprise", label: "Enterprise", heading: "Enterprise questions" },
];

const FAQ_BY_INDUSTRY: Record<IndustryId, FaqItem[]> = {
  education: [
    {
      question: "How does Socratic Metric fit into our LMS or grading workflow?",
      answer:
        "Socratic Metric complements written work with structured oral verification. You can align prompts and rubrics with course outcomes, export summaries for the gradebook, and keep a clear record of what the learner could explain versus what was only on the page.",
    },
    {
      question: "Can we verify understanding without relying on AI-written essays?",
      answer:
        "Yes. The platform is designed for the AI era: it focuses on live dialogue, follow-up questions, and reasoning under light pressure—signals that are hard to fake with a one-shot generated document.",
    },
    {
      question: "Is the platform suitable for accreditation and integrity reviews?",
      answer:
        "You get timestamped session artifacts, structured outcomes, and consistent criteria across sections. Many teams use this as supplemental evidence for integrity programs and quality reviews alongside your existing policies.",
    },
    {
      question: "How do you support students who need accommodations?",
      answer:
        "Timing, pacing, and prompt delivery can be adjusted to documented accommodation plans. Work with your accessibility office to map those needs to session settings—we’re happy to walk through options on a demo.",
    },
    {
      question: "What evidence do we get if an outcome is challenged?",
      answer:
        "You receive defensible documentation of the verification session—what was asked, how the learner responded at a summary level, and evaluator or system scoring aligned to your rubric—so disputes can be reviewed on substance, not guesswork.",
    },
  ],
  government: [
    {
      question: "Can Socratic Metric support high-security or controlled environments?",
      answer:
        "Deployment models and data handling vary by program. We’ll align with your security team on hosting, access controls, and logging requirements—whether that’s dedicated infrastructure, VPN-only access, or other constraints you specify.",
    },
    {
      question: "How is oral verification used for operators and mission-critical procedures?",
      answer:
        "Teams use scenario-based dialogue to confirm that personnel can explain checks, contingencies, and command intent—not just recite a checklist. That reduces “documentation-only” risk before live operations.",
    },
    {
      question: "Are sessions auditable for compliance and after-action review?",
      answer:
        "Yes. Sessions are designed to produce audit-friendly records: who was verified, when, against which standard, and summarized outcomes suitable for oversight without unnecessary exposure of raw sensitive content.",
    },
    {
      question: "What does rollout look like across units or agencies?",
      answer:
        "We typically start with a pilot cohort, standardize rubrics and scenarios, then expand with training for reviewers and admins. Your demo can cover governance, roles, and how updates propagate to the field.",
    },
    {
      question: "Can verification criteria reflect doctrine or local SOPs?",
      answer:
        "Criteria and prompts can be tailored to your doctrine, SOPs, and equipment profiles so verification reflects how your organization actually operates—not a generic off-the-shelf quiz.",
    },
  ],
  enterprise: [
    {
      question: "How do we prove employees understood policies beyond sign-off sheets?",
      answer:
        "Socratic Metric adds oral verification to the compliance story: employees must explain trade-offs, exceptions, and “what would you do if…”—so attestation is backed by evidence of comprehension, not just a checkbox.",
    },
    {
      question: "Can we integrate with HRIS or learning systems?",
      answer:
        "We support patterns your IT team already uses: SSO, exports, webhooks, and API-oriented workflows depending on your stack. On a demo we’ll map your systems and the cleanest path to rostering and completion records.",
    },
    {
      question: "Is the platform built for large, distributed workforces?",
      answer:
        "Yes. Sessions can be scheduled at scale, routed to qualified reviewers where needed, and standardized so every region uses the same bar—while still allowing localized scenarios where appropriate.",
    },
    {
      question: "Can scenarios match our industry, roles, and risk profile?",
      answer:
        "Absolutely. Scenarios can mirror real incidents, product lines, and regulatory themes (safety, privacy, financial controls, etc.) so verification feels relevant—not generic training theater.",
    },
    {
      question: "What records do we retain for regulators or litigation?",
      answer:
        "You get structured evidence of verification: session metadata, outcome summaries, and rubric alignment. Your legal and compliance teams define retention; we focus on clarity and consistency of what was verified and when.",
    },
  ],
};

export function FaqSection() {
  const [industry, setIndustry] = useState<IndustryId>("education");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeMeta = INDUSTRIES.find((i) => i.id === industry)!;
  const items = FAQ_BY_INDUSTRY[industry];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-12 md:py-20 bg-[#F1F5F9] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="rounded-[28px] bg-white border border-slate-200/80 shadow-xl shadow-black/[0.04] ring-1 ring-black/[0.03] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: title + categories */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div>
                <h2
                  id="faq-heading"
                  className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1F2A44] mb-4"
                >
                  FAQ
                </h2>
                <p className="text-sm text-[#85756F]">
                  Did we miss a question?{" "}
                  <Link
                    href="mailto:hello@socraticmetric.ai"
                    className="text-[#3370F7] font-semibold hover:underline underline-offset-2"
                  >
                    Email us directly
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Select a category
                </p>
                <nav className="flex flex-col gap-2" aria-label="FAQ categories">
                  {INDUSTRIES.map((tab) => {
                    const isActive = industry === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setIndustry(tab.id);
                          setOpenIndex(0);
                        }}
                        className={cn(
                          "flex items-center justify-between w-full rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-200 border",
                          isActive
                            ? "bg-[#EAF1FE] border-[#3370F7] text-[#1F2A44] shadow-sm"
                            : "bg-white border-slate-200 text-[#1F2A44] hover:border-slate-300 hover:bg-slate-50/80"
                        )}
                      >
                        <span>{tab.label}</span>
                        {isActive ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3370F7] text-white shrink-0">
                            <Check className="h-4 w-4" strokeWidth={2.5} />
                          </span>
                        ) : (
                          <span
                            className="h-7 w-7 shrink-0 rounded-full border border-slate-200 bg-white ring-1 ring-slate-100"
                            aria-hidden
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-8 min-w-0">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">
                {activeMeta.heading}
              </p>

              <ul className="divide-y divide-slate-200 border-t border-slate-200">
                {items.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <li key={`${industry}-${index}`} className="py-0">
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        className="flex w-full items-start gap-4 py-5 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="flex-1 font-bold text-[#1F2A44] text-base sm:text-lg leading-snug pr-2">
                          {item.question}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                            isOpen
                              ? "bg-[#3370F7] border-[#3370F7] text-white"
                              : "bg-white border-[#3370F7]/30 text-[#3370F7] group-hover:bg-[#EAF1FE] group-hover:border-[#3370F7]"
                          )}
                          aria-hidden
                        >
                          <Plus
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isOpen && "rotate-45"
                            )}
                            strokeWidth={2.5}
                          />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pr-14 text-[#85756F] text-sm sm:text-base leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

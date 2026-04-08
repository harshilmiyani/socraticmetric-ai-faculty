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
      question: "What is Socratic Metric?",
      answer: "Socratic Metric is an AI-powered oral assessment platform that measures how well students understand course material by asking them to explain, reason, and respond out loud in real time."
    },
    {
      question: "How is this different from discussion questions or written exams?",
      answer: "Written work can be edited, assisted, or generated. Socratic Metric evaluates thinking as it happens. Students must respond verbally to adaptive questions, which makes it very difficult to rely on outside help."
    },
    {
      question: "Does this replace faculty?",
      answer: "No. It handles structured questioning and evaluation at scale, while giving faculty deeper insight into how students are thinking. Faculty still define the content, objectives, and grading standards."
    },
    {
      question: "How are questions created?",
      answer: "Faculty provide curated course materials such as readings, lectures, or case studies. The system generates questions dynamically based on that content and the student’s responses."
    },
    {
      question: "Can students retry or improve their answers?",
      answer: "Yes. Students can refine their responses through multiple attempts or iterations, with feedback guiding them toward stronger reasoning and clearer explanations."
    },
    {
      question: "How is grading handled?",
      answer: "Responses are evaluated against a rubric aligned to learning outcomes. Scores can be automatically transferred into the LMS gradebook."
    },
    {
      question: "Does this integrate with Canvas or other LMS platforms?",
      answer: "Yes. Socratic Metric integrates with major LMS systems including Canvas, with single sign-on and automated grade transfer."
    },
    {
      question: "How does this address AI cheating?",
      answer: "Because responses are oral, adaptive, and time-bound, students cannot simply paste in answers. The system measures authentic understanding rather than polished output."
    },
    {
      question: "What kind of courses does this work for?",
      answer: "It works across disciplines including business, healthcare, law, and technology. Any subject that requires explanation, reasoning, or applied thinking benefits."
    },
    {
      question: "What is the student experience like?",
      answer: "Students engage in a guided, conversational assessment that feels more like being questioned by a professor than taking a test."
    }
  ],
  government: [
    {
      question: "What is Socratic Metric?",
      answer: "Socratic Metric is an AI-based oral evaluation system that verifies whether individuals can demonstrate understanding, reasoning, and decision-making in real time."
    },
    {
      question: "What problem does this solve for government agencies?",
      answer: "It provides a reliable way to confirm that personnel can apply knowledge under pressure, rather than simply complete training modules."
    },
    {
      question: "How is this used in training environments?",
      answer: "Personnel are given mission-relevant material and then evaluated through structured questioning. The system adapts based on responses to test depth of understanding."
    },
    {
      question: "Can this be used for certification or qualification?",
      answer: "Yes. It can function as a verification layer to ensure individuals meet required standards before deployment or assignment."
    },
    {
      question: "How does this improve readiness?",
      answer: "It measures whether individuals can think, explain, and respond in real-world scenarios, not just recall information."
    },
    {
      question: "Does this require pre-written scripts or fixed questions?",
      answer: "No. The system generates questions dynamically based on curated content and adjusts in real time."
    },
    {
      question: "Is this suitable for high-stakes environments?",
      answer: "Yes. It is designed for situations where decisions, communication, and reasoning must be accurate under pressure."
    },
    {
      question: "How does it ensure consistency and fairness?",
      answer: "Every participant is evaluated using the same structured framework and rubric, reducing variability found in human-led evaluations."
    },
    {
      question: "Can it be used across different departments or roles?",
      answer: "Yes. It is adaptable to defense, healthcare, compliance, and administrative functions where knowledge must be applied, not just learned."
    },
    {
      question: "What about data security and control?",
      answer: "The system can be deployed with enterprise-grade security and configured to meet government requirements for data handling and access control."
    }
  ],
  enterprise: [
    {
      question: "What is Socratic Metric?",
      answer: "Socratic Metric is an AI-driven system that verifies whether employees can explain, apply, and defend knowledge in real-time conversations. It measures readiness, not course completion."
    },
    {
      question: "Is this a training platform or an LMS replacement?",
      answer: "No. It sits on top of your existing training. It answers a different question: Can your people actually perform when it matters?"
    },
    {
      question: "How is this used in hiring?",
      answer: "Candidates are given unfamiliar material and then questioned in a live, adaptive conversation. The system evaluates how they think, explain, and handle pressure. It measures cognitive competence, not prior knowledge."
    },
    {
      question: "Do we need to create a large bank of questions?",
      answer: "No. You provide short source material. The system generates questions dynamically and adapts based on the candidate’s responses."
    },
    {
      question: "What does it actually measure?",
      answer: "It measures comprehension, clarity of explanation, reasoning under pressure, ability to handle objections, and whether someone is guessing or truly understands."
    },
    {
      question: "How is this different from interviews or role play?",
      answer: "Interviews are inconsistent and subjective. Socratic Metric applies structured, repeatable questioning that probes deeper than most interviewers can in a short time."
    },
    {
      question: "How is this used after hiring?",
      answer: "Once employees are trained, the system verifies product knowledge, messaging accuracy, and readiness before they engage with customers."
    },
    {
      question: "Is this relevant for regulated industries?",
      answer: "Yes. It is especially valuable in healthcare, pharma, finance, and any environment where incorrect communication creates risk."
    },
    {
      question: "Can it reduce time to competency?",
      answer: "Yes. It identifies gaps quickly and ensures people are truly ready before moving forward, which shortens ramp time and reduces costly mistakes."
    },
    {
      question: "What does implementation look like?",
      answer: "It integrates with existing workflows. You define the content and rubric, and the system handles the questioning, evaluation, and reporting."
    }
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

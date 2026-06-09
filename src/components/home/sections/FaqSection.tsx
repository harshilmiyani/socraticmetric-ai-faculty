"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type IndustryId = "education" | "government" | "enterprise";

type FaqItem = {
  question: string;
  answer: string;
};

const INDUSTRIES: { id: IndustryId; label: string; heading: string }[] = [
  { id: "education", label: "Education", heading: "Education questions" },
  { id: "enterprise", label: "Enterprise", heading: "Enterprise questions" },
  { id: "government", label: "Government", heading: "Government questions" },
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
      className="relative pt-8 pb-20 md:pt-12 md:pb-32 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(51,112,247,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Header & Tabs */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs tracking-widest uppercase shadow-sm">
                Support
              </span>
              <h2
                id="faq-heading"
                className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1F2A44] leading-tight"
              >
                Frequently <br className="hidden lg:block" />
                Asked <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]">
                  Questions.
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-[#64748B] leading-relaxed">
              Everything you need to know about how Socratic Metric works in your industry.
            </p>

            <div className="pt-4">
              <nav className="flex flex-col gap-3" aria-label="FAQ categories">
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
                        "relative flex items-center justify-between w-full rounded-2xl px-6 py-4 text-left text-base font-bold transition-all duration-300 overflow-hidden group",
                        isActive
                          ? "text-white shadow-lg shadow-[#3370F7]/25"
                          : "bg-white border border-slate-200 text-[#1F2A44] hover:border-slate-300 hover:shadow-md"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                      <span className="relative z-10">
                        {isActive ? (
                          <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-8 min-w-0">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 md:p-10">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-[#1F2A44]">
                  {activeMeta.heading}
                </h3>
              </div>

              <ul className="divide-y divide-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {items.map((item, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <li key={`${industry}-${index}`} className="py-2">
                          <button
                            type="button"
                            onClick={() => toggle(index)}
                            className="flex w-full items-start justify-between gap-6 py-4 text-left group"
                            aria-expanded={isOpen}
                          >
                            <span className={cn(
                              "flex-1 font-bold text-base sm:text-lg leading-snug transition-colors duration-200",
                              isOpen ? "text-[#3370F7]" : "text-[#1F2A44] group-hover:text-[#3370F7]"
                            )}>
                              {item.question}
                            </span>
                            <span
                              className={cn(
                                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                isOpen
                                  ? "bg-[#EAF1FE] text-[#3370F7] rotate-180"
                                  : "bg-slate-50 text-slate-400 group-hover:bg-[#EAF1FE] group-hover:text-[#3370F7]"
                              )}
                              aria-hidden
                            >
                              {isOpen ? (
                                <Minus className="h-4 w-4" strokeWidth={2.5} />
                              ) : (
                                <Plus className="h-4 w-4" strokeWidth={2.5} />
                              )}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="pb-6 pr-12 text-[#64748B] text-base leading-relaxed">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

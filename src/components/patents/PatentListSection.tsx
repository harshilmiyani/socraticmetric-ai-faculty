"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function PatentListSection() {
  const patents = [
    {
      label: "PATENT 1",
      id: "US 12,211,511 B1",
      title: "System That Conducts and Evaluates Oral Q&A Sessions Using AI",
      subtitle: "Generates and evaluates oral Q&A using AI",
      useCases: [
        "Higher education",
        "Thesis defense",
        "Professional training",
        "Mock interviews defense",
      ],
      keyFeatures: [
        "Text to speech/speech to text",
        "Adaptive questioning",
        "Voice authentication",
        "AI grading",
        "Cross-referencing oral and written work to detect AI generated content",
      ],
    },
    {
      label: "PATENT 2",
      id: "US 11,880,139 B1",
      title: "AI System for Structured Dialogues in Education",
      subtitle: "Structured goal-driven AI conversations",
      useCases: [
        "Interactive learning",
        "Educational coaching",
        "Professional skill development",
      ],
      keyFeatures: [
        "Socratic method dialogues",
        "Multi-participant AI moderator",
        "Context-driven session content",
        "Dynamic difficulty adjustment",
      ],
    },
    {
      label: "PATENT 3",
      id: "US 12,185,655 B1",
      title: "AI System for Conducting Dialogues and Evaluations",
      subtitle: "Analyzes and evaluates discourse via AI dialogue",
      useCases: [
        "Structured Q&A for comprehension",
        "Real time coaching",
      ],
      keyFeatures: [
        "Conversation pattern tracking",
        "Contextual learning from prior responses",
        "Assessment-driven questioning",
        "Skill reinforcement",
      ],
    },
    {
      label: "PATENT 4",
      id: "US 2024/0188500 A1",
      title: "AI System That Generates Essays and Evaluates Oral Readings & Responses",
      subtitle: "Generates written content and evaluates spoken responses for comprehension, authenticity, and cognitive alignment",
      useCases: [
        "Higher education",
        "Workforce training",
        "Identity-verified oral education",
        "AI content validation",
      ],
      keyFeatures: [
        "Oral reading fluency analysis",
        "Speech-to-text transcription",
        "Alignment scoring between written and spoken content",
        "Cognitive consistency evaluation for non-authentic authorship detection",
        "Adaptive follow-up questioning",
      ],
    },
  ];

  return (
    <section className="bg-slate-50/50 py-24 px-6 border-y border-slate-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] text-xs font-semibold tracking-wide shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]" />
          </span>
          Methodology
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2A44] mb-16 text-center font-playfair">
          How Socratic Metric's Oral Verification Platform Works
        </h2>

        <div className="space-y-8 w-full">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-[clamp(1.15rem,4vw,1.5rem)] p-8 md:p-10 shadow-sm border border-slate-200/60 hover:border-[#3370F7]/30 hover:shadow-xl hover:shadow-[#3370F7]/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#EAF1FE] group-hover:bg-[#3370F7] transition-colors duration-500" />
              <div className="mb-6">
                <span className="text-xs font-bold text-[#85756F] uppercase tracking-wider block mb-1">
                  {patent.label}
                </span>
                <span className="text-sm font-semibold text-[#1F2A44]">
                  {patent.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2A44] mb-2">
                {patent.title}
              </h3>
              <p className="text-[#85756F] italic text-sm mb-8">
                {patent.subtitle}
              </p>

              <div className="flex flex-col gap-8 mb-8">
                <div>
                  <h4 className="text-[17px] font-bold text-[#1F2A44] mb-4">
                    Use cases:
                  </h4>
                  <ul className="space-y-3">
                    {patent.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start text-sm text-[#3B485A]">
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#3370F7] mr-3 shrink-0 mt-[1px]" />
                        <span className="leading-tight">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[17px] font-bold text-[#1F2A44] mb-4">
                    Key features:
                  </h4>
                  <ul className="space-y-3">
                    {patent.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-[#3B485A]">
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#3370F7] mr-3 shrink-0 mt-[1px]" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100">
                <div className="bg-[#EAF1FE] text-[#3370F7] text-xs font-semibold px-4 py-2 rounded-full">
                  [Patent document link placeholder]
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

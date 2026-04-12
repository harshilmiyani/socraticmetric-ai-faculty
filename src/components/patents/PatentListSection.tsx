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
    <section className="bg-[#F8FAFC] py-20 px-6 border-y border-slate-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#3370F7]" />
          <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Methodology</span>
          <div className="h-px w-12 bg-[#3370F7]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F2A44] mb-16 text-center font-serif leading-tight">
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
              className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:border-[#3370F7]/30 hover:shadow-xl hover:shadow-[#3370F7]/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#EAF1FE] group-hover:bg-[#3370F7] transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#3370F7] text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                      {patent.label}
                    </span>
                    <span className="block text-sm font-semibold text-[#64748B]">
                      {patent.id}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-3 leading-tight">
                    {patent.title}
                  </h3>
                  <p className="text-[#64748B] text-base italic">
                    {patent.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-[#1F2A44] mb-4">
                    Use cases:
                  </h4>
                  <ul className="space-y-3">
                    {patent.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start text-base text-[#64748B]">
                        <CheckCircle2 className="w-5 h-5 text-[#3370F7] mr-3 shrink-0 mt-0.5" />
                        <span className="leading-snug">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-[#1F2A44] mb-4">
                    Key features:
                  </h4>
                  <ul className="space-y-3">
                    {patent.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start text-base text-[#64748B]">
                        <CheckCircle2 className="w-5 h-5 text-[#F58022] mr-3 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-slate-100">
                <div className="bg-white border border-slate-200 text-[#64748B] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-slate-50 transition-colors cursor-pointer">
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

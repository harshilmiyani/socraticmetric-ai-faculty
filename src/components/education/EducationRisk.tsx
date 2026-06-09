"use client";

import { FileText, BookOpen, Award, Hourglass } from "lucide-react";

export function EducationRisk() {
  const risks = [
    {
      icon: <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.75} />,
      bg: "bg-amber-50",
      title: "Undetected AI Shortcuts",
      desc: "Sophisticated AI-generated responses that mask gaps in real student understanding.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      bg: "bg-[#EAF1FE]",
      title: "Limited Cognitive Visibility",
      desc: "Silent reading and writing offer no way to know if a student actually processed the entire material.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      bg: "bg-[#EAF1FE]",
      title: "Credential Devaluation",
      desc: "If institutions do not modernize assessment, degrees lose their long-term meaning and value.",
    },
    {
      icon: <Hourglass className="w-8 h-8 text-[#F58022]" strokeWidth={1.75} />,
      bg: "bg-[#F58022]/10",
      title: "Investigative Fatigue",
      desc: "Faculty time is increasingly consumed by the impossible task of proving AI misconduct in written work.",
    },
  ];

  return (
    <section className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 space-y-4">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#F58022] font-bold text-xs tracking-widest uppercase">
              The New Risk
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            The False Assurance of Competence in Higher Education
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Generative AI tools allow students to submit polished written work that bypasses genuine
            comprehension. When linguistic fluency no longer equals competence, grading written
            documentation alone puts the credibility of academic work and degrees at risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-md shadow-blue-900/5 hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl ${risk.bg} transition-transform duration-300`}
              >
                {risk.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] leading-snug">
                {risk.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{risk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

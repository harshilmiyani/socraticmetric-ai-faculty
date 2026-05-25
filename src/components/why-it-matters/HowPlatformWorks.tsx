"use client";

import { ShieldCheck, Eye, Target, PlayCircle } from "lucide-react";

export function HowPlatformWorks() {
  const steps = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#3370F7]" />,
      bg: "bg-blue-50",
      title: "AI-Moderated Adaptive Dialogue",
      desc: "Standardized, real-time workflows force users to articulate, refine, and defend their reasoning aloud under gentle pressure.",
    },
    {
      icon: <Eye className="w-8 h-8 text-[#3370F7]" />,
      bg: "bg-blue-50",
      title: "Identity-Verified Audit Records",
      desc: "Generate immutable, transcript-backed proof of authentic human comprehension for compliance, accreditation, or internal oversight.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#F58022]" />,
      bg: "bg-orange-50",
      title: "Cognitive Readiness Assurance",
      desc: "Move beyond paperwork to guarantee that your high-stakes decisions, grades, and operations reflect genuine understanding.",
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-teal-600" />,
      bg: "bg-teal-50",
      title: "Seamless Institutional Deployment",
      desc: "Effortlessly configure assessments, automate adaptive follow-up questioning, and secure objective cognitive scoring at scale.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">The Platform</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            How Socratic Metric Evaluates <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] bg-clip-text text-transparent">
              Cognition In Motion
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left space-y-6 h-full"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.bg} transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2A44]">{item.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-base flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, Eye, Target, PlayCircle } from "lucide-react";

export function HowPlatformWorks() {
  const steps = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#3370F7]" />,
      bg: "bg-blue-50",
      title: "Oral Verification at Scale",
      desc: "Standardized workflows confirm people can explain their work in their own words."
    },
    {
      icon: <Eye className="w-8 h-8 text-[#3370F7]" />,
      bg: "bg-blue-50",
      title: "Defensible Evidence",
      desc: "Documented, repeatable proof of comprehension for audits, accreditation, or oversight."
    },
    {
      icon: <Target className="w-8 h-8 text-[#F58022]" />,
      bg: "bg-orange-50",
      title: "High-Stakes Confidence",
      desc: "Know grades, decisions, and operations reflect real understanding, not just paperwork."
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-teal-600" />,
      bg: "bg-teal-50",
      title: "Simple to Deploy",
      desc: "Configure assessments, automate scheduling, centralize scoring—no heavy training required."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Platform</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            How Socratic Metric's Oral Verification <br className="hidden sm:block" /> Platform Works
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

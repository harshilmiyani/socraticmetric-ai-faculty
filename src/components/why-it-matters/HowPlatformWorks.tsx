"use client";

import { ShieldCheck, Eye, Target, PlayCircle } from "lucide-react";

export function HowPlatformWorks() {
  const steps = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#1F2A44]" />,
      bg: "bg-slate-100",
      title: "Oral Verification at Scale",
      desc: "Standardized workflows confirm people can explain their work in their own words."
    },
    {
      icon: <Eye className="w-10 h-10 text-[#1F2A44]" />,
      bg: "bg-blue-50",
      title: "Defensible Evidence",
      desc: "Documented, repeatable proof of comprehension for audits, accreditation, or oversight."
    },
    {
      icon: <Target className="w-10 h-10 text-[#1F2A44]" />,
      bg: "bg-orange-50",
      title: "High-Stakes Confidence",
      desc: "Know grades, decisions, and operations reflect real understanding, not just paperwork."
    },
    {
      icon: <PlayCircle className="w-10 h-10 text-[#1F2A44]" />,
      bg: "bg-teal-50",
      title: "Simple to Deploy",
      desc: "Configure assessments, automate scheduling, centralize scoring—no heavy training required."
    }
  ];

  return (
    <section className="py-24 bg-[#EAF6FF] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            How Socratic Metric's Oral Verification <br /> Platform Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left space-y-6 group"
            >
              <div className={`p-4 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

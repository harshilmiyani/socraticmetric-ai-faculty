"use client";

import { FileCheck, BadgeCheck, Network } from "lucide-react";

export function EnterpriseSolution() {
  const solutions = [
    {
      icon: <FileCheck className="w-8 h-8 text-[#F58022]" strokeWidth={1.75} />,
      bg: "bg-orange-50",
      title: "Critical policy and decision verification",
      desc: "Use structured oral reviews to ensure owners and approvers can explain key policies, trade-offs, and implications in their own words.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      bg: "bg-blue-50",
      title: "Scalable training and enablement checks",
      desc: "Run standardized oral check-ins after trainings, playbook rollouts, or policy changes to confirm employees truly understand how to apply them.",
    },
    {
      icon: <Network className="w-8 h-8 text-emerald-600" strokeWidth={1.75} />,
      bg: "bg-emerald-50",
      title: "Cross-functional alignment",
      desc: "Validate that stakeholders across legal, compliance, operations, and leadership share a common understanding before high-stakes decisions go live.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[400px] h-[400px] max-w-[80vw] rounded-full bg-[#EAF1FE]/80 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">How It Works</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            How oral verification lowers enterprise risk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-start space-y-6 h-full"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.bg} transition-transform duration-300`}
              >
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

"use client";

import { FileCheck, BadgeCheck, Network } from "lucide-react";

export function EnterpriseSolution() {
  const solutions = [
    {
      icon: <FileCheck className="w-9 h-9 sm:w-10 sm:h-10 text-[#F58022]" strokeWidth={1.75} />,
      bg: "bg-[#F58022]/10",
      title: "Critical policy and decision verification",
      desc: "Use structured oral reviews to ensure owners and approvers can explain key policies, trade-offs, and implications in their own words.",
    },
    {
      icon: <BadgeCheck className="w-9 h-9 sm:w-10 sm:h-10 text-[#3370F7]" strokeWidth={1.75} />,
      bg: "bg-[#EAF1FE]",
      title: "Scalable training and enablement checks",
      desc: "Run standardized oral check-ins after trainings, playbook rollouts, or policy changes to confirm employees truly understand how to apply them.",
    },
    {
      icon: <Network className="w-9 h-9 sm:w-10 sm:h-10 text-[#1F2A44]" strokeWidth={1.75} />,
      bg: "bg-slate-100",
      title: "Cross-functional alignment",
      desc: "Validate that stakeholders across legal, compliance, operations, and leadership share a common understanding before high-stakes decisions go live.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-12 md:py-16 lg:py-20 bg-[#F1F5F9] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[400px] h-[400px] max-w-[80vw] rounded-full bg-[#EAF1FE]/80 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto px-1">
          <span className="text-[#3370F7] font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            How it works
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
            How oral verification lowers enterprise risk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5 hover:shadow-2xl hover:ring-[#3370F7]/10 transition-all duration-300 flex flex-col items-center text-center space-y-4 sm:space-y-5 group h-full"
            >
              <div
                className={`p-3 sm:p-4 rounded-2xl ${item.bg} ring-1 ring-black/[0.04] group-hover:scale-105 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2A44]">{item.title}</h3>
              <p className="text-[#85756F] leading-relaxed text-sm sm:text-base flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

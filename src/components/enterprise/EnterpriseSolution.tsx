"use client";

import { FileCheck, BadgeCheck, Network } from "lucide-react";

export function EnterpriseSolution() {
  const solutions = [
    {
      icon: <FileCheck className="w-10 h-10 text-[#F58022]" />,
      bg: "bg-[#F58022]/10",
      title: "Critical policy and decision verification",
      desc: "Use structured oral reviews to ensure owners and approvers can explain key policies, trade-offs, and implications in their own words."
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-teal-500" />,
      bg: "bg-teal-50",
      title: "Scalable training and enablement checks",
      desc: "Run standardized oral check-ins after trainings, playbook rollouts, or policy changes to confirm employees truly understand how to apply them"
    },
    {
      icon: <Network className="w-10 h-10 text-[#3370F7]" />,
      bg: "bg-[#EAF1FE]",
      title: "Cross-functional alignment",
      desc: "Validate that stakeholders across legal, compliance, operations, and leadership share a common understanding before high-stakes decisions go live."
    }
  ];

  return (
    <section className="py-24 bg-[#EAF1FE] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            How oral verification lowers enterprise risk
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left space-y-6 group"
            >
              <div className={`p-4 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2A44] mb-2">{item.title}</h3>
              <p className="text-[#85756F] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { FileText, BadgeCheck, BarChart3 } from "lucide-react";

export function GovernmentSolution() {
  const solutions = [
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      bg: "bg-orange-50",
      title: "Mission-critical knowledge validation",
      desc: "Use structured oral scenarios to confirm operators and leaders can explain procedures, contingencies, and decision points in their own words."
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-teal-500" />,
      bg: "bg-teal-50",
      title: "Training and certification support",
      desc: "Add oral checkpoints to training, simulations, and recertification so you can validate real understanding before granting critical responsibilities."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
      bg: "bg-blue-50",
      title: "Operational alignment",
      desc: "Ensure that teams across operations, safety, and command share a common mental model before executing high-risk missions or procedures."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#E6EEF5] to-[#F2F6FA] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            How oral verification strengthens readiness
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

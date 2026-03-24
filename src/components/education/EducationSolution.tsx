"use client";

import { CheckCircle2, ShieldCheck, Users, BarChart3, HelpCircle } from "lucide-react";

export function EducationSolution() {
  const solutions = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#3370F7]" />,
      bg: "bg-[#EAF1FE]",
      title: "Academic integrity verification",
      desc: "Use structured oral assessments to confirm students can explain and defend their work in their own words."
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-red-500" />,
      bg: "bg-red-50",
      title: "Scalable oral exam administration",
      desc: "Standardize questions, timing, and scoring so instructors can run consistent oral exams across large cohorts."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-gray-500" />,
      bg: "bg-gray-50",
      title: "Learning outcome assessment",
      desc: "Measure reasoning, explanation, and problem-solving skills that can't be validated by written documentation alone."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            How oral verification restores <br /> academic integrity
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#F5F5F5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-6 group"
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

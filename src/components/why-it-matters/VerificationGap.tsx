"use client";

import { ClipboardCheck, FileSearch, Lightbulb } from "lucide-react";

export function VerificationGap() {
  const gaps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-teal-600" />,
      title: "AI-generated content passes visual review",
    },
    {
      icon: <FileSearch className="w-12 h-12 text-blue-500" />, 
      title: "Written documentation hides comprehension gaps",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "High-stakes decisions depend on real understanding",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            The Verification Gap Organizations Face
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            AI makes it easy to create convincing documentation. But when the stakes are high, you need to know people actually understand—not just copy what sounds right. Traditional written documentation can't verify real understanding in high-stakes environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gaps.map((gap, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center space-y-6 h-full"
            >
              <div className="p-4 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {gap.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] leading-snug w-full">
                {gap.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

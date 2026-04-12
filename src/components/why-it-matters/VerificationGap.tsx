"use client";

import { ClipboardCheck, FileSearch, Lightbulb } from "lucide-react";

export function VerificationGap() {
  const gaps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
      title: "AI-generated content passes visual review",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-[#3370F7]" />, 
      title: "Written documentation hides comprehension gaps",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#F58022]" />,
      title: "High-stakes decisions depend on real understanding",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">The Verification Gap</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            The Verification Gap Organizations Face
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            AI makes it easy to create convincing documentation. But when the stakes are high, you need to know people actually understand—not just copy what sounds right. Traditional written documentation can't verify real understanding in high-stakes environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {gaps.map((gap, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-6 h-full"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl transition-transform duration-300">
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

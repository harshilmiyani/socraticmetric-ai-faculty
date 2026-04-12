"use client";

import { Search, PenTool, ClipboardList, AlertCircle } from "lucide-react";

export function EnterpriseRisk() {
  const risks = [
    {
      icon: <Search className="w-8 h-8 text-[#F58022]" strokeWidth={1.75} />,
      iconBg: "bg-orange-50",
      title: "AI-drafted policies approved without deep review",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-blue-50",
      title: "Leaders signing off on documentation they can't fully explain",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-blue-50",
      title: "Hidden gaps in understanding across distributed teams",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-amber-600" strokeWidth={1.75} />,
      iconBg: "bg-amber-50",
      title: "Operational, legal, and reputational risk from poor decisions",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">The New Risk</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            The new risk in enterprise organizations
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Knowledge-work teams can now rely on AI to draft policies, procedures, and analyses.
            When decisions are made on documents no one fully understands, risk increases across the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-6"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl ${risk.iconBg} transition-transform duration-300`}
              >
                {risk.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] leading-snug">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

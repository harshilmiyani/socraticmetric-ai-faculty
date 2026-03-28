"use client";

import { Search, PenTool, ClipboardList, AlertCircle } from "lucide-react";

export function EnterpriseRisk() {
  const risks = [
    {
      icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-[#1F2A44]" strokeWidth={1.75} />,
      iconBg: "bg-[#F58022]/15",
      title: "AI-drafted policies approved without deep review",
    },
    {
      icon: <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-[#EAF1FE]",
      title: "Leaders signing off on documentation they can't fully explain",
    },
    {
      icon: <ClipboardList className="w-7 h-7 sm:w-8 sm:h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-[#EAF1FE]",
      title: "Hidden gaps in understanding across distributed teams",
    },
    {
      icon: <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" strokeWidth={1.75} />,
      iconBg: "bg-amber-50",
      title: "Operational, legal, and reputational risk from poor decisions",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#F1F5F9] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 space-y-3 sm:space-y-4">
          <span className="text-[#3370F7] font-bold text-xs tracking-[0.2em] uppercase">
            The new risk
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight px-1">
            The new risk in enterprise organizations
          </h2>
          <p className="text-base sm:text-lg text-[#85756F] max-w-3xl mx-auto leading-relaxed px-1">
            Knowledge-work teams can now rely on AI to draft policies, procedures, and analyses.
            When decisions are made on documents no one fully understands, risk increases across the business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl border border-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5 hover:shadow-2xl hover:ring-[#3370F7]/10 transition-all duration-300 group flex flex-col items-center text-center space-y-4 sm:space-y-5"
            >
              <div
                className={`p-3 sm:p-4 rounded-2xl ${risk.iconBg} ring-1 ring-black/[0.04] group-hover:scale-105 transition-transform duration-300`}
              >
                {risk.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1F2A44] leading-snug">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

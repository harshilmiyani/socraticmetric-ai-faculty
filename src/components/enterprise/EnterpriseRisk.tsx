"use client";

import { Search, PenTool, ClipboardList, AlertCircle } from "lucide-react";

export function EnterpriseRisk() {
  const risks = [
    {
      icon: <Search className="w-10 h-10 text-[#1F2A44]" />,
      iconBg: "bg-[#F58022]/20", // Using a circle background for icon
      title: "AI-drafted policies approved without deep review",
    },
    {
      icon: <PenTool className="w-10 h-10 text-[#1F2A44]" />,
      iconBg: "bg-[#EAF1FE]",
      title: "Leaders signing off on documentation they can't fully explain",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-[#1F2A44]" />,
      iconBg: "bg-[#EAF1FE]",
      title: "Hidden gaps in understanding across distributed teams",
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-[#1F2A44]" />,
      iconBg: "bg-yellow-100",
      title: "Operational, legal, and reputational risk from poor decisions",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            The new risk in enterprise organizations
          </h2>
          <p className="text-lg text-[#85756F] max-w-3xl mx-auto">
            Knowledge-work teams can now rely on AI to draft policies, procedures, and analyses. 
            When decisions are made on documents no one fully understands, risk increases across the business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#EAF1FE] hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center space-y-6"
            >
              <div className="relative">
                <div className={`absolute -inset-2 rounded-full opacity-50 ${risk.iconBg}`} />
                <div className="relative p-2">
                    {risk.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] leading-snug text-left md:text-center w-full">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

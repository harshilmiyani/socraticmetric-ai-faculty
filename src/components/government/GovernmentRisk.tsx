"use client";

import { HelpCircle, Cog, Eye, AlertTriangle } from "lucide-react";

export function GovernmentRisk() {
  const risks = [
    {
      icon: <HelpCircle className="w-12 h-12 text-[#1F2A44]" />,
      title: "Operators following AI-generated procedures they don't fully understand",
    },
    {
      icon: <Cog className="w-12 h-12 text-[#001f5c]" />, // Darker blue icon
      title: "Gaps between documented protocols and real-world execution",
    },
    {
      icon: <Eye className="w-12 h-12 text-[#001f5c]" />,
      title: "Limited visibility into individual readiness and decision-making",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#001f5c]" />,
      title: "Operational, safety, and compliance exposure in high-stakes environments",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            The new risk in in government & aerospace operations
          </h2>
          <p className="text-lg text-[#85756F] max-w-3xl mx-auto">
            AI can draft procedures, mission plans, and after-action reports. If teams rely on documentation they
            can't fully reason through, mission performance and public safety are at risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#EAF1FE] hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-start text-left space-y-6 h-full"
            >
              <div className="p-0">
                  {risk.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] leading-snug w-full">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

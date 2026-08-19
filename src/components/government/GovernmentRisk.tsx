import { HelpCircle, Cog, Eye, AlertTriangle } from "lucide-react";

export function GovernmentRisk() {
  const risks = [
    {
      icon: <HelpCircle className="w-8 h-8 text-[#F58022]" strokeWidth={1.75} />,
      iconBg: "bg-orange-50",
      title: "Operators relying on AI-generated mission plans they cannot independently defend",
    },
    {
      icon: <Cog className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-blue-50",
      title: "Hidden gaps in technical fluency and system redundancy logic",
    },
    {
      icon: <Eye className="w-8 h-8 text-[#3370F7]" strokeWidth={1.75} />,
      iconBg: "bg-blue-50",
      title: "Inability to articulate failure cascades and real-time anomaly response strategies",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" strokeWidth={1.75} />,
      iconBg: "bg-amber-50",
      title:
        "Operational and safety exposure from a reliance on written output over true comprehension",
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
            The false assurance of competence in high-stakes operations
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Generative AI has fundamentally altered how safety doctrine and operational procedures are
            produced.             When mission-critical systems and decisions rely on polished documentation the
            operator cannot fully reason through, mission performance and public safety face
            unprecedented exposure.
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

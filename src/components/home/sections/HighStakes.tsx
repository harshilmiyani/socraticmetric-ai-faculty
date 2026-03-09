import { GraduationCap, Building, Shield } from "lucide-react";

export function HighStakes() {
  const items = [
    {
      icon: GraduationCap,
      title: "Higher Education",
      desc: "Verify authentic comprehension beyond AI-written submissions. Restore academic integrity through oral verification.",
      points: [
        "Academic integrity verification",
        "Oral exam administration",
        "Learning outcome assessment",
        "Accreditation compliance"
      ]
    },
    {
      icon: Building,
      title: "Enterprise",
      desc: "Ensure your workforce can articulate and apply critical policies and procedures beyond documentation.",
      points: [
        "Compliance verification",
        "Training effectiveness",
        "Knowledge retention",
        "Operational readiness"
      ]
    },
    {
      icon: Shield,
      title: "Government & Defense",
      desc: "Verify operator competency under high-stakes conditions with audit-ready verification records.",
      points: [
        "Mission-critical verification",
        "Security clearance validation",
        "Doctrine comprehension",
        "Audit trail compliance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0F2C4C]">Built for High-Stakes Environments</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-lg shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 flex flex-col h-full ring-1 ring-white/50">
              <div className="h-12 w-12 rounded-xl bg-blue-50/80 flex items-center justify-center mb-6 text-blue-600">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0F2C4C]">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

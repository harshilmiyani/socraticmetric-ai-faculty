import { GraduationCap, Building, Shield } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TheNewRisk() {
  const risks = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "AI can write the essay. Can your student defend it?",
      link: "#"
    },
    {
      icon: Building,
      title: "Enterprise",
      desc: "AI can draft the policy. Can your team reason through it?",
      link: "#"
    },
    {
      icon: Shield,
      title: "Government & Aerospace",
      desc: "AI can generate the procedure. Can your operator execute under pressure?",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">THE NEW RISK</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0F2C4C]">
            When AI Can Write It,<br />
            Documentation Proves Nothing.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((card, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 flex flex-col items-start text-left h-full ring-1 ring-white/50">
              <div className="h-12 w-12 rounded-lg bg-blue-50/80 flex items-center justify-center mb-6 text-blue-600">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F2C4C]">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>
              <Link href={card.link} className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

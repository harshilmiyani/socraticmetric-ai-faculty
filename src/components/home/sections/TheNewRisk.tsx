"use client";

import { GraduationCap, Building, Shield } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function TheNewRisk() {
  const risks = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "AI can write the essay. Can your student defend it?",
      link: "/education"
    },
    {
      icon: Building,
      title: "Enterprise",
      description: "AI can draft the policy. Can your team reason through it?",
      link: "/enterprise"
    },
    {
      icon: Shield,
      title: "Government & Aerospace",
      description: "AI can generate the procedure. Can your operator execute under pressure?",
      link: "/government"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]/50 relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#EAF1FE] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#F58022]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-10 space-y-4">
          <span className="text-[#3370F7] font-bold text-xs tracking-widest uppercase">THE NEW RISK</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            When AI Can Write It,<br />
            Documentation Proves Nothing.
          </h2>
        </div>
        
        <HoverEffect items={risks} className="max-w-6xl mx-auto w-full" />
      </div>
    </section>
  );
}

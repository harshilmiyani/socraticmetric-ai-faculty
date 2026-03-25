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
    <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
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

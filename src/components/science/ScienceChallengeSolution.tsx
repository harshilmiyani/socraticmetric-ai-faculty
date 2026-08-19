"use client";

import { AlertTriangle, Lightbulb } from "lucide-react";

export function ScienceChallengeSolution() {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              The Fundamental Shift
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight mb-6">
            From Static Output to Verified Cognition
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Generative AI has fundamentally broken traditional written assessments. To truly verify comprehension in high-stakes environments, we must move from silent reading to AI-moderated oral evaluation.
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100 bg-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/img/sciencepage/challenge-solution.png" 
            alt="The Challenge vs The Solution: Moving from static output to verified cognition"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
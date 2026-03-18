"use client";

import { CheckCircle2 } from "lucide-react";

export function RequestDemoHero() {
  const features = [
    "Verify authentic comprehension beyond AI-generated content",
    "Create defensible evidence of real understanding for high-stakes decisions",
    "Standardize oral assessments and reviews at scale"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#EAF6FF] to-[#F0F9FF]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-widest text-[#3370F7] uppercase">
                WHY SOCRATIC METRIC MATTERS
              </div>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.1]">
              See how Socratic Metric verifies real understanding
            </h1>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
              Socratic Metric turns high-stakes documentation into oral verification. Our platform helps teams confirm that people can explain, reason through, and defend the work they sign off on—before decisions, grades, or missions go live.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-white rounded-full p-0.5 shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Placeholder Video/Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-white/50 backdrop-blur-sm">
              {/* Image/Video Placeholder */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

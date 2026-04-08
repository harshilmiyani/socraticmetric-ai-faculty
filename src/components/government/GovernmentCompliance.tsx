"use client";

import { CheckCircle2, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

export function GovernmentCompliance() {
  const points = [
    "Documented verification that key roles grasp policies and procedures",
    "Repeatable workflows aligned to internal oversight and audit requirements",
    "Support for demonstrating readiness and compliance to external reviewers",
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#F1F5F9] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] max-w-[90vw] rounded-full bg-[#3370F7]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-10 lg:gap-14 xl:gap-16">
          <div className="lg:w-1/2 space-y-4 sm:space-y-5 text-center lg:text-left shrink-0">
            <span className="text-[#3370F7] font-bold text-xs tracking-[0.2em] uppercase inline-block">
              Oversight
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Support policy, compliance, <br className="hidden sm:block" />
              and oversight
            </h2>
            <p className="text-base sm:text-lg text-[#85756F] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Oral verification gives agencies defensible evidence that personnel responsible for critical tasks understand the protocols they rely on.
            </p>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#3370F7]/25 to-[#F58022]/20 blur-md opacity-60 group-hover:opacity-90 transition duration-500" />
              <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-white p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/[0.06] ring-1 ring-black/5 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3370F7]/40 to-transparent" />
                <div className="space-y-5 sm:space-y-6 relative z-10">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-0.5 bg-white rounded-full p-0.5 shadow-sm ring-1 ring-slate-100 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                      </div>
                      <span className="text-[#85756F] font-medium text-sm sm:text-base md:text-lg leading-snug text-left">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-[#3370F7]/15 pointer-events-none">
                  <RotateCw className="w-16 h-16 sm:w-24 sm:h-24 animate-[spin_20s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

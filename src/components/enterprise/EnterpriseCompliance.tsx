"use client";

import { CheckCircle2, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

export function EnterpriseCompliance() {
  const points = [
    "Evidence that policy owners understand and can explain key controls",
    "Repeatable workflows aligned to internal governance frameworks",
    "Improved audit readiness with documented verification steps"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight">
              Support compliance and <br /> governance programs
            </h2>
            <p className="text-lg text-[#85756F] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Oral verification gives enterprises a concrete way to show that people responsible for policies and processes can actually reason through them.
            </p>
          </div>

          {/* Right: Graphic Box */}
          <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative bg-gradient-to-br from-[#EAF1FE] to-[#F0F7FF] rounded-3xl p-8 md:p-12 shadow-lg border border-blue-50/50">
              <div className="space-y-6 relative z-10">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-white rounded-full p-1 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                    </div>
                    <span className="text-[#85756F] font-medium text-base md:text-lg leading-snug">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Arrows */}
              <div className="absolute bottom-8 right-8 text-blue-200 opacity-50 pointer-events-none">
                <RotateCw className="w-24 h-24 animate-spin-slow" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

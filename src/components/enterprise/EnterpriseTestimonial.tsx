"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function EnterpriseTestimonial() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#EAF1FE] to-[#D0E6F8] relative overflow-hidden text-[#1F2A44]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#1F2A44]">
            What enterprise leaders are saying
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative text-center">
            
            <blockquote className="text-xl md:text-2xl font-medium text-[#1F2A44] leading-relaxed mb-8 relative z-10 italic">
              "We can now verify that people signing off on critical policies actually understand the risk and rationale behind them."
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#F58022] flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-orange-50">
                CRO
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-[#1F2A44]">Chief Risk Officer</div>
                <div className="text-sm font-medium text-[#85756F]">
                  Global enterprise (placeholder)
                </div>
              </div>
            </div>

            {/* Carousel Dots (Static for now) */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-[#F58022]" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function GovernmentTestimonial() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F0F4F8] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-[#3370F7]/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[min(90vw,500px)] h-[min(90vw,500px)] bg-[#F58022]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Voices</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44]">
            What mission leaders are saying
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-8 md:p-16 bg-white border border-slate-100 shadow-xl shadow-[#3370F7]/5 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58022] to-transparent" />

            <Quote
              className="w-12 h-12 text-[#F58022]/20 mx-auto mb-8"
              strokeWidth={1.5}
            />

            <blockquote className="font-serif text-2xl md:text-3xl font-medium text-[#1F2A44] leading-relaxed mb-10 relative z-10">
              &ldquo;When AI can generate procedures, Socratic Metric verifies human understanding. We can
              now confirm that the operators responsible for mission-critical systems genuinely
              comprehend them before authorization.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F58022] to-[#D16D1A] flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                MOL
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-[#1F2A44]">Mission Operations Lead</div>
                <div className="text-sm font-medium text-[#64748B] mt-1">
                  Government or aerospace agency (placeholder)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

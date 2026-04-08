"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function EducationTestimonial() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-[#1F2A44] overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-[#3370F7]/25 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[min(90vw,500px)] h-[min(90vw,500px)] bg-[#F58022]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 px-1">
          <span className="text-[#4C8FD6] font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            Voices
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            What educators are saying
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-white/5 text-[#1F2A44] text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F58022]/50 to-transparent" />

            <Quote
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#F58022]/30 absolute top-6 left-6 sm:top-8 sm:left-8"
              strokeWidth={1.25}
            />

            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed mb-8 relative z-10 italic px-2 sm:px-4 md:px-8 pt-4">
              &ldquo;Oral verification has transformed how we assess learning. Students can&apos;t just submit AI-written work—they have to truly understand and defend their ideas. It&apos;s brought back the confidence we need in our grading.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F58022] to-[#D16D1A] flex items-center justify-center text-white font-bold text-lg sm:text-2xl shadow-lg ring-4 ring-white/10">
                SM
              </div>
              <div className="text-center">
                <div className="font-bold text-base sm:text-lg text-white">Dr. Sarah Mitchell</div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wide mt-1 max-w-xs mx-auto leading-snug">
                  Professor of Computer Science, State University
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8 sm:mt-10" role="presentation">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-[#F58022]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

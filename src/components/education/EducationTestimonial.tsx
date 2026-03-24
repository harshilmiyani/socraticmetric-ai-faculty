"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function EducationTestimonial() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1F2A44] to-[#334E7C] relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3370F7]/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight">
            What educators are saying
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative text-[#1F2A44] text-center">
            <Quote className="w-12 h-12 text-[#F58022]/20 absolute top-8 left-8" />
            
            <blockquote className="text-xl md:text-2xl font-medium text-[#1F2A44] leading-relaxed mb-8 relative z-10 italic">
              "Oral verification has transformed how we assess learning. Students can't just submit AI-written work—they have to truly understand and defend their ideas. It's brought back the confidence we need in our grading."
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#F58022] flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-orange-100">
                SM
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-[#1F2A44]">Dr. Sarah Mitchell</div>
                <div className="text-sm font-medium text-[#85756F] uppercase tracking-wide">
                  Professor of Computer Science, State University
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

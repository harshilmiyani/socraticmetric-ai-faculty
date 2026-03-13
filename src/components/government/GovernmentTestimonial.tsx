"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function GovernmentTestimonial() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#4b6a94] to-[#7aa0c9] relative overflow-hidden text-slate-900">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#1F2A44]">
            What mission leaders are saying
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
              "We can now verify that operators truly understand the procedures they're responsible for, not just repeat what's on the page."
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#F58022] flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-orange-50 overflow-hidden">
                <svg className="w-full h-full text-white/90" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-[#1F2A44]">Mission Operations Lead</div>
                <div className="text-sm font-medium text-slate-500">
                  Government or aerospace agency (placeholder)
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

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";

export function ScienceChallengeSolution() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-slate-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1F2A44] mb-4">The Challenge</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              Traditional written assessments increasingly fail to measure authentic student learning. AI tools can now generate sophisticated written responses that bypass genuine comprehension entirely, making it nearly impossible to verify whether students actually understand material or simply submitted AI-generated content. Higher education needs assessment methods that capture real learning, not linguistic output.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-white text-[#3370F7] flex items-center justify-center mb-6 shadow-sm">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1F2A44] mb-4">The Solution</h2>
            <p className="text-[#64748B] text-lg leading-relaxed">
              The Socratic Metric addresses this challenge by requiring students to read questions aloud and respond orally. This approach is grounded in decades of cognitive neuroscience research demonstrating that oral engagement produces measurably better comprehension and retention than silent reading alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
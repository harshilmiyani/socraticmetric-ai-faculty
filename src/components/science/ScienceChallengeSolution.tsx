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
              Traditional written assessments and static documentation increasingly fail to measure authentic understanding. Generative AI tools can now produce sophisticated, flawless written responses that bypass genuine comprehension entirely, creating a dangerous false assurance of competence. It is nearly impossible to verify whether an individual actually understands the material or simply submitted AI-assisted output. Higher education and high-stakes environments need assessment methods that capture real learning, not linguistic output.
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
              Socratic Metric solves this by replacing silent written submissions with AI-moderated oral evaluation. This approach is grounded in decades of cognitive neuroscience research demonstrating that oral engagement—reading aloud and speaking answers—produces measurably stronger memory traces, deeper comprehension, and verifiable proof of learning than silent reading alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
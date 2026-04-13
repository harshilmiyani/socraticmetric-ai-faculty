"use client";

import { motion } from "framer-motion";

export function ScienceAIReplication() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">The Bottom Line</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Why AI Cannot Replicate This Process
          </h2>

          <div className="text-lg md:text-xl text-[#64748B] leading-relaxed space-y-6 text-left">
            <p>
              Current AI systems can generate fluent text without understanding. Humans speaking aloud must coordinate neural systems for motor planning, semantic retrieval, auditory monitoring, and real-time error correction.
            </p>
            <p>
              This temporally-anchored, multimodal, embodied process cannot be replicated by text generation alone. It requires biological cognition in action. The Socratic Metric measures not what students can have written for them, but what they can articulate, refine, and defend in their own voice.
            </p>
          </div>

          <div className="pt-12 border-t border-slate-100 text-left space-y-6">
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              Traditional assessment increasingly cannot distinguish between genuine student learning and AI-generated output. The Socratic Metric provides a solution grounded in neuroscience that makes learning visible, verifiable, and resistant to AI circumvention.
            </p>
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              By requiring oral engagement, the platform leverages fundamental principles of how the brain actually learns: through active production, multimodal encoding, and iterative feedback.
            </p>
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12 mt-12 border border-blue-100 text-center shadow-sm">
              <p className="font-serif text-2xl md:text-3xl font-bold text-[#3370F7] leading-relaxed">
                As cognitive research demonstrates, comprehension is not silent. It has a voice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
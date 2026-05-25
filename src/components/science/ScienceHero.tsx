"use client";

import { motion } from "framer-motion";

export function ScienceHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Executive Summary</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
            Oral Assessment in the <br />
            <span className="text-[#3370F7]">Age of AI</span>
          </h1>

          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            Socratic Metric™ addresses the profound challenge of AI-generated content by evaluating live cognition. By requiring users to read questions aloud and respond orally, the platform leverages decades of cognitive neuroscience research to measure genuine comprehension, not just written output.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
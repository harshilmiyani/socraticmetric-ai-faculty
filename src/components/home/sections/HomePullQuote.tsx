"use client";

import { motion } from "framer-motion";

export function HomePullQuote() {
  return (
    <section className="relative z-10 px-6 pt-12 pb-4 md:pt-16 md:pb-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex items-stretch gap-6 md:gap-8"
        >
          {/* Left visual accent: large quote mark and vertical line */}
          <div className="flex shrink-0 flex-col items-center">
            <span
              className="flex h-8 items-end font-serif text-6xl font-black leading-none text-[#3370F7]/30 md:h-12 md:text-[5.5rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="mt-4 w-[2px] flex-1 rounded-full bg-[#3370F7] opacity-80" />
          </div>

          {/* Quote text */}
          <div className="py-2 md:py-4">
            <h2 className="font-serif text-2xl italic leading-[1.4] text-[#1F2A44] sm:text-3xl md:text-4xl lg:text-[2.5rem] md:leading-[1.45]">
              &ldquo;When AI can write the document, Socratic Metric evaluates live cognition—verifying real understanding, not just polished output.&rdquo;
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

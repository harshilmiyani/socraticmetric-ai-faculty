"use client";

import { motion } from "framer-motion";

export function HomePullQuote() {
  return (
    <section className="relative z-10 px-6 pt-12 pb-4 md:pt-16 md:pb-6 overflow-hidden">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3370F7]/6 blur-[100px]" />
      </div>

      <div className="container relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-24px" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="mt-4 w-[2px] flex-1 rounded-full bg-gradient-to-b from-[#3370F7] via-[#3370F7]/70 to-[#3370F7]/10" />
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

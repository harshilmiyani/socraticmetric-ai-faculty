"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="bg-[#F1F5F9] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden relative selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      {/* Subtle glowing orb in background */}
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-2 lg:pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left flex-1 space-y-6 max-w-2xl lg:max-w-none w-full"
          >
            <div className="space-y-4">
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#85756F] uppercase shadow-sm backdrop-blur-sm">
                <Link href="/" className="hover:text-[#3370F7] transition-colors">Home</Link>
                <span className="text-slate-300" aria-hidden>/</span>
                <span className="text-[#3370F7]">Patents & Research</span>
              </div>
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3370F7] uppercase">
                Science
              </p>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.2]">
              The Science and IP Behind Socratic Metric
            </h1>

            <p className="text-lg md:text-xl text-[#85756F] leading-relaxed max-w-xl">
              Socratic Metric is backed by four issued US patents and
              grounded in peer-reviewed cognitive science. Our oral
              verification approach is legally protected and scientifically
              validated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <Link href="/request-demo" className="w-full sm:w-auto">
                <button className="relative group inline-flex h-14 w-full sm:w-auto min-h-[48px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/40 outline-none transition-all duration-300 hover:shadow-[#3370F7]/60 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20">
                  <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-10 text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                    Talk to our team
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative perspective-1000 flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] bg-white/50 backdrop-blur-3xl rounded-[clamp(1.15rem,4vw,1.5rem)] border border-white/60 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 transform transition-transform hover:scale-[1.02] duration-500 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <span className="text-[#85756F] font-semibold text-sm">
                [Patent certificate placeholder]
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

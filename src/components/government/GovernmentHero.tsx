"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function GovernmentHero() {
  return (
    <div className="bg-[#F1F5F9] pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden relative">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-2 lg:pt-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left flex-1 space-y-6 sm:space-y-8 max-w-2xl lg:max-w-none w-full"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#85756F] uppercase shadow-sm backdrop-blur-sm">
                <span className="text-[#3370F7]">Home</span>
                <span className="text-slate-300" aria-hidden>
                  /
                </span>
                <span>The new risk</span>
                <span className="text-slate-300" aria-hidden>
                  /
                </span>
                <span className="text-[#1F2A44]">Government</span>
              </div>
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3370F7] uppercase">
                Government
              </p>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.2]">
              When AI can generate the procedure, <br className="hidden sm:block" />
              can your operator execute under pressure?
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#85756F] max-w-xl leading-relaxed">
              AI-generated procedures, checklists, and reports can look correct while hiding gaps in real readiness.
              Oral verification helps you confirm that operators and teams can execute when the stakes are highest.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full pt-2">
              <Link href="#contact" className="w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  className="relative group inline-flex h-12 sm:h-14 w-full sm:w-auto min-h-[48px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/40 outline-none transition-all duration-300 hover:shadow-[#3370F7]/60 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 transition-opacity duration-500" />
                  <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 sm:px-10 text-sm sm:text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                    Talk to our team
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </button>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 sm:h-14 items-center justify-center sm:justify-start rounded-full border border-slate-200 bg-white px-6 text-sm sm:text-base font-semibold text-[#1F2A44] shadow-sm transition-all hover:border-[#3370F7]/30 hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] w-full sm:w-auto"
              >
                See how oral verification works
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative perspective-1000 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] text-xs font-semibold tracking-wide shadow-sm text-center"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]" />
              </span>
              Pre-mission oral check preview
            </motion.div>

            <div className="w-full max-w-full mx-auto transform transition-transform hover:scale-[1.02] duration-500 rounded-[clamp(1.15rem,4vw,1.5rem)] overflow-hidden bg-transparent [isolation:isolate]">
              <iframe
                src="/animation/hero-government-voice.html"
                className="w-full block border-0 min-h-[620px] h-[min(78vh,820px)] sm:min-h-[600px] md:min-h-[640px] rounded-[clamp(1.15rem,4vw,1.5rem)]"
                title="SocraticMetric government pre-mission oral check — live preview"
                scrolling="no"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

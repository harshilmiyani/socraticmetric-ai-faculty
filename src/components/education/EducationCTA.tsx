"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function EducationCTA() {
  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 lg:py-28 bg-[#1F2A44] overflow-hidden text-center"
    >
      <BackgroundBeams />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] bg-[#3370F7]/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/85" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3370F7]/50 to-transparent opacity-80" />

          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight px-1">
            Ready to protect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58022] to-[#FF9D4D]">
              learning integrity?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium px-1">
            Partner with us to design oral verification workflows that fit your programs, faculty, and accreditation requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center pt-2">
            <Link href="#contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="relative group inline-flex h-14 w-full sm:w-auto min-h-[48px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/35 outline-none transition-all duration-300 hover:shadow-[#3370F7]/55 hover:scale-[1.02] active:scale-[0.98] ring-1 ring-[#3370F7]/25"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 sm:px-10 text-sm sm:text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </button>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 text-slate-200 hover:text-white text-sm sm:text-base font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors py-3 sm:py-0"
            >
              <Download className="w-4 h-4 shrink-0 opacity-80" />
              Download the Higher Education overview
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

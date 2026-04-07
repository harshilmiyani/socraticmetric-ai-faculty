"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export function BlogPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9] text-[#1F2A44] overflow-x-hidden font-sans selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function BlogHero() {
  return (
    <div className="relative pt-24 pb-10 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-[#85756F] uppercase shadow-sm backdrop-blur-sm">
            <Link href="/" className="text-[#3370F7] hover:text-[#4C8FD6] transition-colors">
              Home
            </Link>
            <span className="text-slate-300" aria-hidden>
              /
            </span>
            <span className="text-[#1F2A44]">Blog</span>
          </div>

          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3370F7] uppercase">Insights</p>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
            Ideas on assessment, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022]">
              AI-era learning
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#85756F] max-w-2xl mx-auto leading-relaxed">
            Exploring oral verification, cognitive science, and what proof of understanding means when written output is no longer enough.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

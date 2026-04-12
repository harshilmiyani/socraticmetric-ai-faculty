"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";

export function WhyItMattersHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 max-w-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Why Socratic Metric Matters</span>
              <div className="h-px w-8 bg-[#3370F7]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
              Verify Real Understanding When <br />
              <span className="text-[#3370F7]">AI Can Write It</span>
            </h1>

            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              Socratic Metric is the oral verification platform that confirms people can explain, reason through, and defend high-stakes work. Don't let AI-generated documentation hide comprehension gaps—get defensible proof before grades, decisions, or operations go live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <button className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:bg-[#4C8FD6] hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                  Talk to our team
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000 flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] bg-white rounded-2xl border border-slate-100 flex items-center justify-center shadow-2xl shadow-[#3370F7]/10 transform transition-transform hover:scale-[1.02] duration-500">
              <span className="text-[#64748B] font-semibold text-sm">
                [Video/Image Placeholder]
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

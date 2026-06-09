"use client";

import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { motion } from "framer-motion";

export function EducationHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-transparent">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              Education
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
            When AI Can Write the Essay,{" "}
            <span className="text-[#3370F7]">Can Your Student Defend It?</span>
          </h1>

          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            In an era where AI-written assignments create a false assurance of competence, Socratic
            Metric™ verifies authentic learning through AI-moderated oral assessment. Confirm that
            your students can articulate, refine, and defend their reasoning aloud in real time.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:-translate-y-0.5 hover:bg-[#4C8FD6] hover:shadow-xl active:scale-95 sm:w-auto"
            >
              Talk to our team
            </Link>
            <Link
              href="#platform-walkthrough"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-[#1F2A44] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#3370F7]/30 hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] active:scale-95 sm:w-auto"
            >
              See how it works
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#1F2A44] text-left overflow-hidden">
      <BackgroundBeams />
      
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/80 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#3370F7]/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#F58022]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-8 sm:p-12 md:p-16 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden"
        >
          {/* Subtle top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

          {/* Left Text */}
          <div className="flex-1 space-y-4">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Ready to verify true <br className="hidden lg:block" />
              understanding?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">
              Stop relying on documents. Start evaluating live cognition.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#3370F7] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95"
            >
              Book a demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

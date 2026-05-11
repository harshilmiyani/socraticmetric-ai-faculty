"use client";

import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const benefits = [
    "Deploy instantly (LMS & Enterprise Integrated)",
    "Audit-ready records (Identity Verified)",
    "Adaptive logic (Patented Socratic AI)",
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 bg-[#1F2A44] text-center overflow-hidden">
      <BackgroundBeams />
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/80 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3370F7]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto space-y-8 md:space-y-10 p-8 sm:p-12 md:p-20 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(51,112,247,0.15)] ring-1 ring-white/5 relative overflow-hidden"
        >
          
          {/* Inner subtle glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#F58022] to-transparent opacity-60" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F58022]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3370F7]/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Verify Understanding.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58022] to-[#FF9D4D]">Not Documents.</span>
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium mb-10">
              In the AI era, confidence must be earned in real time. See how our patented AI system transforms compliance, learning, and operational readiness.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm md:text-base lg:text-lg text-slate-200">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#3370F7]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="relative group inline-flex h-16 w-full min-w-[240px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/40 outline-none transition-all duration-300 hover:shadow-[#3370F7]/60 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20 sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-3 rounded-full bg-[#3370F7] px-12 text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Request a Demo <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

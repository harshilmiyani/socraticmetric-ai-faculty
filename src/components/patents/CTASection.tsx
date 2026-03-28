"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-r from-[#A0C4BA] via-[#659BD4] to-[#3370F7]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[40px] leading-tight font-bold text-white font-playfair"
        >
          Built on Science. Protected by Law.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/10 border border-white flex flex-col items-center max-w-3xl mx-auto"
        >
          <p className="text-[#1F2A44] text-[20px] md:text-2xl font-bold leading-relaxed mb-10 text-center">
            The only oral verification platform backed by four US patents and
            decades of cognitive research.
          </p>

          <Link href="/request-demo">
            <button className="relative group inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#F58022]/40 outline-none transition-all duration-300 hover:shadow-[#F58022]/60 hover:scale-[1.02] active:scale-95 ring-1 ring-[#F58022]/20">
              <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFE5D1_0%,#F58022_50%,#FFE5D1_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#F58022] px-10 text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#F58022] group-hover:to-[#f19e59]">
                Request a Demo
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

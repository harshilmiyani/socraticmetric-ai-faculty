"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden px-6 selection:bg-orange-100 selection:text-[#1F2A44]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#EAF1FE] blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#F58022]/15 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            translateY: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-[#3370F7]/10 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 bg-white/60 p-6 rounded-2xl shadow-sm border border-slate-200/50 backdrop-blur-md"
        >
          <Image
            src="/img/logos/sm_nav_logo.svg"
            alt="Socratic Metric"
            width={300}
            height={90}
            className="w-auto h-14 md:h-16"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#F58022] animate-pulse" />
          <span className="text-sm font-bold text-[#3370F7] tracking-wider uppercase">
            We&apos;re building something great
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1F2A44] mb-8 leading-[1.1]"
        >
          Something amazing <br className="hidden md:block" />
          is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2A44] to-[#F58022]">coming soon</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Our platform is under construction. We&apos;re working hard to bring you AI-era cognitive verification that truly matters.
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center gap-3 mt-4"
        >
          <div className="w-16 h-1.5 rounded-full bg-[#3370F7]/20" />
          <div className="w-8 h-1.5 rounded-full bg-[#F58022]/40" />
          <div className="w-4 h-1.5 rounded-full bg-[#1F2A44]/20" />
        </motion.div>
      </motion.div>
    </div>
  );
}

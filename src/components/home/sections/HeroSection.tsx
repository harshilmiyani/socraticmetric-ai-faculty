"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Cover } from "@/components/ui/cover";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";

export function HeroSection() {
  const [visualIframeHeightPx, setVisualIframeHeightPx] = useState<number | null>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; height?: number } | null;
      if (data?.type === "sm-home-visual1" && typeof data.height === "number" && data.height > 0) {
        setVisualIframeHeightPx(Math.min(Math.max(Math.round(data.height), 180), 2000));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#F1F5F9] pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-hidden relative">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Moving Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3370F7]/15 rounded-full blur-[120px]" 
        />
        
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#F58022]/10 rounded-full blur-[120px]" 
        />

        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-[20%] left-[40%] w-[500px] h-[500px] bg-[#4C8FD6]/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-2 lg:pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-start text-left flex-1 space-y-6 max-w-2xl lg:max-w-none w-full"
          >

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-[#1F2A44] leading-[1.1] lg:leading-[1.05]">
              Written Output is no Longer Proof of <br className="hidden sm:block" />
              <Cover className="mt-2 sm:mt-3">Understanding.</Cover>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#64748B] leading-relaxed max-w-xl font-medium">
              Socratic Metric™ verifies whether your people can articulate, defend, and reason — in real time, simulating real-world high-stakes scenarios.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-6">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="relative group inline-flex h-14 w-full min-w-[220px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-xl shadow-[#3370F7]/30 outline-none transition-all duration-300 hover:shadow-2xl hover:shadow-[#3370F7]/50 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20 sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Request a Demo <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-[#1F2A44] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-95 sm:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Animation */}
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
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-green-700 text-xs font-bold tracking-wide shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 "></span>
              </span>
              AI-Era Cognitive Verification
            </motion.div>

            <div className="w-full transform transition-transform hover:scale-[1.02] duration-500">
              <iframe
                src="/animation/visual-1-live-session.html"
                className="block w-full border-0 bg-transparent"
                style={{
                  height: visualIframeHeightPx != null ? `${visualIframeHeightPx}px` : undefined,
                  minHeight: visualIframeHeightPx == null ? "min(48vh, 440px)" : undefined,
                }}
                title="SocraticMetric Live Session Simulation"
                scrolling="no"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

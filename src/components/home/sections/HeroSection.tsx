"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

import { Highlight } from "@/components/ui/HeroHighlight";
import { ModernBackground } from "@/components/ui/ModernBackground";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Building, GraduationCap, Shield } from "lucide-react";

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const trustedItems = [
    { id: 1, name: "Higher Education", designation: "Top Tier Universities", image: <GraduationCap /> },
    { id: 2, name: "Enterprise", designation: "Fortune 500 Companies", image: <Building /> },
    { id: 3, name: "Government", designation: "Defense & Aerospace", image: <Shield /> },
  ];

  return (
    <ModernBackground className="py-32 md:py-48 selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#1F2A44"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FE] border border-blue-100 text-[#3370F7] text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]"></span>
            </span>
            AI-Era Cognitive Verification
          </motion.div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1F2A44] leading-tight">
            Written Output Is No Longer <br className="hidden md:block" />
            Proof of <Highlight className="text-white">Understanding.</Highlight>
          </h1>
          
          <p className="text-lg md:text-xl text-[#85756F] max-w-3xl mx-auto leading-relaxed">
            Socratic Metric™ verifies whether your people can <br className="hidden md:block" />
            articulate, defend, and reason — in real time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-6 pb-12">
            <Link href="#contact">
              <Button 
                size="lg" 
                className="group relative overflow-hidden w-full sm:w-auto text-base px-8 h-14 rounded-full bg-[#F58022] text-white shadow-xl shadow-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-orange-500/20"
              >
                 <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                    Request a Demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                 </span>
                 {/* Shimmer Effect */}
                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                 {/* Glow Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border-[#EAF1FE] text-[#85756F] font-medium shadow-sm hover:shadow-md transition-all">
                <Play className="mr-2 h-4 w-4 fill-current" /> See How it Works
              </Button>
            </Link>
          </div>

          {/* Embedded Visual Animation */}
          <div className="w-full max-w-[680px] mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#3370F7]/10 border border-[#EAF1FE] bg-white">
            <iframe 
              src="/animation/visual-1-live-session.html" 
              className="w-full h-[580px] sm:h-[520px] md:h-[500px] border-none"
              title="SocraticMetric Live Session Simulation"
              scrolling="no" 
            />
          </div>

          <div className="pt-16 md:pt-24 w-full border-t border-[#F5F5F5]/50 mt-12 relative flex flex-col items-center justify-center">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">Trusted By</div>
            <div className="flex flex-row items-center justify-center mb-4 w-full pt-4">
              <AnimatedTooltip items={trustedItems} />
            </div>
            <p className="text-xs md:text-sm text-[#85756F] font-medium tracking-wide opacity-80 mt-2">
              3,000+ simultaneous users | 4 U.S. AI Patents Issued
            </p>
          </div>
        </motion.div>
      </div>
    </ModernBackground>
  );
}

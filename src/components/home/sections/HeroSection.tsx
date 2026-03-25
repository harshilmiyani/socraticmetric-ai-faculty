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
    <div className="bg-white pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32 selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-2 lg:pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-start text-left flex-1 space-y-6 max-w-2xl lg:max-w-none w-full"
          >

            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.1]">
            Written Output is no Longer Proof of <br className="hidden sm:block" />
              <Highlight className="text-white mt-2 inline-block"> Understanding.</Highlight>
            </h1>
            
            <p className="text-lg md:text-xl text-[#85756F] leading-relaxed max-w-xl">
              Socratic Metric™ verifies whether your people can articulate, defend, and reason — in real time, simulating real-world high-stakes scenarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <Link href="#contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden w-full text-base px-8 h-14 rounded-full bg-[#F58022] text-white shadow-xl shadow-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-orange-500/20"
                >
                   <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide">
                      Request a Demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                   </span>
                   <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex flex-col items-start gap-4 border-t border-[#EAF1FE] w-full max-w-md mt-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trusted By</p>
              <div className="flex flex-row items-center gap-4">
                <AnimatedTooltip items={trustedItems} />
                <div className="w-px h-8 bg-slate-200 mx-2 hidden sm:block"></div>
                <p className="text-xs text-[#85756F] font-medium leading-tight hidden sm:block">
                  3,000+ active users <br/> 4 U.S. AI Patents
                </p>
              </div>
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
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AI-Era Cognitive Verification
            </motion.div>

            <div className="w-full overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <iframe 
                src="/animation/visual-1-live-session.html" 
                className="w-full h-[580px] sm:h-[500px] md:h-[520px] border-none"
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

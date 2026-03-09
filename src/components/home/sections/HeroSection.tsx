"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <HeroHighlight containerClassName="h-auto py-32 md:py-48 overflow-hidden bg-white selection:bg-orange-100 selection:text-[#0F2C4C]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0F2C4C"
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-Era Cognitive Verification
          </motion.div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F2C4C] leading-tight">
            Written Output Is No Longer <br className="hidden md:block" />
            Proof of <Highlight className="text-white">Understanding.</Highlight>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Socratic Metric™ verifies whether your people can <br className="hidden md:block" />
            articulate, defend, and reason — in real time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-6">
            <Link href="#contact">
              <Button 
                size="lg" 
                className="group relative overflow-hidden w-full sm:w-auto text-base px-8 h-14 rounded-full bg-[#FF6B35] text-white shadow-xl shadow-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-orange-500/20"
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border-slate-200 text-slate-700 font-medium shadow-sm hover:shadow-md transition-all">
                <Play className="mr-2 h-4 w-4 fill-current" /> See How it Works
              </Button>
            </Link>
          </div>

          <div className="pt-16 md:pt-24 w-full border-t border-slate-100/50 mt-12 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">Trusted By</div>
            <p className="text-xs md:text-sm text-slate-500 font-medium tracking-wide opacity-80">
              3,000+ simultaneous users | 4 U.S. AI Patents Issued | Trusted in Education, Enterprise & Government
            </p>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}

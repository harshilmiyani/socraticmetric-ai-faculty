"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Mic, Brain, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrySelector } from "@/components/home/IndustrySelector";

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden">
      {/* Animated Background Mesh Gradients - Optimized with will-change-transform */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite] will-change-transform opacity-70"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite_2s] will-change-transform opacity-70"></div>
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite_4s] will-change-transform opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full mix-blend-multiply filter blur-[96px] animate-pulse will-change-opacity"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Floating Elements (Decorative) */}
        <div className="absolute top-10 left-10 hidden lg:block animate-[float_6s_ease-in-out_infinite]">
            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full"><Mic className="h-5 w-5 text-indigo-600" /></div>
                <div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
            </div>
        </div>
         <div className="absolute bottom-20 right-10 hidden lg:block animate-[float_8s_ease-in-out_infinite_1s]">
            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full"><Brain className="h-5 w-5 text-purple-600" /></div>
                <span className="text-xs font-bold text-slate-600">Analysis Complete</span>
            </div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8"
        >
          <IndustrySelector />

          <motion.h1 variants={fadeIn} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            Assessment as a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient">Conversation</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Not a test, but a dialogue. Evaluate authenticity, comprehension, and verbal reasoning through spoken responses.
            Students read, record, and refine—demonstrating what they know in their own voice.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
            <Link href="#contact">
              <Button size="lg" className="group relative overflow-hidden w-full sm:w-auto text-base px-8 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                 <span className="relative z-10 flex items-center gap-2">
                    Book a Demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                 </span>
                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full bg-white/80 hover:bg-white border-slate-200">
                <Play className="mr-2 h-4 w-4 fill-current" /> See How it Works
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

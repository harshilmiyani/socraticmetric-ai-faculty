"use client";

import { CheckCircle2, Play } from "lucide-react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { Cover } from "@/components/ui/cover";

export function RequestDemoHero() {
  const features = [
    "Verify authentic comprehension beyond AI-generated content",
    "Create defensible evidence of real understanding for high-stakes decisions",
    "Standardize oral assessments and reviews at scale"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F1F5F9]">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#EAF1FE] blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#3370F7]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#3370F7] text-xs font-bold tracking-widest uppercase shadow-sm"
              >
                Why Socratic Metric Matters
              </motion.div>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#1F2A44] leading-[1.2]">
              See how Socratic Metric verifies real <Cover className="mt-1">understanding.</Cover>
            </h1>

            <p className="text-lg md:text-xl text-[#85756F] max-w-xl leading-relaxed font-medium">
              Socratic Metric turns high-stakes documentation into oral verification. Our platform helps teams confirm that people can explain, reason through, and defend the work they sign off on.
            </p>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4 pt-2"
            >
              {features.map((feature, index) => (
                <motion.div variants={fadeIn} key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-white rounded-full p-0.5 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                  </div>
                  <span className="text-[#85756F] font-medium leading-relaxed group-hover:text-[#1F2A44] transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Interactive Glass Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
            className="relative perspective-1000 group"
          >
            {/* Ambient glows behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3370F7]/40 to-[#F58022]/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            
            {/* The Glass Card */}
            <div className="aspect-[4/3] w-full bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white ring-1 ring-black/5 relative overflow-hidden flex flex-col group-hover:shadow-[#3370F7]/10 transition-all duration-500 transform group-hover:-translate-y-1">
               
               {/* Internal Sparkles Effect */}
               <div className="absolute inset-0 z-0">
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={2}
                    particleDensity={80}
                    className="w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-700"
                    particleColor="#3370F7"
                  />
               </div>

               {/* MacOS Style Header */}
               <div className="h-14 bg-white/40 border-b border-white/60 flex items-center px-6 relative z-10 backdrop-blur-md">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors duration-300"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors duration-300 delay-75"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors duration-300 delay-150"></div>
                 </div>
                 <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white text-xs font-semibold text-[#85756F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3370F7] animate-pulse"></span>
                    Live Simulation
                 </div>
               </div>

               {/* Card Body */}
               <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10 bg-gradient-to-b from-transparent to-white/40">
                 
                 {/* Floating Play Button */}
                 <div className="relative mb-8 group/play cursor-pointer">
                    <div className="absolute inset-0 bg-[#3370F7] rounded-full blur-xl opacity-30 group-hover/play:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                    
                    <button className="relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full p-[2px] shadow-xl shadow-[#3370F7]/20 outline-none transition-all duration-300 hover:scale-[1.05] active:scale-95">
                      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 transition-opacity duration-500" />
                      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-white transition-all duration-300 group-hover/play:bg-slate-50">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#3370F7] to-[#4C8FD6] flex items-center justify-center pl-2 shadow-inner">
                          <Play className="w-8 h-8 text-white fill-current drop-shadow-md" />
                        </div>
                      </span>
                    </button>
                 </div>

                 <h3 className="text-[#1F2A44] font-bold text-2xl mb-3 text-center tracking-tight">Interactive Platform Demo</h3>
                 <p className="text-[#85756F] text-base text-center max-w-sm font-medium">
                   Discover how AI-moderated dialogue can transform your high-stakes verification process.
                 </p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

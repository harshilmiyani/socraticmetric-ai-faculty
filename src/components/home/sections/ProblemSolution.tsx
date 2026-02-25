"use client";

import { CheckCircle, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section id="features" className="py-24 bg-white relative">
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
       
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F2C4C] leading-tight">
              The Problem: <span className="text-slate-400">AI writes the essay.</span> <br/>
              The Solution: <span className="text-[#FF6B35]">You speak the answer.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Traditional text-based assignments are obsolete. ChatGPT can produce a B+ essay in seconds. 
              SocraticMetric restores the integrity of assessment by requiring students to verbally articulate their knowledge in real-time.
            </p>
            
            <div className="space-y-4">
              {[
                "Eliminates AI plagiarism via real-time speech",
                "Cognitive Science: Speaking improves retention",
                "Fair Grading: Accent and tone agnostic",
                "Encourages iterative improvement (Mastery Learning)"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative blobs behind */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0F2C4C]/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
            
            {/* Main Card */}
            <div className="relative rounded-2xl bg-[#0F2C4C] p-3 shadow-2xl shadow-[#0F2C4C]/20 rotate-1 hover:rotate-0 transition-all duration-500 ring-1 ring-slate-900/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C4C]/50 to-[#1a3b5c]/50 rounded-2xl pointer-events-none"></div>
              
              <div className="relative rounded-xl bg-[#0F2C4C] border border-[#1a3b5c] p-6 md:p-8 space-y-6 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#1a3b5c] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#1a3b5c] border border-[#1a3b5c]">Rec</span>
                    <span>Assignment: Ethics in AI</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="bg-[#1a3b5c]/50 p-6 rounded-lg border border-[#1a3b5c] backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-3">
                       <p className="text-[#FF6B35] text-xs font-bold tracking-wider uppercase">Question 1 of 5</p>
                       <span className="text-slate-400 text-xs">High Stakes Mode</span>
                    </div>
                    <p className="text-white text-xl font-serif leading-relaxed">"Explain the utilitarian argument against autonomous weapons systems, citing specific examples from the reading."</p>
                  </div>
                  
                  {/* Audio Waveform Visualization (Mock) */}
                  <div className="flex items-center justify-center gap-1 h-12">
                    {[...Array(20)].map((_, i) => (
                       <motion.div 
                         key={i}
                         animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                         transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                         className="w-1 bg-[#FF6B35] rounded-full"
                       />
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                     <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-b from-red-500 to-red-600 shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                            <Mic className="h-8 w-8 text-white fill-current" />
                        </div>
                     </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-slate-400 text-sm font-mono">00:24 / 02:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating feedback card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 w-64 bg-white/95 backdrop-blur rounded-lg p-4 shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-[#FF6B35]" />
                <span className="text-xs font-bold text-[#FF6B35] uppercase">AI Feedback</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Great point on accountability. However, you missed the distinction between 'human-in-the-loop' vs 'human-on-the-loop'..."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { motion } from "framer-motion";
import { Award, FileText, Calendar } from "lucide-react";

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const patents = [
    {
      title: "Systems and methods for adaptive, AI-driven oral assessment of knowledge",
      id: "11,990,139",
      date: "May 21, 2024",
    },
    {
      title: "Systems and methods for evaluating subject knowledge using interactive, AI-based dialogue",
      id: "12,165,655",
      date: "December 10, 2024",
    },
    {
      title: "Systems and methods for real-time assessment of knowledge through iterative, AI-mediated questioning",
      id: "12,211,511",
      date: "February 4, 2025",
    },
    {
      title: "Artificial Intelligence System that generates questions and evaluates oral readings and responses",
      id: "12,586,589",
      date: "March 24, 2026",
    },
  ];

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle glowing orb in background */}
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 max-w-2xl"
          >
            <div className="mb-4">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
                Science
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
              The Science and IP Behind <br />
              <span className="text-[#3370F7]">Socratic Metric</span>
            </h1>

            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
              Socratic Metric is backed by four issued US patents and
              grounded in peer-reviewed cognitive science. Our oral
              verification approach is legally protected and scientifically
              validated.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:-translate-y-0.5 hover:bg-[#4C8FD6] hover:shadow-xl active:scale-95 sm:w-auto"
              >
                Talk to our team
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Patent List Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000 flex flex-col items-center w-full group"
          >
            {/* Animated Glowing Gradient Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3370F7] via-[#F58022] to-[#3370F7] rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 bg-[length:200%_auto] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            
            {/* Dark Premium Widget Container */}
            <div className="w-full bg-[#1F2A44]/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-[#3370F7]/30 transform transition-transform duration-500 overflow-hidden flex flex-col relative z-10">
              
              {/* Inner glowing background effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3370F7]/10 via-transparent to-[#F58022]/10 pointer-events-none" />

              {/* Header */}
              <div className="bg-white/10 border-b border-white/10 px-6 py-5 flex items-center justify-between relative z-10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3370F7] to-[#4C8FD6] text-white flex items-center justify-center shadow-lg shadow-[#3370F7]/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white text-lg tracking-wide">USPTO Issued Patents</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"></div>
                </div>
              </div>
              
              {/* List */}
              <div className="p-6 flex flex-col gap-4 relative z-10">
                {patents.map((patent, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-sm flex flex-col gap-3 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#3370F7]/20 hover:-translate-y-0.5">
                    {/* Hover accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#3370F7] to-[#F58022] opacity-70" />
                    
                    <h4 className="text-[15px] font-bold text-white leading-snug pl-3">
                      {patent.title}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pl-3 mt-1">
                      <div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <FileText className="w-4 h-4 text-[#F58022]" />
                        <span className="font-medium">Patent No: <span className="font-bold text-white">{patent.id}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <Calendar className="w-4 h-4 text-[#3370F7]" />
                        <span className="font-medium">Issue Date: <span className="text-white">{patent.date}</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
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
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
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
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Science</span>
              <div className="h-px w-8 bg-[#3370F7]" />
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/request-demo">
                <button className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:bg-[#4C8FD6] hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                  Talk to our team
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Patent List Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000 flex flex-col items-center"
          >
            <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-[#3370F7]/10 transform transition-transform hover:scale-[1.02] duration-500 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#3370F7] flex items-center justify-center shadow-sm border border-blue-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#1F2A44] text-lg">USPTO Issued Patents</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
              </div>
              
              {/* List */}
              <div className="p-6 flex flex-col gap-4 bg-[#F8FAFC]">
                {patents.map((patent, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 relative overflow-hidden group hover:border-[#3370F7]/20 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#EAF1FE] group-hover:bg-[#3370F7] transition-colors duration-300" />
                    <h4 className="text-[15px] font-bold text-[#1F2A44] leading-snug pl-3">
                      {patent.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pl-3 mt-1">
                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <FileText className="w-4 h-4 text-[#F58022]" />
                        <span className="font-medium">Patent No: <span className="font-bold text-[#1F2A44]">{patent.id}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <Calendar className="w-4 h-4 text-[#3370F7]" />
                        <span className="font-medium">Issue Date: <span className="text-[#1F2A44]">{patent.date}</span></span>
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

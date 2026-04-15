"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, FileText, ShieldCheck } from "lucide-react";

export function PatentListSection() {
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
    <section className="relative py-24 md:py-32 bg-[#1F2A44] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[min(100vw,800px)] h-[min(100vw,800px)] bg-[#3370F7]/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[min(90vw,600px)] h-[min(90vw,600px)] bg-[#F58022]/15 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Core Intellectual Property
            </span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight tracking-tight">
            Issued US Patents
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our foundational methodology for AI-driven oral verification is strictly protected by the United States Patent and Trademark Office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3370F7] to-[#F58022] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-10 flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#3370F7] transition-all duration-500 shadow-lg">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug group-hover:text-blue-100 transition-colors">
                  {patent.title}
                </h3>
              </div>

              <div className="space-y-5 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-2xl">
                  <div className="p-2 bg-[#F58022]/20 rounded-lg shrink-0">
                    <FileText className="w-6 h-6 text-[#F58022]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Patent Number</span>
                    <span className="font-bold text-2xl text-white tracking-tight">{patent.id}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-300 px-4">
                  <Calendar className="w-5 h-5 text-[#3370F7] shrink-0" />
                  <span className="font-medium text-lg">Issue Date: <strong className="text-white">{patent.date}</strong></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

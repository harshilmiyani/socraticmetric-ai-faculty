"use client";

import React from "react";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      value: "4",
      description: "AI patents\nissued or filed",
    },
    {
      value: "< 2 years",
      description: "From submission to\nissuance",
    },
    {
      value: "2024–2026",
      description: "Patent date range",
    },
    {
      value: "US",
      description: "Jurisdiction",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center flex flex-col justify-center min-h-[200px] shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#3370F7] to-[#4C8FD6] tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-medium text-[#64748B] whitespace-pre-line leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

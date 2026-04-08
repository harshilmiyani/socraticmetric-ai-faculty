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
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#3370F7] rounded-[20px] p-8 text-center text-white flex flex-col justify-center min-h-[160px] shadow-lg shadow-[#3370F7]/20 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3370F7]/30"
            >
              <div className="text-3xl lg:text-4xl font-extrabold mb-2 font-playfair">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base font-semibold whitespace-pre-line leading-snug">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

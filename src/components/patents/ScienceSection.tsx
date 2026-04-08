"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, BadgeCheck, TrendingUp } from "lucide-react";

export function ScienceSection() {
  const cards = [
    {
      icon: ArrowUpDown,
      title: "Depth of\nProcessing",
      description:
        "Production and generation require more cognitive effort than passive reading",
    },
    {
      icon: BadgeCheck,
      title: "Distinctiveness",
      description:
        "Self-generated spoken content stands out in memory in ways passive reading cannot replicate",
    },
    {
      icon: TrendingUp,
      title: "Practical Application",
      description:
        "Verbalizing responses improves learning outcomes and builds stronger memory traces",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-start lg:items-center lg:text-center text-left max-w-3xl lg:mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3370F7]/10 border border-[#3370F7]/20 text-[#3370F7] text-xs font-semibold tracking-wide shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]" />
            </span>
            Core Principles
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1F2A44] mb-8 font-playfair leading-tight">
            The Science Behind Socratic Metric
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3370F7]/5 flex flex-col items-start min-h-[240px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F58022]/10 text-[#F58022] flex items-center justify-center mb-6 group-hover:bg-[#F58022] group-hover:text-white transition-colors duration-500">
                  <Icon className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#3B485A] mb-3 whitespace-pre-line leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#85756F] font-medium text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-b from-orange-50/50 to-[#EAF1FE]/80 mx-auto max-w-4xl rounded-[24px] p-8 md:p-10 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-[#1F2A44] max-w-2xl mx-auto leading-tight">
            Active learning methods lead to better retention and understanding
            than reading alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              Core Principles
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
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
                className="group bg-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-blue-200 flex flex-col items-start min-h-[240px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F58022]/10 text-[#F58022] flex items-center justify-center mb-6 group-hover:bg-[#F58022] group-hover:text-white transition-colors duration-500">
                  <Icon className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-3 whitespace-pre-line leading-tight">
                  {card.title}
                </h3>
                <p className="text-[#64748B] font-medium text-base leading-relaxed">
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
          className="bg-blue-50 border border-blue-100 mx-auto max-w-4xl rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl font-medium text-[#1F2A44] max-w-2xl mx-auto leading-relaxed">
            Active learning methods lead to better retention and understanding
            than reading alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

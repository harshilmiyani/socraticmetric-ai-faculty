"use client";

import React from "react";
import { motion } from "framer-motion";

export function CognitiveScienceSection() {
  const roles = [
    "Training and enablement programs",
    "Policy and governance functions",
    "High-stakes assessment coordinators",
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 flex flex-col items-start">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#F58022] font-bold text-xs tracking-widest uppercase">
              Cognitive Science
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1F2A44] mb-6 font-serif leading-tight">
            Why Oral Verification Works
          </h2>
          <p className="text-[#64748B] text-lg lg:text-xl leading-relaxed">
            Grounded in peer-reviewed research on how speaking aloud and active
            engagement produce deeper understanding and more reliable evidence
            of real learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Research Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md relative h-full flex flex-col hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#1F2A44] mb-8 leading-snug">
              Bailey et al. (2021),<br />
              Brain and Cognition
            </h3>
            
            <p className="text-[#1F2A44] font-medium text-lg leading-relaxed mb-6">
              Research question: How does spoken articulation affect memory
              encoding compared to silent reading?
            </p>

            <p className="text-[#64748B] text-base leading-relaxed mb-12">
              fMRI method note: Neuroimaging shows distinct activation
              patterns during production vs. passive reception.
            </p>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full justify-between space-y-12"
          >
            <div className="space-y-6 pt-4">
              {roles.map((role, idx) => (
                <div key={idx} className="flex items-center space-x-5">
                  <div className="w-8 h-8 rounded-full bg-[#F58022] shrink-0 shadow-lg shadow-[#F58022]/20" />
                  <span className="text-[#1F2A44] font-medium text-lg">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 md:p-10 shadow-sm border border-blue-100">
              <p className="text-[#3370F7] text-2xl font-serif font-medium leading-relaxed">
                The production effect: saying it out loud makes it harder to fake.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

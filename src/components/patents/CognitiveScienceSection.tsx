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
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F58022]/10 border border-[#F58022]/20 text-[#F58022] text-xs font-semibold tracking-wide shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F58022] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F58022]" />
            </span>
            Cognitive Science
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[50px] font-bold text-[#1F2A44] mb-6 font-playfair leading-tight">
            Why Oral Verification Works
          </h2>
          <p className="text-[#85756F] text-lg lg:text-xl leading-relaxed font-semibold">
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
            className="group bg-white border border-slate-200/60 rounded-[clamp(1.15rem,4vw,1.5rem)] p-8 md:p-12 shadow-sm relative h-full flex flex-col hover:shadow-2xl hover:border-[#3370F7]/20 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF1FE] rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#1F2A44] mb-8 leading-snug">
              Bailey et al. (2021),<br />
              Brain and Cognition
            </h3>
            
            <p className="text-[#85756F] font-semibold text-lg leading-relaxed mb-10">
              Research question: How does spoken articulation affect memory
              encoding compared to silent reading?
            </p>

            <p className="text-[#85756F] text-base leading-relaxed mb-12">
              fMRI method note: Neuroimaging shows distinct activation
              patterns during production vs. passive reception.
            </p>

            <div className="mt-auto pt-4">
              <span className="inline-block bg-[#eff4ff] text-[#85756F] text-xs font-semibold px-5 py-2.5 rounded-full">
                [Citation link placeholder]
              </span>
            </div>
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
                  <div className="w-8 h-8 rounded-full bg-[#F58022] shrink-0" />
                  <span className="text-[#85756F] font-semibold text-lg">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#eff4ff] rounded-[24px] p-8 md:p-10 shadow-sm">
              <p className="text-[#85756F] text-2xl font-semibold leading-relaxed">
                The production effect: saying it out loud makes it harder to fake.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

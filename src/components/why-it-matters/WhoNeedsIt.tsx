"use client";

import { motion } from "framer-motion";

export function WhoNeedsIt() {
  const roles = [
    "Academic leaders protecting credential value",
    "Training and enablement programs",
    "Risk and compliance teams reducing exposure",
    "Policy and governance functions",
    "Operations leaders ensuring operational readiness",
    "High-stakes assessment coordinators"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Who Needs It</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Who Needs Oral Verification Most
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F58022] shadow-lg shadow-[#F58022]/20 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium text-[#1F2A44] leading-snug">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

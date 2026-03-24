"use client";

import { motion } from "framer-motion";

export function GovernmentOutcomes() {
  const outcomes = [
    { value: "XX%", label: "Reduction in critical errors linked to misunderstanding" },
    { value: "XX%", label: "Increase in confidence in operator readiness" },
    { value: "XX%", label: "Reduction in time spent on post-incident investigations" },
    { value: "XX%", label: "Units or programs participating in verification" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#D9E6F2] via-[#E6F0FA] to-[#D9E6F2] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Outcomes for government partners
          </h2>
          <p className="text-lg text-[#85756F] max-w-3xl mx-auto">
            Agencies and operators use oral verification to improve readiness and reduce mission-risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 border border-blue-50/50 hover:border-blue-100"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-[#F58022] tracking-tight">
                {item.value}
              </div>
              <p className="text-sm md:text-base text-[#85756F] font-medium leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

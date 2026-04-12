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
    <section className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_40%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] bg-[#EAF1FE]/60 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">Outcomes</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            Outcomes for government partners
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Agencies and operators use oral verification to improve readiness and reduce mission risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 min-h-[220px]"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F58022] to-[#D16D1A] tracking-tight">
                {item.value}
              </div>
              <p className="text-base text-[#64748B] font-medium leading-relaxed max-w-[220px] mx-auto">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

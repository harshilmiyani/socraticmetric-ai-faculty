"use client";

import { motion } from "framer-motion";

export function ProvenResults() {
  const results = [
    { value: "XX%", label: "Increase in confidence in high-stakes operational outcomes" },
    { value: "XX%", label: "Reduction in time investigating questionable or AI-generated work" },
    { value: "XX%", label: "Drop in undetected cognitive gaps during critical operations" },
    { value: "XX%", label: "Organizations actively deploying identity-verified oral assessments" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F58022]" />
            <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">Verified Outcomes</span>
            <div className="h-px w-12 bg-[#F58022]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
            A New Standard for Cognitive Verification
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Organizations utilizing Socratic Metric&apos;s live cognitive evaluation platform establish
            a secure trust layer, achieving measurable improvements in compliance defensibility,
            operational readiness, and academic integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 min-h-[220px]"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3370F7] to-[#4C8FD6] tracking-tight">
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

"use client";

import { motion } from "framer-motion";

export function EducationOutcomes() {
  const outcomes = [
    { value: "XX%", label: "Drop in suspected academic integrity violations" },
    { value: "XX%", label: "Increase in confidence in assessment outcomes" },
    { value: "XX%", label: "Reduction in faculty time spent on integrity investigations" },
    { value: "XX%", label: "Programs supported across undergraduate and graduate levels" },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#F1F5F9] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_40%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] bg-[#EAF1FE]/60 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 space-y-3 sm:space-y-4">
          <span className="text-[#3370F7] font-bold text-xs tracking-[0.2em] uppercase">
            Outcomes
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44] leading-tight px-1">
            Outcomes for education partners
          </h2>
          <p className="text-base sm:text-lg text-[#85756F] max-w-3xl mx-auto leading-relaxed px-1">
            Institutions use oral verification to restore confidence in grades and protect the value of their degrees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5 hover:shadow-2xl hover:ring-[#3370F7]/10 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4 min-h-[180px] sm:min-h-[200px]"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F58022] to-[#D16D1A] tracking-tight">
                {item.value}
              </div>
              <p className="text-sm sm:text-base text-[#85756F] font-medium leading-relaxed max-w-[220px] mx-auto">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

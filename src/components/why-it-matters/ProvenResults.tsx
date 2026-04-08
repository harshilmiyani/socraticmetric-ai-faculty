"use client";

import { motion } from "framer-motion";

export function ProvenResults() {
  const results = [
    { value: "XX%", label: "Increase in confidence in high-stakes outcomes" },
    { value: "XX%", label: "Reduction in time investigating questionable work" },
    { value: "XX%", label: "Drop in undetected comprehension gaps" },
    { value: "XX%", label: "Organizations actively using the platform" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#F58022]">
            Proven Results from Socratic Metric
          </h2>
          <p className="text-lg text-[#85756F] max-w-4xl mx-auto">
            Organizations using Socratic Metric's oral verification platform see measurable improvements in trust, efficiency, and risk reduction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#3370F7] p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 text-white"
            >
              <div className="text-5xl lg:text-6xl font-bold tracking-tight">
                {item.value}
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

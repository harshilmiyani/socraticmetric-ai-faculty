"use client";

import { motion } from "framer-motion";

export function GovernmentUseCases() {
  const cases = [
    {
      id: "1",
      title: "Pre-mission oral briefings to verify understanding of plans and contingencies",
    },
    {
      id: "2",
      title: "Oral checks for operators executing complex or safety-critical procedures",
    },
    {
      id: "3",
      title: "Certification and re certification assessments for critical roles",
    },
    {
      id: "4",
      title: "Readiness checks before introducing new or updated protocols",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Government use cases
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 relative max-w-5xl mx-auto">
          
          {/* Left Column */}
          <div className="space-y-12">
            {cases.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#85756F] mb-2 group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {cases.slice(2, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#85756F] mb-2 group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

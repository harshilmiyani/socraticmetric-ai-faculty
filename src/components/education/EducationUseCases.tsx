"use client";

import { motion } from "framer-motion";

export function EducationUseCases() {
  const cases = [
    {
      id: "1",
      title: "Oral defenses for capstone and thesis projects",
      desc: "Ensure original work and deep understanding."
    },
    {
      id: "2",
      title: "High-stakes oral exams in professional and graduate programs",
      desc: "Prepare students for real-world scenarios."
    },
    {
      id: "3",
      title: "Spot-check orals for high-risk written assignments",
      desc: "Deter misconduct and verify authorship."
    },
    {
      id: "4",
      title: "Group project debriefs to verify individual contribution",
      desc: "Ensure fair grading for collaborative work."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">
            Education use cases
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          
          {/* Decorative dividing line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent transform -translate-x-1/2 pointer-events-none" />

          {/* Left Column */}
          <div className="space-y-12">
            {cases.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-2 group-hover:text-[#F58022] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#85756F] text-base leading-relaxed">
                    {item.desc}
                  </p>
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
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-2 group-hover:text-[#F58022] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#85756F] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

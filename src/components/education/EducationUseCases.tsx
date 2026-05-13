"use client";

import { motion } from "framer-motion";

export function EducationUseCases() {
  const cases = [
    {
      id: "1",
      title: "Capstone & Thesis Defenses",
      desc: "Ensure deep understanding and original work through identity-verified oral reasoning.",
    },
    {
      id: "2",
      title: "Professional Readiness Orals",
      desc: "Prepare students for high-stakes scenarios by testing their ability to reason under pressure without a script.",
    },
    {
      id: "3",
      title: "High-Risk Assignment Spot-Checks",
      desc: "Deter AI-driven shortcuts by requiring a live verbal defense of critical written submissions.",
    },
    {
      id: "4",
      title: "Verified Collaborative Debriefs",
      desc: "Confirm individual contribution and conceptual alignment in group projects through structured AI dialogues.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Use Cases</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44]">
            Strategic Cognitive Verification
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8">
            {cases.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-6 group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3370F7] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#3370F7]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-3 group-hover:text-[#3370F7] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {cases.slice(2, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-6 group rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F58022] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#F58022]/20 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#1F2A44] mb-3 group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed">
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

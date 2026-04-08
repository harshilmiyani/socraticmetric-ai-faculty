"use client";

import { motion } from "framer-motion";

export function EnterpriseUseCases() {
  const cases = [
    { id: "1", title: "Policy and standard operating procedure approvals" },
    { id: "2", title: "Risk, compliance, and control owner assessments" },
    { id: "3", title: "Sales, success, and support enablement on complex offerings" },
    { id: "4", title: "Executive reviews for high-impact initiatives and investments" },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 px-1">
          <span className="text-[#3370F7] font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            Use cases
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Enterprise use cases
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-4 sm:space-y-6 lg:space-y-10">
            {cases.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 group rounded-2xl border border-slate-100 bg-[#F1F5F9]/50 p-5 sm:p-6 md:p-7 ring-1 ring-black/[0.03] hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] hover:border-white hover:ring-[#3370F7]/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#3370F7] to-[#4C8FD6] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg shadow-[#3370F7]/25 group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0">
                  {item.id}
                </div>
                <div className="text-center sm:text-left min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2A44] group-hover:text-[#3370F7] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-10">
            {cases.slice(2, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 group rounded-2xl border border-slate-100 bg-[#F1F5F9]/50 p-5 sm:p-6 md:p-7 ring-1 ring-black/[0.03] hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] hover:border-white hover:ring-[#3370F7]/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F58022] to-[#D16D1A] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg shadow-[#F58022]/25 group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0">
                  {item.id}
                </div>
                <div className="text-center sm:text-left min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2A44] group-hover:text-[#F58022] transition-colors duration-300 leading-snug">
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

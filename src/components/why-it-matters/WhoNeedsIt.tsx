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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Who Needs Oral Verification Most
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F58022] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-medium text-[#85756F] group-hover:text-[#1F2A44] transition-colors duration-300">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

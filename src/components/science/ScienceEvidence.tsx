"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ScienceEvidence() {
  const studies = [
    {
      author: "Hale et al. (2007)",
      finding:
        'Found students reading aloud demonstrated significantly higher comprehension than those reading silently, noting a critical limitation of silent reading: "the examiner had no way of knowing if the student was actually reading and/or read the entire passage."',
    },
    {
      author: "Schiavo et al. (2021)",
      finding:
        "Demonstrated approximately a 24% improvement in comprehension among students with reading disabilities when utilizing attention-driven read-aloud technology.",
    },
    {
      author: "Forrin & MacLeod (2018)",
      finding:
        "Confirmed the memory advantage is particularly strong when learners hear their own voices, demonstrating that self-generated vocal production creates the most distinctive memory encoding.",
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Research</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight mb-6">
              Evidence of Impact
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-10">
              Multiple peer-reviewed studies support the distinct advantages of oral engagement and the production effect.
            </p>

            <div className="space-y-8">
              {studies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-blue-50 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2A44] text-lg mb-2">{study.author}</h4>
                    <p className="text-[#64748B] leading-relaxed">{study.finding}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-slate-100"
          >
            <h3 className="font-serif text-2xl font-bold text-[#1F2A44] mb-6">
              Addressing the Counter Evidence
            </h3>
            <div className="space-y-4 text-[#64748B] leading-relaxed">
              <p>
                Research shows that highly fluent readers can achieve comparable comprehension through silent reading under optimal conditions. This does not refute the value of oral assessment; it clarifies its purpose.
              </p>
              <p>
                Silent reading optimizes efficiency for low-stakes information processing. Oral reading ensures verifiable comprehension, creates distinctive memory traces, and produces observable evidence of understanding.
              </p>
              <p className="font-medium text-[#1F2A44]">
                Socratic Metric occupies the domain where verifiable authenticity and demonstrable learning are absolute priorities—precisely where traditional assessment fails in the AI age.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
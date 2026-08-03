"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function HomeMission() {
  return (
    <section className="relative z-10 px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#3370F7]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#3370F7]">
              Our Mission
            </span>
            <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#3370F7]/40" />
          </div>

          <div className="w-full rounded-2xl border border-[#1F2A44] bg-white p-8 shadow-[8px_8px_0px_0px_#1F2A44] sm:p-12 md:p-16">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold leading-[1.15] text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              The New Standard for Cognitive & Academic Verification
            </h2>

            <div className="space-y-6 text-center text-base leading-relaxed text-[#475569] sm:text-lg">
              <p>
                <strong className="font-bold text-[#1F2A44]">
                  Written output is no longer proof of understanding
                </strong>
                . In an era where AI-generated content is indistinguishable from
                authentic work, traditional written assignments and static documents
                create a false assurance of competence.
              </p>

              <p>
                Socratic Metric™ brings back the gold standard of assessment:{" "}
                <strong className="font-bold text-[#1F2A44]">
                  AI-moderated oral Assessment
                </strong>{" "}
                — reimagined for scale, consistency, and live cognitive verification.
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <p className="mb-6 text-center text-base font-medium text-[#1F2A44] sm:text-lg">
                Each interactive oral session evaluates cognition in motion by capturing:
              </p>

              <ul className="mx-auto max-w-2xl space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3370F7]" />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Authentic reasoning & articulate defense:
                    </strong>{" "}
                    Requiring users to explain, refine, and defend their understanding aloud in real-time conversation.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3370F7]" />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Deep comprehension via adaptive questioning:
                    </strong>{" "}
                    Probing reasoning depth through targeted, real-time follow-up questions and real-world scenarios.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3370F7]" />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Active learning & neural engagement:
                    </strong>{" "}
                    Leveraging cognitive neuroscience—specifically the Production Effect—to strengthen memory and retention as users read and respond aloud.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3370F7]" />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Audit-ready evaluation & feedback:
                    </strong>{" "}
                    Delivering immediate, iterative AI guidance alongside identity-verified, transcript-backed records aligned to your rubrics and standards.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 mx-auto max-w-2xl border-t border-slate-100 pt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="text-[#475569] text-sm sm:text-base">
                  <strong className="font-semibold text-[#1F2A44] mr-2">Built for:</strong> 
                  Westcliff University
                </p>
                <p className="text-[#475569] text-sm sm:text-base">
                  <strong className="font-semibold text-[#1F2A44] mr-2">Pilot Term:</strong> 
                  Fall 2024
                </p>
                <p className="text-[#475569] text-sm sm:text-base">
                  <strong className="font-semibold text-[#1F2A44] mr-2">Other Sectors:</strong> 
                  Education, Enterprise, and Government
                </p>
                <p className="text-[#475569] text-sm sm:text-base">
                  <strong className="font-semibold text-[#1F2A44] mr-2">Goal:</strong> 
                  Assess true understanding without increasing human workload
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

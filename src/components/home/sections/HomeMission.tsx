"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HomeMission() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-12 md:py-16">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#3370F7]/6 blur-[110px]" />
        <div className="absolute -right-[8%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#F58022]/6 blur-[110px]" />
      </div>

      <div className="container relative mx-auto max-w-4xl">
        <div
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3370F7]" strokeWidth={2} />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Authentic reasoning & articulate defense:
                    </strong>{" "}
                    Requiring users to explain, refine, and defend their understanding aloud in real-time conversation.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3370F7]" strokeWidth={2} />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Deep comprehension via adaptive questioning:
                    </strong>{" "}
                    Probing reasoning depth through targeted, real-time follow-up questions and real-world scenarios.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3370F7]" strokeWidth={2} />
                  <p className="text-[#475569]">
                    <strong className="font-semibold text-[#1F2A44]">
                      Active learning & neural engagement:
                    </strong>{" "}
                    Leveraging cognitive neuroscience—specifically the Production Effect—to strengthen memory and retention as users read and respond aloud.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3370F7]" strokeWidth={2} />
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

          <div className="mt-12 flex justify-center">
            <Link
              href="/request-demo"
              className="group inline-flex h-14 items-center justify-center rounded-lg bg-[#F58022] px-8 text-base font-medium text-white shadow-md shadow-orange-200 transition-all duration-200 hover:bg-[#D16D1A] hover:shadow-lg hover:shadow-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Settings2,
  Share2,
  Mic,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Set Up & Customise",
    description:
      "Educators create assignments by defining core topics, linking reference materials, and selecting AI questioning modes.",
    icon: Settings2,
    accent: "from-blue-500 to-[#3370F7]",
    shadow: "shadow-blue-500/20",
    bg: "bg-blue-50/50",
  },
  {
    number: "02",
    title: "Share via LMS",
    description:
      "Professors generate a shareable link and post it directly into Canvas or their university's LMS.",
    icon: Share2,
    accent: "from-indigo-500 to-indigo-600",
    shadow: "shadow-indigo-500/20",
    bg: "bg-indigo-50/50",
  },
  {
    number: "03",
    title: "Interactive Socratic Learning",
    description:
      "Students read prompts aloud, record voice responses, and refine their answers through guided AI iterations.",
    icon: Mic,
    accent: "from-orange-400 to-[#F58022]",
    shadow: "shadow-orange-500/20",
    bg: "bg-orange-50/50",
  },
  {
    number: "04",
    title: "Holistic Review",
    description:
      "Educators access comprehensive dashboards featuring rubric grading, audio/video metrics, and full transcripts.",
    icon: LayoutDashboard,
    accent: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
    bg: "bg-emerald-50/50",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-12 md:scroll-mt-28 md:py-16 lg:py-20"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#3370F7]/5 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#F58022]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3370F7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3370F7]">
              The Process
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3370F7]" />
          </div>
          <h2
            id="how-it-works-heading"
            className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-[#1F2A44] sm:text-5xl md:text-6xl"
          >
            How It Works
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#64748B] sm:text-xl">
            From assignment setup to audit-ready review—four steps to verify authentic understanding.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-[50px] top-[52px] hidden h-0.5 w-[calc(100%-100px)] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className={`relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/60 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 ${step.bg}`}>
                    {/* Top Section with Icon and Number */}
                    <div className="mb-8 flex items-start justify-between">
                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg ${step.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon className="relative z-10 h-7 w-7" strokeWidth={2} />
                      </div>
                      <span className="font-serif text-5xl font-bold tracking-tighter text-[#1F2A44]/5 transition-colors duration-500 group-hover:text-[#1F2A44]/10">
                        {step.number}
                      </span>
                    </div>

                    {/* Content Section */}
                    <h3 className="mb-3 text-xl font-bold leading-tight text-[#1F2A44] transition-colors duration-300 group-hover:text-[#3370F7]">
                      {step.title}
                    </h3>
                    <p className="flex-1 text-[15px] font-medium leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>

                    {/* Decorative bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex justify-center md:mt-14"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white px-5 py-2.5 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-[#1F2A44]">
              Seamless LMS Integration Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

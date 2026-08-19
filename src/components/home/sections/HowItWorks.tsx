import {
  Settings2,
  Share2,
  Mic,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Set Up & Customise",
    description:
      "Educators create assignments by defining core topics, linking reference materials, and selecting AI questioning modes.",
    icon: Settings2,
    accent: "from-blue-500 to-[#3370F7]",
    shadow: "shadow-blue-500/20",
    ring: "hover:ring-blue-200",
    numColor: "text-blue-700",
  },
  {
    number: "02",
    title: "Share via LMS",
    description:
      "Professors generate a shareable link and post it directly into Canvas or their university's LMS.",
    icon: Share2,
    accent: "from-indigo-500 to-indigo-600",
    shadow: "shadow-indigo-500/20",
    ring: "hover:ring-indigo-200",
    numColor: "text-indigo-700",
  },
  {
    number: "03",
    title: "Interactive Socratic Learning",
    description:
      "Students read prompts aloud, record voice responses, and refine their answers through guided AI iterations.",
    icon: Mic,
    accent: "from-orange-400 to-[#F58022]",
    shadow: "shadow-orange-500/20",
    ring: "hover:ring-orange-200",
    numColor: "text-orange-700",
  },
  {
    number: "04",
    title: "Holistic Review",
    description:
      "Educators access comprehensive dashboards featuring rubric grading, audio/video metrics, and full transcripts.",
    icon: LayoutDashboard,
    accent: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
    ring: "hover:ring-emerald-200",
    numColor: "text-emerald-700",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 overflow-hidden py-12 md:scroll-mt-28 md:py-16 lg:py-20"
    >
      {/* Light aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Soft vertical wash from white into the page tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-[#EFF5FF]" />        {/* Dotted texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#3370F71a_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,#000_50%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div
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
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
            From assignment setup to audit-ready review—four steps to verify authentic understanding.
          </p>
        </div>

        <div className="relative">
          {/* Dashed connection line for desktop */}
          <div
            className="absolute left-[50px] top-[52px] hidden h-px w-[calc(100%-100px)] lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, #94a3b8 40%, transparent 40%)",
              backgroundSize: "12px 1px",
              backgroundRepeat: "repeat-x",
            }}
            aria-hidden
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                 
                 
                 
                 
                  className="group relative"
                >
                  <div
                    className={`relative z-10 flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-[0_2px_12px_rgb(15,23,42,0.04),0_12px_32px_-12px_rgb(15,23,42,0.08)] ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_4px_16px_rgb(15,23,42,0.05),0_24px_48px_-12px_rgb(15,23,42,0.14)] hover:ring-2 ${step.ring}`}
                  >
                    {/* Top Section with Icon and Step pill */}
                    <div className="mb-7 flex items-start justify-between">
                      <div className="relative">
                        {/* Icon glow */}
                        <div
                          className={`absolute -inset-2 rounded-3xl bg-gradient-to-br opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-30 ${step.accent}`}
                          aria-hidden
                        />
                        <div
                          className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg ${step.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <Icon className="h-7 w-7" strokeWidth={2} />
                        </div>
                      </div>
                      <span
                        className={`rounded-full bg-slate-50 px-3 py-1 font-mono text-[11px] font-bold tracking-widest ring-1 ring-slate-100 transition-colors duration-300 ${step.numColor}`}
                      >
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Content Section */}
                    <h3 className="mb-3 text-xl font-bold leading-tight text-[#1F2A44] transition-colors duration-300 group-hover:text-[#3370F7]">
                      {step.title}
                    </h3>
                    <p className="flex-1 text-[15px] font-medium leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust indicator & CTA */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-14 md:flex-row md:gap-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white px-5 py-2.5 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-[#1F2A44]">
              Seamless LMS Integration Available
            </span>
          </div>

          <Link
            href="/education"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#3370F7]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#3370F7]/40 active:scale-95"
          >
            {/* Shine sweep on hover */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              aria-hidden
            />
            <span className="relative">Learn more about education solutions</span>
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-[#3370F7]">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

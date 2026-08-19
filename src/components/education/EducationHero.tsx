import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import {
  BookOpen,
  ImageIcon,
  MessageCircle,
  Wand2,
  ScanSearch,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    label: "Textbook question",
    icon: BookOpen,
    box: "bg-white border-[#1F2A44]/25",
    iconClass: "text-[#1F2A44]",
    labelClass: "text-[#1F2A44]",
  },
  {
    label: "Screenshot or Copy-Paste question",
    icon: ImageIcon,
    box: "bg-[#EAF1FE] border-[#1F2A44]/25",
    iconClass: "text-[#1F2A44]",
    labelClass: "text-[#1F2A44]",
  },
  {
    label: "ChatGPT",
    icon: MessageCircle,
    box: "bg-[#1F2A44] border-[#1F2A44]",
    iconClass: "text-white",
    labelClass: "text-[#1F2A44]",
  },
  {
    label: "Humanizer AI Tools",
    icon: Wand2,
    box: "bg-[#FFF4ED] border-[#1F2A44]/25",
    iconClass: "text-[#F58022]",
    labelClass: "text-[#1F2A44]",
  },
  {
    label: "Self-check AI Using AI-Detector Tools",
    icon: ScanSearch,
    box: "bg-[#EAF1FE] border-[#1F2A44]/25",
    iconClass: "text-[#3370F7]",
    labelClass: "text-[#1F2A44]",
  },
  {
    label: "Ready to submit answers",
    icon: Check,
    box: "bg-white border-[#1F2A44]/25",
    iconClass: "text-[#3370F7]",
    labelClass: "text-[#1F2A44]",
    strokeWidth: 3,
  },
  {
    label: "Grade but no learning",
    icon: Star,
    box: "bg-[#FEE2E2] border-[#1F2A44]/30",
    iconClass: "text-[#DC2626]",
    labelClass: "text-[#DC2626]",
    strike: true,
  },
] as const;

export function EducationHero() {

  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-16 md:pt-28 md:pb-24 lg:pb-28">

      <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div
          className="flex flex-col items-center text-center"
        >
          <div className="mb-5">
            <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Education
            </span>
          </div>

          <h1 className="animate-text-enter max-w-3xl font-serif text-3xl font-bold leading-[1.15] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            The AI cheating crisis{" "}
            <span className="italic text-[#3370F7]">in education.</span>
          </h1>

          <div className="mt-8 inline-flex max-w-xl flex-col items-center rounded-2xl border border-[#3370F7]/20 bg-[#EAF1FE] px-8 py-5 sm:mt-10 sm:px-12 sm:py-6">
            <p className="text-4xl font-bold tracking-tight text-[#3370F7] sm:text-5xl md:text-6xl">
              90%
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#64748B] sm:text-base md:text-lg">
              of students now use AI to complete coursework
            </p>
          </div>

          <p className="mt-10 text-base font-medium text-[#64748B] sm:mt-12 sm:text-lg">
            Their process usually looks like this:
          </p>

          {/* Steps — responsive: stack on mobile, wrap grid on tablet, row on xl */}
          <div className="mt-6 w-full max-w-6xl sm:mt-8">
            {/* Mobile: vertical timeline */}
            <ol className="mx-auto flex max-w-xs flex-col items-center gap-0 sm:hidden">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="flex w-full flex-col items-center">
                    <div className="flex w-full items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-left shadow-sm">
                      <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${step.box}`}
                      >
                        <Icon
                          className={`h-6 w-6 ${step.iconClass}`}
                          strokeWidth={"strokeWidth" in step ? step.strokeWidth : 2}
                        />
                        {"strike" in step && step.strike ? (
                          <span
                            className="pointer-events-none absolute inset-[18%] rotate-[-28deg] border-t-2 border-[#DC2626]"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Step {index + 1}
                        </p>
                        <p className={`text-sm font-bold leading-snug ${step.labelClass}`}>
                          {step.label}
                        </p>
                      </div>
                    </div>
                    {index < steps.length - 1 ? (
                      <span className="my-1.5 text-lg font-medium text-slate-300" aria-hidden>
                        ↓
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {/* Tablet / mid: wrapping grid */}
            <ol className="mx-auto hidden grid-cols-3 gap-x-4 gap-y-6 sm:grid lg:grid-cols-4 xl:hidden">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="relative flex flex-col items-center gap-2.5">
                    <div
                      className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border md:h-20 md:w-20 ${step.box}`}
                    >
                      <Icon
                        className={`h-7 w-7 md:h-8 md:w-8 ${step.iconClass}`}
                        strokeWidth={"strokeWidth" in step ? step.strokeWidth : 2}
                      />
                      {"strike" in step && step.strike ? (
                        <span
                          className="pointer-events-none absolute inset-[18%] rotate-[-28deg] border-t-2 border-[#DC2626]"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {index + 1}
                    </p>
                    <p
                      className={`max-w-[130px] text-center text-xs font-bold leading-snug md:max-w-[140px] md:text-[13px] ${step.labelClass}`}
                    >
                      {step.label}
                    </p>
                  </li>
                );
              })}
            </ol>

            {/* Desktop xl+: single horizontal flow */}
            <ol className="mx-auto hidden items-start justify-center gap-1 xl:flex 2xl:gap-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="flex items-start gap-1 2xl:gap-2">
                    <div className="flex w-[112px] flex-col items-center gap-2.5 2xl:w-[124px]">
                      <div
                        className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border 2xl:h-[88px] 2xl:w-[88px] ${step.box}`}
                      >
                        <Icon
                          className={`h-8 w-8 ${step.iconClass}`}
                          strokeWidth={"strokeWidth" in step ? step.strokeWidth : 2}
                        />
                        {"strike" in step && step.strike ? (
                          <span
                            className="pointer-events-none absolute inset-[18%] rotate-[-28deg] border-t-2 border-[#DC2626]"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                      <p
                        className={`text-center text-xs font-bold leading-snug 2xl:text-[13px] ${step.labelClass}`}
                      >
                        {step.label}
                      </p>
                    </div>
                    {index < steps.length - 1 ? (
                      <span
                        className="mt-8 text-lg font-medium text-slate-400 2xl:mt-9"
                        aria-hidden
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-[#475569] sm:mt-12 sm:text-lg md:text-xl">
            The traditional assessment model is broken. Socratic Metric brings
            back what matters:{" "}
            <strong className="font-bold text-[#1F2A44]">
              verifying real understanding.
            </strong>
          </p>

          <Link
            href={REQUEST_DEMO_BOOKING_HREF}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#3370F7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_0_0_#1F2A44] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4C8FD6] hover:shadow-[0_6px_0_0_#1F2A44] active:translate-y-0.5 active:shadow-[0_2px_0_0_#1F2A44] sm:mt-8 sm:px-7 sm:text-base"
          >
            See how Socratic Metric solves this
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

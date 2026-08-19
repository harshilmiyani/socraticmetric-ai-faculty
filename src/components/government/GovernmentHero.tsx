import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { LazyHeroPreview } from "@/components/ui/LazyHeroPreview";

export function GovernmentHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="space-y-6 max-w-2xl"
          >
            <div className="hero-enter flex items-center gap-4">
              <div className="h-px w-8 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Government & Defense</span>
              <div className="h-px w-8 bg-[#3370F7]" />
            </div>

            <h1 className="hero-enter hero-enter-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
              When AI can generate the procedure,{" "}
              <span className="text-[#3370F7]">
                written output no longer guarantees operational readiness.
              </span>
            </h1>

            <div className="hero-enter hero-enter-delay-2 space-y-4 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
              <p>
                Generative AI can produce flawless mission plans, safety analyses, and operational
                procedures, creating a dangerous false assurance of competence.
              </p>
              <p>
                Socratic Metric™ evaluates live cognition, verifying that your operators can reason
                through cascading failures, articulate redundancy logic, and execute under pressure.
              </p>
            </div>

            <div className="hero-enter hero-enter-delay-3 flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:-translate-y-0.5 hover:bg-[#4C8FD6] hover:shadow-xl active:scale-95 sm:w-auto"
              >
                Talk to our team
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-[#1F2A44] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#3370F7]/30 hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] active:scale-95 sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div
            className="hero-enter hero-enter-delay-4 relative perspective-1000 flex flex-col items-center"
          >
            <div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#3370F7] text-xs font-bold tracking-wide uppercase z-20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]" />
              </span>
              Pre-mission oral check preview
            </div>

            <div className="w-full max-w-full mx-auto">
              <LazyHeroPreview
                src="/animation/hero-government-voice.html"
                title="SocraticMetric government pre-mission oral check — live preview"
                messageType="sm-gov-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

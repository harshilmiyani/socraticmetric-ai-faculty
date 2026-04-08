import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = ["Oral verification at scale", "Audit-ready records", "Built for high-stakes scenarios"];

export function BlogPostCTA() {
  return (
    <section className="relative mt-12 sm:mt-16 py-14 md:py-20 bg-[#1F2A44] text-center overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-white/10">
      <BackgroundBeams />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/80 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,520px)] h-[min(100%,520px)] bg-[#3370F7]/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 px-6 sm:px-10 md:px-12 max-w-3xl mx-auto space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(90%,320px)] h-px bg-gradient-to-r from-transparent via-[#F58022]/60 to-transparent" />

        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight pt-2">
          Ready to verify <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58022] to-[#FF9D4D]">real understanding?</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          See how Socratic Metric™ fits your classroom, enterprise, or mission-critical workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
          {benefits.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#3370F7] shrink-0" />
              {b}
            </span>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <Link href="/request-demo" className="w-full sm:w-auto">
            <button
              type="button"
              className="relative group inline-flex h-14 w-full sm:w-auto min-h-[48px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/35 outline-none transition-all duration-300 hover:shadow-[#3370F7]/55 hover:scale-[1.02] active:scale-[0.98] ring-1 ring-[#3370F7]/25"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 transition-opacity duration-500" />
              <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 sm:px-10 text-sm sm:text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                Request a demo
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

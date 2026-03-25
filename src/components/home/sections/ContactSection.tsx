import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const benefits = [
    "Deploy instantly",
    "Audit-ready records",
    "Adaptive logic",
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 bg-[#1F2A44] text-center overflow-hidden">
      <BackgroundBeams />
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44] via-transparent to-[#1F2A44]/80 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3370F7]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10 p-8 sm:p-12 md:p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-white/5 relative overflow-hidden">
          
          {/* Inner subtle glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F58022] to-transparent opacity-50" />

          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Verify Understanding.<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58022] to-[#FF9D4D]">Not Documents.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            See how Socratic Metric™ transforms compliance, learning, and operational readiness.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm md:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link href="/request-demo" className="w-full sm:w-auto">
              <button className="relative group inline-flex h-16 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-2xl shadow-[#3370F7]/40 outline-none transition-all duration-300 hover:shadow-[#3370F7]/60 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20">
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-12 text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Request a Demo <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

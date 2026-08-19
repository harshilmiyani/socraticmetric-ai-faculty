import { CheckCircle2, RotateCw } from "lucide-react";

export function EnterpriseCompliance() {
  const points = [
    "Identity-verified, audit-ready confirmation that individuals can reason beyond what AI can write",
    "Repeatable workflows for verifying regulatory framework comprehension and policy alignment",
    "Immutable, transcript-backed records of authentic human engagement",
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] max-w-[90vw] rounded-full bg-[#3370F7]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Governance</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
              AI-era leadership and compliance readiness infrastructure
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
              <p>
                In the AI era, governance depends not on documentation alone, but on verified
                cognitive alignment.
              </p>
              <p>
                Socratic Metric provides a secure, FERPA-aligned infrastructure to prove your team
                understands the regulatory frameworks and risk controls they operate within.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#3370F7]/25 to-[#F58022]/20 blur-md opacity-60 group-hover:opacity-90 transition duration-500" />
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-white p-8 md:p-12 shadow-2xl shadow-black/[0.06] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3370F7]/40 to-transparent" />
              <div className="space-y-6 relative z-10">
                {points.map((point, index) => (
                  <div
                    key={index}
                   
                   
                   
                   
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-blue-50 rounded-full p-1 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                    </div>
                    <span className="text-[#1F2A44] font-medium text-lg leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 right-6 text-[#3370F7]/10 pointer-events-none">
                <RotateCw className="w-24 h-24 animate-[spin_20s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

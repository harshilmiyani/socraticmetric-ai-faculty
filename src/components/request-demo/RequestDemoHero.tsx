import Link from "next/link";
import { CheckCircle2, Play } from "lucide-react";
import { Cover } from "@/components/ui/cover";

export function RequestDemoHero() {
  const features = [
    "Verify authentic comprehension beyond AI-generated content",
    "Create defensible evidence of real understanding for high-stakes decisions",
    "Standardize oral assessments and reviews at scale"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Why Socratic Metric Matters</span>
              <div className="h-px w-8 bg-[#3370F7]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
              See how Socratic Metric verifies real <Cover className="mt-1">understanding.</Cover>
            </h1>

            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              Socratic Metric turns high-stakes documentation into oral verification. Our platform helps teams confirm that people can explain, reason through, and defend the work they sign off on.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-50 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#3370F7]" />
                  </div>
                  <span className="text-[#1F2A44] font-medium text-lg leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Interactive Glass Card */}
          <div className="relative perspective-1000 group">
            
            <div className="aspect-[4/3] w-full bg-white rounded-3xl shadow-2xl shadow-[#3370F7]/10 border border-white relative overflow-hidden flex flex-col transition-all duration-500 transform group-hover:-translate-y-1 md:bg-white/80 md:backdrop-blur-2xl">

               {/* MacOS Style Header */}
               <div className="h-14 bg-white/60 border-b border-slate-100 flex items-center px-6 relative z-10 backdrop-blur-md">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors duration-300"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors duration-300 delay-75"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors duration-300 delay-150"></div>
                 </div>
                 <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 text-xs font-bold tracking-wide text-[#3370F7] uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3370F7] animate-pulse"></span>
                    Live Simulation
                 </div>
               </div>

               {/* Card Body */}
               <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10 bg-gradient-to-b from-transparent to-white/40">
                 
                 {/* Floating Play Button */}
                 <Link
                   href="#book-demo"
                   scroll
                   className="group/play relative mb-8 inline-flex cursor-pointer flex-col items-center outline-none"
                 >
                    <span className="absolute inset-0 rounded-full bg-[#3370F7] opacity-30 blur-xl transition-opacity duration-300 animate-pulse group-hover/play:opacity-60" aria-hidden />
                    <span className="relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full p-[2px] shadow-xl shadow-[#3370F7]/20 outline-none transition-all duration-300 hover:scale-[1.05] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#3370F7] focus-visible:ring-offset-2">
                      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 transition-opacity duration-500" />
                      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-white transition-all duration-300 group-hover/play:bg-slate-50">
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#3370F7] to-[#4C8FD6] pl-2 shadow-inner">
                          <Play className="h-8 w-8 fill-current text-white drop-shadow-md" aria-hidden />
                        </span>
                      </span>
                    </span>
                    <span className="sr-only">Jump to live scheduling</span>
                 </Link>

                 <h3 className="text-[#1F2A44] font-serif font-bold text-3xl mb-3 text-center tracking-tight">Interactive Platform Demo</h3>
                 <p className="text-[#64748B] text-lg text-center max-w-sm">
                   Discover how AI-moderated dialogue can transform your high-stakes verification process.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

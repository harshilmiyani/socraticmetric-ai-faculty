"use client";

import { Mic, RefreshCw, Repeat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThePlatform() {
  const features = [
    {
      title: "Oral question presentation",
      description: "Socratic Metric uses advanced text-to-speech to present scenarios organically, simulating a real conversation.",
      icon: <Mic className="h-6 w-6 text-[#3370F7]" />,
      bgClass: "bg-blue-50/50 border-blue-100",
      iconBg: "bg-blue-100"
    },
    {
      title: "Adaptive real-time questioning",
      description: "The AI listens to the response and asks targeted follow-ups to probe the depth of understanding.",
      icon: <RefreshCw className="h-6 w-6 text-[#F58022]" />,
      bgClass: "bg-orange-50/50 border-orange-100",
      iconBg: "bg-orange-100"
    },
    {
      title: "Iterative feedback loop",
      description: "Immediate feedback allows users to correct misconceptions and refine their reasoning on the spot.",
      icon: <Repeat className="h-6 w-6 text-[#4C8FD6]" />,
      bgClass: "bg-sky-50/50 border-sky-100",
      iconBg: "bg-sky-100"
    },
    {
      title: "Identity-verified audit records",
      description: "Every session generates an immutable, transcript-backed record of verified competency.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      bgClass: "bg-emerald-50/50 border-emerald-100",
      iconBg: "bg-emerald-100"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EAF1FE] border border-blue-100 text-[#3370F7] font-bold text-xs tracking-widest uppercase shadow-sm">
                THE PLATFORM
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2A44] leading-[1.1] tracking-tight">
                Cognition in <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022]">
                  Motion.
                </span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg font-medium">
              Socratic Metric uses AI-moderated adaptive dialogue to verify that people can articulate, refine, and defend understanding aloud — in real time.
            </p>
            
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-inner">
              <p className="text-xl font-serif italic text-[#1F2A44] leading-relaxed">
                "It does not grade documents. <br />
                <span className="font-bold text-[#3370F7]">It evaluates live cognition.</span>"
              </p>
            </div>
          </div>

          {/* Right Column: Scrolling Features */}
          <div className="flex flex-col gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-8 md:p-10 rounded-3xl border shadow-lg shadow-slate-200/40 transition-all hover:shadow-xl hover:-translate-y-1 bg-white",
                  feature.bgClass
                )}
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className={cn("p-4 rounded-2xl shrink-0", feature.iconBg)}>
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1F2A44]">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

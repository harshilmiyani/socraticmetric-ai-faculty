"use client";

import Image from "next/image";
import { Mic, RefreshCw, Repeat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";

export function ThePlatform() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="pt-12 pb-6 md:pt-14 md:pb-8 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#3370F7]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#F58022]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        {/* Section Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
            THE PLATFORM
          </span>
          <h2
            id="platform-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2A44] leading-[1.1] tracking-tight"
          >
            Cognition in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022]">
              Motion.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed font-medium">
            Socratic Metric uses AI-moderated adaptive dialogue to verify that
            people can articulate, refine, and defend understanding aloud—moving
            beyond silent processing to verify true mastery.
          </p>
        </motion.div>

        {/* Bento Grid using Wobble Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Card 01: Oral Question Presentation */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-indigo-50 border border-indigo-200 shadow-md"
            className="relative flex flex-col justify-center h-full p-6 lg:p-8"
          >
            <div className="max-w-3xl space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#3370F7] tracking-widest">01</span>
                <span className="h-px w-8 bg-[#3370F7]/40" />
                <div className="p-1.5 rounded-lg bg-[#3370F7]/10 text-[#3370F7]">
                  <Mic className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2A44] tracking-tight">
                Oral Question Presentation
              </h3>
              <p className="text-[#64748B] leading-relaxed text-sm lg:text-base">
                Engages visual-motor-auditory integration to anchor attention through embodied focus, simulating an organic, high-stakes conversation.
              </p>
            </div>
          </WobbleCard>

          {/* Card 02: Adaptive Real-Time Questioning */}
          <WobbleCard
            containerClassName="col-span-1 bg-orange-50 border border-orange-200 shadow-md"
            className="relative flex flex-col justify-between h-full p-6 lg:p-8"
          >
            <div className="space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#F58022] tracking-widest">02</span>
                <span className="h-px w-8 bg-[#F58022]/40" />
                <div className="p-1.5 rounded-lg bg-[#F58022]/10 text-[#F58022]">
                  <RefreshCw className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2A44] tracking-tight">
                Adaptive Questioning
              </h3>
              <p className="text-[#64748B] leading-relaxed text-sm">
                The AI probes conceptual alignment and depth of reasoning, asking targeted follow-ups that respond dynamically to the user's voice.
              </p>
            </div>
            <div className="relative mt-6">
              <Image
                src="/img/homepage/theplatform-img-2.png"
                alt="Adaptive Questioning Flow"
                width={400}
                height={240}
                className="object-cover w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </WobbleCard>

          {/* Card 03: Iterative Feedback Loop */}
          <WobbleCard
            containerClassName="col-span-1 bg-sky-50 border border-sky-200 shadow-md"
            className="relative flex flex-col justify-between h-full p-6 lg:p-8"
          >
            <div className="space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#4C8FD6] tracking-widest">03</span>
                <span className="h-px w-8 bg-[#4C8FD6]/40" />
                <div className="p-1.5 rounded-lg bg-[#4C8FD6]/10 text-[#4C8FD6]">
                  <Repeat className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2A44] tracking-tight">
                Iterative Feedback Loop
              </h3>
              <p className="text-[#64748B] leading-relaxed text-sm">
                Immediate AI guidance allows users to correct misconceptions on the spot, leveraging the Production Effect to strengthen memory.
              </p>
            </div>
            <div className="relative mt-6">
              <Image
                src="/img/homepage/theplatform-img-3.png"
                alt="Feedback Loop Interface"
                width={400}
                height={240}
                className="object-cover w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </WobbleCard>

          {/* Card 04: Identity-Verified Audit Records */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-emerald-50 border border-emerald-200 shadow-md"
            className="relative flex flex-col justify-center h-full p-6 lg:p-8"
          >
            <div className="max-w-3xl space-y-4 z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-emerald-600 tracking-widest">04</span>
                <span className="h-px w-8 bg-emerald-600/40" />
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2A44] tracking-tight">
                Identity-Verified Audit Records
              </h3>
              <p className="text-[#64748B] leading-relaxed text-sm lg:text-base">
                Integrated voice authentication and transcript-backed records provide an immutable, FERPA-compliant audit trail of verified human competency.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

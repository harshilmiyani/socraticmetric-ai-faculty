"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Cover } from "@/components/ui/cover";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { youtubeEmbedSrc, youtubeThumbnailUrl } from "@/lib/youtubeEmbed";
import { ParticleNetwork } from "@/components/home/ParticleNetwork";

export function HeroSection() {
  const YOUTUBE_VIDEO_ID = "B1LGkF_4vHA";
  const [playing, setPlaying] = useState(false);
  const [thumbSrc] = useState("/img/homepage/homepage-video-1-thubnail.png");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-hidden relative">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Interactive Particle Network */}
        <ParticleNetwork />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-2 lg:pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-start text-left flex-1 space-y-6 max-w-2xl lg:max-w-none w-full"
          >

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3370F7]/10 border border-[#3370F7]/20 text-xs sm:text-sm font-semibold text-[#3370F7] tracking-wide select-none">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#F58022]" />
              <span className="font-bold">#1</span> AI-Moderated Oral Assessment Platform
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold tracking-tight text-[#1F2A44] leading-[1.1] lg:leading-[1.05]">
              Written Output is No Longer Proof of <br className="hidden sm:block" />
              <Cover className="mt-2 sm:mt-3">Understanding.</Cover>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-[#64748B] leading-relaxed max-w-xl font-medium">
              Socratic Metric™ is the first AI-moderated oral assessment and cognitive verification platform designed to verify whether your people can articulate, defend, and reason in real time—evaluating live cognition, not just documents.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-6">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="relative group inline-flex h-14 w-full min-w-[220px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-xl shadow-[#3370F7]/30 outline-none transition-all duration-300 hover:shadow-2xl hover:shadow-[#3370F7]/50 hover:scale-[1.02] active:scale-95 ring-1 ring-[#3370F7]/20 sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)] opacity-100 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Request a Demo <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-[#1F2A44] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-95 sm:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative perspective-1000 flex flex-col items-center"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#1F2A44] mb-4 self-start lg:self-center flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F58022] animate-pulse" />
              See it in Action
            </h3>
            <div className="relative isolate aspect-video w-full max-w-full overflow-hidden rounded-xl border border-slate-200/90 bg-black shadow-2xl shadow-slate-200/80 sm:rounded-2xl md:rounded-3xl">
              {playing ? (
                <iframe
                  src={youtubeEmbedSrc(YOUTUBE_VIDEO_ID)}
                  title="Socratic Metric — Evaluate Live demo on YouTube"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-black p-0 text-left outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#3370F7]"
                  aria-label="Play Socratic Metric demo video inline"
                >
                  <img
                    src={thumbSrc}
                    alt="Socratic Metric AI oral assessment platform — demo video preview"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={1280}
                    height={720}
                    fetchPriority="high"
                    draggable={false}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 group-focus-visible:bg-black/20" aria-hidden />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3370F7] text-white shadow-lg shadow-[#3370F7]/35 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4C8FD6] group-hover:shadow-xl group-active:scale-100 sm:h-16 sm:w-16 md:h-20 md:w-20">
                    <span
                      className="absolute inset-0 rounded-full bg-[#3370F7] opacity-30 animate-ping"
                      aria-hidden
                    />
                    <Play className="relative ml-0.5 h-7 w-7 fill-current sm:h-8 sm:w-8 md:h-10 md:w-10" aria-hidden />
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

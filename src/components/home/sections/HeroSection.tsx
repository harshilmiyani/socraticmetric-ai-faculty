"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Cover } from "@/components/ui/cover";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { youtubeEmbedSrc } from "@/lib/youtubeEmbed";

export function HeroSection() {
  const YOUTUBE_VIDEO_ID = "B1LGkF_4vHA";
  const [playing, setPlaying] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-14 selection:bg-[#F58022]/20 selection:text-[#1F2A44] md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      {/* Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#3370F7]/12 blur-[110px]" />
        <div className="pointer-events-none absolute left-[8%] top-[38%] h-[320px] w-[320px] rounded-full bg-[#F58022]/10 blur-[90px]" />
        <div className="pointer-events-none absolute right-[6%] top-[42%] h-[280px] w-[280px] rounded-full bg-[#4C8FD6]/10 blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center text-center"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3370F7]/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#3370F7] shadow-sm backdrop-blur-md sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#F58022]/70" />
                <span className="relative h-2 w-2 rounded-full bg-[#F58022]" />
              </span>
              <span>
                <span className="font-bold">#1</span> in Live Cognitive Verification
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-4xl font-serif text-[2.35rem] font-bold leading-[1.08] tracking-tight text-[#1F2A44] sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.04]"
            >
              AI-Moderated Oral
              <br className="hidden sm:block" /> Assessment Platform
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#64748B] sm:mt-6 sm:text-xl md:text-2xl"
            >
              Where True Understanding Is{" "}
              <Cover className="mt-1">Spoken, Not Just Submitted.</Cover>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="group relative inline-flex h-14 w-full min-w-[220px] items-center justify-center overflow-hidden rounded-full p-[2px] font-bold text-white shadow-xl shadow-[#3370F7]/30 outline-none ring-1 ring-[#3370F7]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3370F7]/50 active:scale-95 sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAF1FE_0%,#3370F7_50%,#EAF1FE_100%)]" />
                <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#3370F7] px-8 text-base font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3370F7] group-hover:to-[#4C8FD6]">
                  Book a demo
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-8 text-base font-bold text-[#1F2A44] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md active:scale-95 sm:w-auto"
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Demo video */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 w-full max-w-4xl md:mt-16"
          >
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-[2.5rem] bg-gradient-to-b from-[#3370F7]/15 via-[#F58022]/8 to-transparent blur-2xl sm:-inset-x-10"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 p-1.5 shadow-[0_30px_80px_-28px_rgba(31,42,68,0.45)] backdrop-blur-sm sm:rounded-3xl sm:p-2">
              <div className="relative isolate aspect-video overflow-hidden rounded-xl bg-[#0f172a] sm:rounded-2xl">
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
                    <Image
                      src="/img/homepage/whatissmai.png"
                      alt="Socratic Metric AI oral assessment platform — demo video preview"
                      fill
                      priority
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-[#0f172a]/10 to-transparent transition-opacity duration-300 group-hover:from-[#0f172a]/65"
                      aria-hidden
                    />

                    <span className="relative flex flex-col items-center gap-3">
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#3370F7] text-white shadow-lg shadow-[#3370F7]/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4C8FD6] group-hover:shadow-xl sm:h-16 sm:w-16">
                        <span
                          className="absolute inset-0 animate-ping rounded-full bg-[#3370F7] opacity-25"
                          aria-hidden
                        />
                        <Play
                          className="relative ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7"
                          aria-hidden
                        />
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/35 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:text-xs">
                        Watch demo
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

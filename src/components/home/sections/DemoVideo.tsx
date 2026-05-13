"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import { youtubeEmbedSrc, youtubeThumbnailUrl } from "@/lib/youtubeEmbed";

const YOUTUBE_VIDEO_ID = "B1LGkF_4vHA";

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(() =>
    youtubeThumbnailUrl(YOUTUBE_VIDEO_ID, "maxresdefault"),
  );

  function onThumbError() {
    setThumbSrc((prev) => {
      if (prev.includes("maxresdefault")) {
        return youtubeThumbnailUrl(YOUTUBE_VIDEO_ID, "hqdefault");
      }
      if (prev.includes("hqdefault")) {
        return youtubeThumbnailUrl(YOUTUBE_VIDEO_ID, "mqdefault");
      }
      return prev;
    });
  }

  return (
    <section className="relative overflow-hidden bg-[#F1F5F9] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,112,247,0.08)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto max-w-full px-4 sm:px-6 md:px-12">
        <div className="mb-10 space-y-4 text-center md:mb-12">
          <span className="inline-block rounded-full border border-blue-100 bg-[#EAF1FE] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3370F7] shadow-sm">
            See it in action
          </span>
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#1F2A44] sm:text-3xl md:text-4xl lg:text-5xl">
            Watch Socratic Metric{" "}
            <span className="bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] text-transparent bg-clip-text">
              Evaluate Live
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full min-w-0 max-w-5xl"
        >
          <div className="pointer-events-none absolute -inset-1 rounded-[1.25rem] bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] opacity-20 blur-2xl sm:rounded-[2rem]" />

          {/* 16:9 responsive shell: scales with container width on all viewports */}
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
                <Image
                  src={thumbSrc}
                  alt="Socratic Metric demo video preview on YouTube"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1024px"
                  onError={onThumbError}
                  priority={false}
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
    </section>
  );
}

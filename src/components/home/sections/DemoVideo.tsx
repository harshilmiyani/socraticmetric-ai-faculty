"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Fancybox from "@/components/ui/Fancybox";
import { motion } from "framer-motion";

const YOUTUBE_VIDEO_ID = "B1LGkF_4vHA";

/** Home page demo — opens in Fancybox (YouTube). */
const YOUTUBE_DEMO_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;

function youtubeThumbUrl(id: string, quality: "maxresdefault" | "hqdefault" | "mqdefault") {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function DemoVideo() {
  const [thumbSrc, setThumbSrc] = useState(() =>
    youtubeThumbUrl(YOUTUBE_VIDEO_ID, "maxresdefault"),
  );

  function onThumbError() {
    setThumbSrc((prev) => {
      if (prev.includes("maxresdefault")) {
        return youtubeThumbUrl(YOUTUBE_VIDEO_ID, "hqdefault");
      }
      if (prev.includes("hqdefault")) {
        return youtubeThumbUrl(YOUTUBE_VIDEO_ID, "mqdefault");
      }
      return prev;
    });
  }

  return (
    <section className="relative overflow-hidden bg-[#F1F5F9] py-16 md:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,112,247,0.08)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-12 space-y-4 text-center">
          <span className="inline-block rounded-full border border-blue-100 bg-[#EAF1FE] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3370F7] shadow-sm">
            See it in action
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#1F2A44] md:text-4xl lg:text-5xl">
            Watch Socratic Metric <br className="hidden sm:block" />
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
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] opacity-20 blur-2xl" />

          <Fancybox
            className="relative w-full"
            options={{
              Youtube: {
                controls: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
          >
            <a
              href={YOUTUBE_DEMO_WATCH_URL}
              data-fancybox="home-demo-video"
              data-caption="Socratic Metric — Evaluate Live"
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-black shadow-2xl shadow-slate-200/80 md:rounded-3xl"
              aria-label="Play demo video: Socratic Metric Evaluate Live on YouTube"
            >
              {/* Official YouTube poster (falls back if max resolution is unavailable) */}
              <Image
                src={thumbSrc}
                alt="Socratic Metric demo video preview on YouTube"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, min(1280px, 90vw)"
                onError={onThumbError}
                priority={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" aria-hidden />

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#3370F7] text-white shadow-lg shadow-[#3370F7]/35 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4C8FD6] group-hover:shadow-xl group-hover:shadow-[#3370F7]/45 md:h-20 md:w-20">
                  <span
                    className="absolute inset-0 rounded-full bg-[#3370F7] opacity-30 animate-ping"
                    aria-hidden
                  />
                  <Play className="relative ml-1 h-8 w-8 fill-current md:h-10 md:w-10" aria-hidden />
                </div>
              </div>
            </a>
          </Fancybox>
        </motion.div>
      </div>
    </section>
  );
}

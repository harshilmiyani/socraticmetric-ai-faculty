"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { youtubeEmbedSrc, youtubeThumbnailUrl } from "@/lib/youtubeEmbed";

const VIDEOS = [
  {
    id: "hrCN-xNq6mQ",
    title: "Educators Side Portal",
    subtitle: "How instructors set up assessments, sessions, and review outcomes.",
    playLabel: "Play educators portal walkthrough on YouTube",
  },
  {
    id: "KSTdaYQ8PuI",
    title: "Student Side Portal",
    subtitle: "How learners join sessions and complete cognitive verification aloud.",
    playLabel: "Play student portal walkthrough on YouTube",
  },
] as const;

function WalkthroughPlayer({
  id,
  title,
  subtitle,
  playLabel,
}: (typeof VIDEOS)[number]) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(() =>
    youtubeThumbnailUrl(id, "maxresdefault"),
  );

  function onThumbError() {
    setThumbSrc((prev) => {
      if (prev.includes("maxresdefault")) {
        return youtubeThumbnailUrl(id, "hqdefault");
      }
      if (prev.includes("hqdefault")) {
        return youtubeThumbnailUrl(id, "mqdefault");
      }
      return prev;
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-serif text-xl font-bold text-[#1F2A44] sm:text-2xl">{title}</h3>
        <p className="mt-2 text-base text-[#64748B] leading-relaxed">{subtitle}</p>
      </div>

      <div className="relative mx-auto w-full min-w-0">
        <div className="pointer-events-none absolute -inset-1 rounded-[1.25rem] bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] opacity-15 blur-2xl sm:rounded-[2rem]" />

        <div className="relative isolate aspect-video w-full max-w-full overflow-hidden rounded-xl border border-slate-200/90 bg-black shadow-xl shadow-slate-200/60 sm:rounded-2xl md:rounded-3xl">
          {playing ? (
            <iframe
              src={youtubeEmbedSrc(id)}
              title={`${title} — YouTube walkthrough`}
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
              aria-label={playLabel}
            >
              <Image
                src={thumbSrc}
                alt={`${title} — YouTube thumbnail preview`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 48vw, 560px"
                onError={onThumbError}
                priority={false}
                draggable={false}
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 group-focus-visible:bg-black/20" aria-hidden />
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3370F7] text-white shadow-lg shadow-[#3370F7]/35 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4C8FD6] sm:h-14 sm:w-14 md:h-16 md:w-16">
                <span className="absolute inset-0 rounded-full bg-[#3370F7] opacity-30 animate-ping" aria-hidden />
                <Play className="relative ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7 md:h-8 md:w-8" aria-hidden />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function EducationWalkthroughVideos() {
  return (
    <section
      id="platform-walkthrough"
      className="relative overflow-hidden bg-transparent py-10 md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,112,247,0.06)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center">
          <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3370F7] shadow-sm">
            Platform walkthroughs
          </span>
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#1F2A44] sm:text-3xl md:text-4xl lg:text-[2.65rem]">
            See how the{" "}
            <span className="bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] bg-clip-text text-transparent">
              educator and student portals
            </span>{" "}
            work
          </h2>
          <p className="text-lg text-[#64748B] md:text-xl">
            Step-through videos for setting up assessments on the educator side and completing
            verified sessions from the learner experience.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {VIDEOS.map((video, index) => (
            <div
              key={video.id}
             
             
             
             
            >
              <WalkthroughPlayer {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

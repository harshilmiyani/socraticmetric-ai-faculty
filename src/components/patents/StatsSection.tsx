"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Globe2, CalendarRange, Sparkles } from "lucide-react";

export function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    {
      value: "4",
      description: "Issued AI patents",
      icon: Award,
      accent: "from-[#3370F7] to-[#4C8FD6]",
      iconBg: "bg-blue-50 text-[#3370F7]",
    },
    {
      value: "International",
      description: "Jurisdiction coverage",
      icon: Globe2,
      accent: "from-[#3370F7] to-[#1F2A44]",
      iconBg: "bg-slate-100 text-[#1F2A44]",
    },
    {
      value: "2024–2026",
      description: "Issue date range",
      icon: CalendarRange,
      accent: "from-[#F58022] to-[#D16D1A]",
      iconBg: "bg-orange-50 text-[#F58022]",
    },
    {
      value: "Proprietary",
      description: "Oral verification technology",
      icon: Sparkles,
      accent: "from-[#3370F7] via-[#4C8FD6] to-[#F58022]",
      iconBg: "bg-[#EAF1FE] text-[#3370F7]",
    },
  ];

  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[min(100vw,720px)] w-[min(100vw,720px)] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3370F7]/[0.06] blur-[80px] sm:blur-[100px]" />
        <div className="absolute -right-[30%] top-0 h-[min(55vw,280px)] w-[min(55vw,280px)] rounded-full bg-[#F58022]/[0.07] blur-[70px] sm:-right-[20%] sm:h-[min(45vw,360px)] sm:w-[min(45vw,360px)] sm:blur-[90px] md:-right-[15%] md:h-[400px] md:w-[400px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_0.5px,transparent_0.5px),linear-gradient(to_bottom,#94a3b8_0.5px,transparent_0.5px)] bg-[size:28px_28px] opacity-[0.08] sm:bg-[size:36px_36px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_45%,#000_15%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              Portfolio snapshot
            </span>
          </div>
          <h2 className="font-serif text-xl font-bold leading-tight tracking-tight text-[#1F2A44] min-[380px]:text-2xl sm:text-[1.625rem] md:text-3xl lg:text-4xl">
            IP at a glance
          </h2>
        </div>

        <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const motionOff = Boolean(prefersReducedMotion);
            return (
              <motion.li
                key={index}
                initial={motionOff ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.2 }}
                transition={{
                  duration: motionOff ? 0 : 0.5,
                  delay: motionOff ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-w-0"
              >
                <div
                  className={`pointer-events-none absolute -inset-px rounded-[1.25rem] bg-gradient-to-br opacity-0 blur-[1px] transition-opacity duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 sm:rounded-[1.35rem] ${stat.accent}`}
                />
                <div className="relative flex min-h-0 flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-md transition-[transform,box-shadow,border-color] duration-500 min-[480px]:min-h-[200px] sm:rounded-3xl sm:p-6 sm:min-h-[210px] md:gap-6 md:p-8 md:min-h-[220px] [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-slate-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:shadow-lg active:scale-[0.99] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:motion-reduce:transform-none">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.04] shadow-sm transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl ${stat.iconBg}`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </div>
                    <div
                      className={`mt-1.5 h-1.5 w-8 shrink-0 rounded-full bg-gradient-to-r opacity-80 sm:mt-2 sm:w-10 ${stat.accent}`}
                      aria-hidden
                    />
                  </div>

                  <div className="min-w-0">
                    <div
                      className={`mb-1.5 font-serif text-lg font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br sm:mb-2 sm:text-xl md:text-2xl lg:text-lg lg:leading-snug xl:text-xl 2xl:text-2xl ${stat.accent}`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-pretty text-xs font-semibold leading-snug text-[#64748B] sm:text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

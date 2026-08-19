"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#101728] py-24 md:py-36">
      {/* Subtle ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute -left-[15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#3370F7]/10 blur-[130px]" />
        <div className="absolute -right-[10%] bottom-0 h-[400px] w-[400px] rounded-full bg-[#F58022]/6 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-24px" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-16"
        >
          {/* Left: headline + supporting copy */}
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Start with one
              <br />
              session.
              <br />
              <em className="font-serif italic text-[#8FB0F5]">
                See the proof for yourself.
              </em>
            </h2>

            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Whether you&apos;re assessing students, employees, or personnel,
              most organizations begin with a single pilot. We handle the
              questioning, capture, and evaluation — you keep full control over
              standards, rubrics, and final decisions.
            </p>
          </div>

          {/* Right: CTA button */}
          <div className="w-full shrink-0 md:w-auto">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#3370F7] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4C8FD6] hover:shadow-xl hover:shadow-[#3370F7]/40 active:scale-95"
            >
              Book a demo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

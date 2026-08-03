"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Socratic Metric completely changed how we assess student understanding. Instead of grading essays, we now know who truly grasped the material.",
    name: "Dr. Sarah Ellison",
    title: "Dean of Academic Affairs",
    org: "Westcliff University",
    initials: "SE",
    color: "from-[#3370F7] to-[#4C8FD6]",
    rating: 5,
  },
  {
    quote:
      "Our compliance training was just checkbox exercises until Socratic Metric. Now employees must actually defend their understanding out loud.",
    name: "Marcus Webb",
    title: "Head of Compliance",
    org: "Enterprise Solutions",
    initials: "MW",
    color: "from-emerald-500 to-teal-500",
    rating: 5,
  },
  {
    quote:
      "For high-stakes roles, we can't afford gaps. Socratic Metric gives us audit-ready proof that our operators are truly prepared.",
    name: "James Hartley",
    title: "Director of Readiness",
    org: "Federal Agency",
    initials: "JH",
    color: "from-[#F58022] to-amber-500",
    rating: 5,
  },
  {
    quote:
      "Before Socratic Metric, students could submit AI-written work and pass. Now the oral component makes academic integrity enforceable.",
    name: "Prof. Linda Chao",
    title: "Prof. of Computer Science",
    org: "State University",
    initials: "LC",
    color: "from-violet-500 to-purple-500",
    rating: 5,
  },
  {
    quote:
      "The AI adapts its questions based on what you say — you can't memorize a script. Our teams are sharper and more confident.",
    name: "Priya Nair",
    title: "VP of Development",
    org: "Global Tech Group",
    initials: "PN",
    color: "from-rose-500 to-pink-500",
    rating: 5,
  },
  {
    quote:
      "Implementation was seamless. Immediate feedback meant our staff could correct misconceptions in real time. Highly effective.",
    name: "Thomas Brandt",
    title: "Chief Learning Officer",
    org: "Brandt Associates",
    initials: "TB",
    color: "from-sky-500 to-blue-500",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current || e.pointerType !== "mouse") return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current || e.pointerType !== "mouse") return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-14 md:py-24"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl text-center md:text-left"
          >
            <span className="mb-4 inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="mb-4 font-serif text-3xl font-bold leading-tight text-[#1F2A44] sm:text-4xl lg:text-5xl"
            >
              Trusted by Leaders Who{" "}
              <span className="bg-gradient-to-r from-[#3370F7] to-[#4C8FD6] bg-clip-text text-transparent">
                Demand Real Proof
              </span>
            </h2>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
              Hear from educators, compliance leaders, and government directors who replaced guesswork with verified understanding.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#3370F7] hover:bg-[#EAF1FE] hover:text-[#3370F7] active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#3370F7] hover:bg-[#3370F7] hover:text-white active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 px-6 md:-mx-12 md:px-12">
          {/* Edge fades */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-[#F0F6FF] to-transparent md:w-16" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-6 bg-gradient-to-l from-[#F0F6FF] to-transparent md:w-16" />

          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-4 [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing select-none snap-none" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                className="group relative flex w-[280px] shrink-0 snap-center snap-always flex-col overflow-hidden rounded-[20px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/80 sm:w-[320px]"
              >
                {/* Accent Top Line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-opacity group-hover:opacity-100 ${t.color}`}
                />

                {/* Rating & Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <StarRating count={t.rating} />
                  <Quote className="h-6 w-6 text-slate-100 transition-colors group-hover:text-slate-200" />
                </div>

                {/* Quote Text */}
                <p className="flex-1 text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-sm ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#1F2A44]">{t.name}</p>
                    <p className="truncate text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Buttons (visible only on small screens) */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm active:scale-95"
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

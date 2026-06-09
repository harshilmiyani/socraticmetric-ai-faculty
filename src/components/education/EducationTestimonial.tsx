"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Socratic Metric empowers students to move beyond surface-level thinking. It's like giving every student a co-pilot for critical thinking—ensuring they don't just submit work, but truly understand and defend their ideas. It has restored the confidence we need in our grading.",
    name: "Dr. Sarah Mitchell",
    title: "Professor of Computer Science",
    org: "State University",
    initials: "SM",
    color: "from-[#3370F7] to-[#4C8FD6]",
    rating: 5,
  },
  {
    quote:
      "Academic integrity in the AI era cannot be solved with plagiarism detectors. Socratic Metric's oral verification is the only method we've found that reliably measures actual human reasoning at scale.",
    name: "Dr. Arthur Vance",
    title: "Director of Honor Systems",
    org: "Ivy League College",
    initials: "AV",
    color: "from-[#F58022] to-[#D16D1A]",
    rating: 5,
  },
  {
    quote:
      "My students actually enjoy the conversational nature of Socratic Metric. It reduces traditional exam anxiety while ensuring that they aren't copy-pasting from Large Language Models.",
    name: "Prof. Elena Rostova",
    title: "Chair of Humanities",
    org: "Western Institute",
    initials: "ER",
    color: "from-violet-500 to-purple-500",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function EducationTestimonial() {
  return (
    <section className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-[#3370F7]/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[min(90vw,500px)] h-[min(90vw,500px)] bg-[#F58022]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
              Voices
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44]">
            What Educators are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-md shadow-blue-900/5 hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r ${t.color}`} />

              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-slate-200 fill-slate-100" />
              </div>

              {/* Star rating */}
              <div className="mb-3">
                <StarRating count={t.rating} />
              </div>

              {/* Quote text */}
              <blockquote className="text-[#64748B] text-base leading-relaxed flex-grow italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <cite className="font-bold text-[#1F2A44] text-sm not-italic block truncate">{t.name}</cite>
                  <span className="text-slate-400 text-xs block truncate">{t.title}</span>
                  <span className="text-slate-400 text-xs block truncate font-medium">{t.org}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

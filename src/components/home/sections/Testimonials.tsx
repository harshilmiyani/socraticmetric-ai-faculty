"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Socratic Metric completely changed how we assess student understanding. Instead of grading essays, we now know who truly grasped the material. The difference in results is night and day.",
    name: "Dr. Sarah Ellison",
    title: "Dean of Academic Affairs",
    org: "Westcliff University",
    initials: "SE",
    color: "from-[#3370F7] to-[#4C8FD6]",
    rating: 5,
  },
  {
    quote:
      "Our compliance training was just checkbox exercises until Socratic Metric. Now employees must actually defend their understanding out loud. We've caught critical gaps we never knew existed.",
    name: "Marcus Webb",
    title: "Head of Compliance",
    org: "Enterprise Solutions Inc.",
    initials: "MW",
    color: "from-emerald-500 to-teal-500",
    rating: 5,
  },
  {
    quote:
      "For high-stakes public sector roles, we can't afford knowledge gaps. Socratic Metric gives us audit-ready proof that our operators are truly prepared — not just paper-certified.",
    name: "Col. James Hartley (Ret.)",
    title: "Director of Training & Readiness",
    org: "Federal Agency",
    initials: "JH",
    color: "from-[#F58022] to-amber-500",
    rating: 5,
  },
  {
    quote:
      "Before Socratic Metric, students could submit AI-written work and pass. Now the oral component means every student has to actually know the content. Academic integrity is finally enforceable.",
    name: "Prof. Linda Chao",
    title: "Professor of Computer Science",
    org: "State University",
    initials: "LC",
    color: "from-violet-500 to-purple-500",
    rating: 5,
  },
  {
    quote:
      "The AI adapts its questions based on what you say — you can't memorize a script. Our teams are sharper and more confident knowing they've actually been tested, not just assessed on paper.",
    name: "Priya Nair",
    title: "VP of People & Development",
    org: "Global Tech Group",
    initials: "PN",
    color: "from-rose-500 to-pink-500",
    rating: 5,
  },
  {
    quote:
      "Implementation was seamless, and the immediate feedback loop meant our staff could correct misconceptions in real time. It's the most effective professional development tool we've used.",
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
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-14 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#EAF1FE]/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 max-w-2xl mx-auto space-y-3"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
            Trusted by Leaders Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]">
              Demand Real Proof
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Hear from educators, compliance leaders, and government directors who replaced guesswork with verified understanding.
          </p>
        </motion.div>

        {/* Infinite Marquee section */}
        <div className="relative overflow-hidden w-full pb-12 pt-4 -mx-4 px-4 md:-mx-8 md:px-8">
          {/* Fading edges for smooth enter/exit */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div
            className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]"
            style={{ "--animation-duration": "40s" } as React.CSSProperties}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${t.color}`} />

                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-7 h-7 text-slate-200 fill-slate-100" />
                </div>

                {/* Star rating */}
                <StarRating count={t.rating} />

                {/* Quote text */}
                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#1F2A44] text-sm truncate">{t.name}</p>
                    <p className="text-slate-400 text-xs truncate">{t.title} · {t.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

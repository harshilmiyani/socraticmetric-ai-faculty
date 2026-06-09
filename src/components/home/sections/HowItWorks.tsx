"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,128,34,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-[#F58022] font-bold text-xs tracking-widest uppercase shadow-sm">
            The Process
          </span>
          <h2 id="how-it-works-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
            How Socratic Metric Works
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A seamless, adaptive workflow that transforms static documentation into dynamic, real-time verification.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center items-center relative"
        >
          <img
            src="/img/homepage/smhome-1.png"
            alt="How Socratic Metric Works — step-by-step AI oral assessment workflow diagram"
            width={1000}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[1000px] h-auto rounded-xl shadow-md border border-slate-100 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}


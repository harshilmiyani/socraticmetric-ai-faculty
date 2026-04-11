"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,128,34,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-[#F58022] font-bold text-xs tracking-widest uppercase shadow-sm">
            The Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
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
          <iframe 
            src="/animation/visual-4-how-it-works.html" 
            className="w-full max-w-[880px] h-[750px] sm:h-[850px] md:h-[580px] lg:h-[600px] border-none block"
            title="How SocraticMetric Works"
            scrolling="no" 
          />
        </motion.div>
      </div>
    </section>
  );
}

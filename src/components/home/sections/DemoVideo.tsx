"use client";

import { Play } from "lucide-react";
import Fancybox from "@/components/ui/Fancybox";
import { motion } from "framer-motion";

export function DemoVideo() {
  return (
    <section className="py-16 md:py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,112,247,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[#EAF1FE] border border-blue-100 text-[#3370F7] font-bold text-xs tracking-widest uppercase shadow-sm">
            See it in action
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
            Watch Socratic Metric <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]">
              Evaluate Live
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3370F7] via-[#4C8FD6] to-[#F58022] rounded-[2rem] blur-2xl opacity-20" />
          
          <Fancybox className="w-full relative">
            <a 
              href="https://drive.google.com/file/d/1GRS5ZKMtdf8jd1ldQO4XcPo7buWkYRiP/preview" 
              data-fancybox 
              data-type="iframe"
              className="relative group block w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-slate-900 aspect-video flex items-center justify-center"
            >
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/80" />
              
              <div className="relative z-10 flex flex-col items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                 <div className="relative flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/20 text-white group-hover:bg-[#3370F7] group-hover:border-[#3370F7] group-hover:shadow-[0_0_40px_rgba(51,112,247,0.4)] transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20 group-hover:bg-[#3370F7]/40" />
                    <Play className="h-8 w-8 md:h-10 md:w-10 fill-current ml-1 md:ml-2" />
                 </div>
                 <p className="mt-6 text-white/80 font-medium tracking-wide text-xs md:text-sm uppercase">Play Demo Video</p>
              </div>
            </a>
          </Fancybox>
        </motion.div>
      </div>
    </section>
  );
}

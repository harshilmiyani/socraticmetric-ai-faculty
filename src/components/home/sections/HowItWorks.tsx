"use client";

import Image from "next/image";
import { FileText, Mic, Brain, Repeat, Play } from "lucide-react";
import { motion } from "framer-motion";
import Fancybox from "@/components/ui/Fancybox";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6">How it Works</h2>
          <p className="text-lg text-slate-600">
            A structured 4-step workflow designed to verify identity and deep understanding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6B35]/30 to-transparent -z-10"></div>
          
          {[
            {
              icon: FileText,
              title: "1. Read Aloud",
              desc: "Student reads the question aloud. System verifies 70% reading accuracy before unlocking the answer step."
            },
            {
              icon: Mic,
              title: "2. Speak Naturally",
              desc: "Student answers as if explaining to a friend. No scripts allowed—just authentic verbal reasoning."
            },
            {
              icon: Brain,
              title: "3. Read Feedback",
              desc: "AI provides immediate critique. Student must read this feedback aloud to ensure engagement."
            },
            {
              icon: Repeat,
              title: "4. Iterate & Refine",
              desc: "Student can re-record up to 5 times to improve their score based on the feedback."
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300">
                <step.icon className="h-10 w-10 text-[#0F2C4C] group-hover:scale-110 group-hover:text-[#FF6B35] transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2C4C] mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 w-full"
        >
          <Fancybox className="w-full">
            <a 
              href="https://drive.google.com/file/d/1GRS5ZKMtdf8jd1ldQO4XcPo7buWkYRiP/preview" 
              data-fancybox 
              data-type="iframe"
              className="relative group block w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <div className="aspect-video bg-slate-900 relative flex items-center justify-center">
                 {/* Thumbnail Image */}
                 <Image 
                    src="/img/logo-light-video.png" 
                    alt="Platform Walkthrough" 
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                 
                 {/* Play Button */}
                 <div className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 z-10 shadow-lg shadow-black/20">
                    <Play className="h-8 w-8 text-white fill-current ml-1" />
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                    <p className="text-white font-bold text-lg md:text-xl tracking-wide text-center">See the platform in action</p>
                 </div>
              </div>
            </a>
          </Fancybox>
        </motion.div>
      </div>
    </section>
  );
}

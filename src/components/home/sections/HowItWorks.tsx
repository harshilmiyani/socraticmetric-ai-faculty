"use client";

import { Upload, Mic, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Curate Content",
      desc: "Upload course materials, policies, or operational doctrine"
    },
    {
      icon: Mic,
      title: "Conduct Oral Session",
      desc: "AI presents adaptive questions; user responds aloud"
    },
    {
      icon: Award,
      title: "Verify & Score",
      desc: "Platform evaluates reasoning depth and produces audit-ready records"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Glass Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">How It Works</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative group max-w-sm p-6 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-white/50">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-200 group-hover:-translate-y-1 transition-transform duration-300">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2A44] mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
              
              {/* Arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-[calc(2rem+1px)] -translate-y-1/2 text-blue-200 z-20">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function WhyItMattersHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#EAF6FF] to-[#F0F9FF]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="text-xs font-bold tracking-widest text-[#3370F7] uppercase">
                WHY SOCRATIC METRIC MATTERS
              </div>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.1]">
              Verify Real Understanding When AI <br />
              Can Write It
            </h1>

            <p className="text-lg text-[#85756F] max-w-xl leading-relaxed">
              Socratic Metric is the oral verification platform that confirms people can explain, reason through, and defend high-stakes work. Don't let AI-generated documentation hide comprehension gaps—get defensible proof before grades, decisions, or operations go live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <Button
                  className="rounded-full px-8 h-12 bg-[#3370F7] text-white hover:bg-[#285ecf] shadow-lg shadow-[#4C8FD6]/30 transition-all font-medium text-base"
                >
                  Talk to our team
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full bg-white rounded-3xl shadow-xl shadow-[#4C8FD6]/20 border border-white/50 backdrop-blur-sm">
              {/* Image/Video Placeholder */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

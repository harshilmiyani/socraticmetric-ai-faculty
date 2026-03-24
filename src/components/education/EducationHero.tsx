"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function EducationHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#EAF1FE] via-[#F0E6FE] to-[#EAF1FE]">
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
                HOME / THE NEW RISK / EDUCATION
              </div>
              <h2 className="text-sm font-bold tracking-widest text-[#3370F7] uppercase">
                EDUCATION
              </h2>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.1]">
              When AI can write the essay, <br />
              can your student defend it?
            </h1>

            <p className="text-lg text-[#85756F] max-w-xl leading-relaxed">
              AI-written assignments make it harder to know who actually understands the material. 
              Oral verification helps you confirm real learning in high-stakes education environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <Button
                  className="rounded-full px-8 h-12 bg-[#3370F7] text-white hover:bg-[#285ecf] shadow-lg shadow-[#4C8FD6]/30 transition-all font-medium text-base"
                >
                  Talk to our team
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="ghost"
                  className="h-12 text-[#85756F] hover:text-[#3370F7] font-medium text-base hover:bg-transparent px-0 sm:px-4 justify-start"
                >
                  See how oral verification works
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

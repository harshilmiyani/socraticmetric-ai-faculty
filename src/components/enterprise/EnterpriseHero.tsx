"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function EnterpriseHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FDE6B8] via-[#EAF1FE] to-[#D0E6F8]">
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
                HOME / THE NEW RISK / ENTERPRISE
              </div>
              <h2 className="text-sm font-bold tracking-widest text-[#3370F7] uppercase">
                ENTERPRISE
              </h2>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.1]">
              When AI can draft the policy, <br />
              can your team reason through it?
            </h1>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
              AI-generated documents, policies, and reports can look polished without reflecting real understanding. 
              Oral verification helps you confirm that employees and leaders can reason through what they're approving and acting on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <Button
                  className="rounded-full px-8 h-12 bg-[#3370F7] text-white hover:bg-[#285ecf] shadow-lg shadow-blue-200 transition-all font-medium text-base"
                >
                  Talk to our team
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="ghost"
                  className="h-12 text-slate-700 hover:text-[#3370F7] font-medium text-base hover:bg-transparent px-0 sm:px-4 justify-start"
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
            <div className="aspect-[4/3] w-full bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-white/50 backdrop-blur-sm">
              {/* Image/Video Placeholder */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

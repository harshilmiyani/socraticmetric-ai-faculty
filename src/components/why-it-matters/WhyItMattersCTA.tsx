"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function WhyItMattersCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#7aa0c9] to-[#3370F7] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="text-left max-w-2xl">
            <h2 className="font-sans text-3xl md:text-5xl font-bold mb-6">
              Ready to Verify Real Understanding?
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
              See Socratic Metric's oral verification platform in action. Discover how it verifies real understanding for your high-stakes workflows.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center md:items-end">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-xl shadow-orange-500/20 px-10 h-14 text-lg rounded-lg font-bold transition-all hover:scale-105"
              >
                Request a Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
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
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="inline-flex h-14 items-center justify-center rounded-lg bg-[#F58022] px-10 text-lg font-bold text-white shadow-xl shadow-orange-500/20 transition-all hover:scale-105 hover:bg-[#D16D1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

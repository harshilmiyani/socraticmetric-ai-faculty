"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function GovernmentCTA() {
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
              Ready to strengthen mission readiness?
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
              Partner with us to design oral verification workflows that support your operational, safety, and compliance requirements.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center md:items-end">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-xl shadow-orange-500/20 px-10 h-14 text-lg rounded-lg font-bold transition-all hover:scale-105"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <Link 
              href="#" 
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors hover:opacity-100 opacity-80 text-sm"
            >
              Download the government & aerospace overview
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

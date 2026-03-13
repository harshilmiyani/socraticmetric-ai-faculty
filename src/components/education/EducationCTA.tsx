"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function EducationCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2EA3C7] to-[#3370F7] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="font-sans text-3xl md:text-5xl font-bold mb-6">
            Ready to protect learning integrity?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Partner with us to design oral verification workflows that fit your programs, faculty, and accreditation requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-xl shadow-orange-500/20 px-10 h-14 text-lg rounded-full font-bold transition-all hover:scale-105"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <Link 
              href="#" 
              className="flex items-center gap-2 text-white/90 hover:text-white underline underline-offset-4 font-medium transition-colors hover:opacity-100 opacity-80"
            >
              <Download className="w-4 h-4" />
              Download the Higher Education Overview
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

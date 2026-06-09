"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Shield, ArrowRight } from "lucide-react";
import { ParticleNetwork } from "@/components/home/ParticleNetwork";

const industries = [
  {
    id: "education",
    label: "Education",
    href: "/education",
    icon: GraduationCap,
    tagline: "For Universities & Schools",
    description:
      "Protect degree value and eliminate AI-assisted cheating with live oral assessments that prove genuine understanding.",
    cta: "Explore Education",
    image: "/img/homepage/education-sm.jpg",
    imagePlaceholderBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconColor: "text-[#3370F7]",
    iconBg: "bg-[#3370F7]/10",
    badgeBg: "bg-[#3370F7]/10 border-[#3370F7]/20 text-[#3370F7]",
    ctaBg: "bg-[#3370F7] hover:bg-[#2558d6] shadow-[#3370F7]/30",
    accentBar: "bg-[#3370F7]",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "/enterprise",
    icon: Building2,
    tagline: "For Corporate Teams",
    description:
      "Verify that your workforce can truly defend compliance decisions and demonstrate expertise under real scrutiny.",
    cta: "Explore Enterprise",
    image: "/img/homepage/enterprise-sm.jpg",
    imagePlaceholderBg: "bg-gradient-to-br from-emerald-100 to-emerald-200",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    ctaBg: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30",
    accentBar: "bg-emerald-500",
  },
  {
    id: "government",
    label: "Government",
    href: "/government",
    icon: Shield,
    tagline: "For Public Sector & Agencies",
    description:
      "Ensure mission-critical operators can perform under pressure with verifiable, audit-ready readiness assessments.",
    cta: "Explore Government",
    image: "/img/homepage/government-sm.jpg",
    imagePlaceholderBg: "bg-gradient-to-br from-rose-100 to-rose-200",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-500/10",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
    ctaBg: "bg-rose-600 hover:bg-rose-700 shadow-rose-600/30",
    accentBar: "bg-rose-500",
  },
];

export function IndustryShortcuts() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="py-16 md:py-24 bg-[#F1F5F9] relative overflow-hidden"
    >
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Interactive Particle Network */}
        <ParticleNetwork />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-xs tracking-widest uppercase shadow-sm">
            Built for Every Sector
          </span>
          <h2 id="solutions-heading" className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
            AI Assessment for Education,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#4C8FD6]">Enterprise &amp; Government</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Socratic Metric is purpose-built for the unique verification needs of each industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Area */}
              <div className={`relative w-full aspect-[16/9] overflow-hidden ${ind.image ? "" : ind.imagePlaceholderBg}`}>
                {ind.image ? (
                  <Image
                    src={ind.image}
                    alt={`Socratic Metric for ${ind.label}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  /* Placeholder — will be replaced with your image */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-40">
                    <div className={`w-16 h-16 rounded-2xl ${ind.iconBg} flex items-center justify-center`}>
                      <ind.icon className={`w-8 h-8 ${ind.iconColor}`} />
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Image coming soon</p>
                  </div>
                )}

                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />

                {/* Accent bar at top */}
                <div className={`absolute top-0 inset-x-0 h-1 ${ind.accentBar}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-4 ${ind.badgeBg}`}>
                  <ind.icon className="w-3 h-3" />
                  {ind.tagline}
                </div>

                <h3 className="text-xl font-bold text-[#1F2A44] mb-2">{ind.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{ind.description}</p>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={ind.href}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${ind.ctaBg}`}
                  >
                    {ind.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

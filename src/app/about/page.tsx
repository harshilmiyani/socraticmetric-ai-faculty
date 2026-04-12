"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, Upload, Check, Activity } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero / Our Story */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6 max-w-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-[#3370F7]" />
                  <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Our Story</span>
                  <div className="h-px w-8 bg-[#3370F7]" />
                </div>
                
                <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
                  Bringing <br />
                  <span className="text-[#3370F7]">Accountability</span> <br />
                  to the Age of AI
                </h1>
                
                <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
                  Socratic Metric was founded on a simple belief: if someone signs off on high-stakes work, they should be able to explain it. We built the platform that makes that provable.
                </p>
              </motion.div>

              {/* Right: UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl shadow-[#3370F7]/10 border border-slate-100 overflow-hidden flex flex-col">
                  {/* Browser Header */}
                  <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-rose-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Verification Session · Live</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 md:p-10 space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-6 relative">
                      <div className="absolute left-[1.125rem] top-10 bottom-[-2rem] w-px bg-slate-200" />
                      <div className="w-9 h-9 shrink-0 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3370F7] z-10">
                        <Upload className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#3370F7] uppercase tracking-wider mb-1">Step 01</p>
                        <h4 className="font-bold text-[#1F2A44] text-lg mb-2">Curate Content</h4>
                        <p className="text-sm text-[#64748B] leading-relaxed">Upload materials, policies, or operational doctrine. The platform builds adaptive question sets automatically.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6 relative">
                      <div className="absolute left-[1.125rem] top-10 bottom-[-2rem] w-px bg-slate-200" />
                      <div className="w-9 h-9 shrink-0 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F58022] z-10">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#F58022] uppercase tracking-wider mb-1">Step 02</p>
                        <h4 className="font-bold text-[#1F2A44] text-lg mb-2">Conduct Oral Session</h4>
                        <p className="text-sm text-[#64748B] leading-relaxed mb-3">AI moderates real-time dialogue. Respondents articulate and defend their understanding aloud.</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Session in progress
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6 relative">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 z-10">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">Step 03</p>
                        <h4 className="font-bold text-[#1F2A44] text-lg mb-2">Verify & Score</h4>
                        <p className="text-sm text-[#64748B] leading-relaxed">Platform evaluates reasoning depth and produces timestamped, audit-ready records that withstand scrutiny.</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="grid grid-cols-3 border-t border-slate-100 bg-slate-50/50 p-6 text-center divide-x divide-slate-200">
                    <div>
                      <p className="text-xl font-bold text-[#3370F7]">3K+</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Concurrent users</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#3370F7]">4</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">US Patents</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#3370F7]">99.9%</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Audit accuracy</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. How We Got Here (Timeline) */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#F58022] font-bold text-sm tracking-widest uppercase">How We Got Here</span>
                <div className="h-px w-12 bg-[#F58022]" />
              </div>
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
                From a single question <br />
                <span className="text-[#3370F7]">to a new standard of proof.</span>
              </h2>
            </div>

            <div className="space-y-0">
              {/* Timeline Item 1 */}
              <div className="flex gap-6 md:gap-10 relative pb-16">
                <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-slate-200" />
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#3370F7] flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-[#3370F7]/30">
                  01
                </div>
                <div className="pt-1">
                  <p className="text-[10px] font-bold text-[#3370F7] uppercase tracking-wider mb-2">The Problem · 2021</p>
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">AI Can Write It. Can You Defend It?</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    Our founders watched a pattern emerge across healthcare audits, engineering sign-offs, and university assessments: polished AI-generated documents were being accepted as proof of genuine understanding. Nobody was asking the harder question — does the person signing this actually know what it says?
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3370F7] text-xs font-semibold">
                    The insight that started everything
                  </span>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6 md:gap-10 relative pb-16">
                <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-slate-200" />
                <div className="w-9 h-9 shrink-0 rounded-full bg-white border-2 border-[#3370F7] flex items-center justify-center text-[#3370F7] font-bold text-sm z-10">
                  02
                </div>
                <div className="pt-1">
                  <p className="text-[10px] font-bold text-[#3370F7] uppercase tracking-wider mb-2">The Science · 2022</p>
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">Grounding in Cognitive Research</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    We partnered with cognitive scientists to understand how real comprehension is tested. The research was unambiguous: oral explanation, adaptive questioning, and real-time reasoning under gentle pressure are the most reliable signals of genuine understanding — not written output, not multiple choice, not rubric scores.
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3370F7] text-xs font-semibold">
                    Backed by peer-reviewed science
                  </span>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6 md:gap-10 relative pb-16">
                <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-slate-200" />
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#3370F7] flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-[#3370F7]/30">
                  03
                </div>
                <div className="pt-1">
                  <p className="text-[10px] font-bold text-[#3370F7] uppercase tracking-wider mb-2">The Platform · 2023</p>
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">Building What Didn't Exist</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    We built Socratic Metric from the ground up: an AI-moderated oral verification platform that doesn't grade documents — it evaluates live cognition. Every session produces a tamper-evident, timestamped audit record. Four US patents were issued covering the core methodology.
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3370F7] text-xs font-semibold">
                    4 issued US patents
                  </span>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-6 md:gap-10 relative">
                <div className="w-9 h-9 shrink-0 rounded-full bg-white border-2 border-[#3370F7] flex items-center justify-center text-[#3370F7] font-bold text-sm z-10">
                  04
                </div>
                <div className="pt-1">
                  <p className="text-[10px] font-bold text-[#3370F7] uppercase tracking-wider mb-2">Today · 2026</p>
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">A New Standard for High-Stakes Environments</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">
                    Socratic Metric is now trusted across higher education, enterprise compliance, and government operations. Over 3,000 concurrent users rely on the platform to prove — not just assume — that the right people truly understand the work they're accountable for.
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#F58022] text-xs font-semibold">
                    3,000+ verified users today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why We Exist */}
        <section className="py-20 md:py-32 bg-[#F8FAFC]">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6">Why We Exist</h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                AI has made it effortless to generate polished documentation, reports, and analyses. But polished output doesn't mean real understanding. In high-stakes environments — healthcare, engineering, compliance, education — the gap between what's written and what's understood creates real risk. Socratic Metric closes that gap.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#3370F7] mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Verification Over Documentation</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Written records show what was produced. Oral verification proves what was understood.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F58022] mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Science-Backed Rigor</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Our approach is grounded in peer review cognitive science and research, protected by four issued US patents.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Defensible Proof</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Every verification session creates an auditable, timestamped record that stands up to scrutiny.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Team */}
        <section className="py-20 md:py-32 bg-[#F0F4F8]">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">The Team</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {/* Team 1 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#3370F7] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#3370F7]/20">
                  SC
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Sarah Chen</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                  Dedicated to building systems that ensure human accountability remains at the center of critical decision-making.
                </p>
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#1F2A44] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#1F2A44]/20">
                  MW
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Dr. Marcus Webb</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">Chief Science Officer</p>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                  Dedicated to building systems that ensure human accountability remains at the center of critical decision-making.
                </p>
              </div>

              {/* Team 3 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#F58022] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#F58022]/20">
                  ER
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Elena Rodriguez</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">Head of Product</p>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                  Dedicated to building systems that ensure human accountability remains at the center of critical decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <ContactSection />

      </main>
      <Footer />
    </div>
  );
}

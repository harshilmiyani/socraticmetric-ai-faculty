"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, Upload, Check, Activity } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero / Our Story */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6 max-w-2xl"
              >
                <div className="mb-4">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-[#EAF1FE] border border-[#3370F7]/20 text-[#3370F7] font-bold text-xs tracking-widest uppercase">
                    Our Story
                  </span>
                </div>
                
                <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
                  Bringing <br />
                  <span className="text-[#3370F7]">Verified Cognition</span> <br />
                  to the Age of AI
                </h1>
                
                <div className="space-y-4 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
                  <p>
                    Socratic Metric™ was founded on a critical insight: when AI can generate flawless
                    documentation, written output is no longer reliable proof of understanding.
                  </p>
                  <p>We built the platform to prove genuine human comprehension.</p>
                </div>
              </motion.div>

              {/* Right: UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl shadow-[#3370F7]/10 border border-blue-100 overflow-hidden flex flex-col">
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
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          Upload course materials, policies, engineering frameworks, or operational
                          doctrine to automatically build adaptive question sets.
                        </p>
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
                        <p className="text-sm text-[#64748B] leading-relaxed mb-3">
                          AI moderates real-time dialogue, requiring respondents to articulate, refine,
                          and defend their reasoning aloud.
                        </p>
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
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          The platform evaluates live cognition and produces timestamped,
                          identity-verified audit records that withstand scrutiny.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="grid grid-cols-3 border-t border-slate-100 bg-slate-50/50 p-6 text-center divide-x divide-slate-200">
                    <div>
                      <p className="text-xl font-bold text-[#3370F7]">3,000+</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Concurrent users</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#3370F7]">4</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">US AI Patents</p>
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="mb-16">
              <div className="mb-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#F58022] font-bold text-xs tracking-widest uppercase">
                  How We Got Here
                </span>
              </div>
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight">
                From a fundamental risk <br />
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
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">The False Assurance of Competence</h3>
                  <div className="text-[#64748B] leading-relaxed mb-6 space-y-4">
                    <p>
                      As generative AI began producing polished reports and technical briefs in
                      seconds, a dangerous pattern emerged: linguistic fluency was being mistaken for
                      true competence.
                    </p>
                    <p>
                      The core risk became clear—when AI writes the document, how do we know the human
                      behind it actually understands the work?
                    </p>
                  </div>
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
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">Grounding in Cognitive Neuroscience</h3>
                  <div className="text-[#64748B] leading-relaxed mb-6 space-y-4">
                    <p>
                      We turned to established cognitive science, specifically the &ldquo;Production
                      Effect&rdquo; and &ldquo;Generation Effect,&rdquo; which show that speaking
                      information aloud creates significantly stronger memory traces than reading
                      silently.
                    </p>
                    <p>
                      The research proved that coordinating biological cognition through oral
                      explanation is the most reliable signal of genuine understanding.
                    </p>
                  </div>
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
                  <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">Building Cognition in Motion</h3>
                  <div className="text-[#64748B] leading-relaxed mb-6 space-y-4">
                    <p>
                      We built Socratic Metric from the ground up: an AI-moderated oral verification
                      platform that doesn&apos;t grade documents—it evaluates live cognition.
                    </p>
                    <p>
                      The platform analyzes coherence and depth of reasoning while producing immutable,
                      identity-verified audit records.
                    </p>
                    <p>
                      Our core methodology is now protected by four issued U.S. AI patents.
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3370F7] text-xs font-semibold">
                    4 issued US AI patents
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
                  <div className="text-[#64748B] leading-relaxed mb-6 space-y-4">
                    <p>
                      Today, Socratic Metric provides the cognitive readiness infrastructure trusted across
                      higher education, enterprise compliance, and government operations.
                    </p>
                    <p>
                      With over 3,000 simultaneous users, the platform scales securely to prove that the
                      right people truly understand the critical decisions they make.
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#F58022] text-xs font-semibold">
                    3,000+ verified users today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why We Exist */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">Why We Exist</h2>
              <div className="text-lg text-[#64748B] leading-relaxed space-y-4">
                <p>
                  Artificial intelligence has made it effortless to generate polished compliance
                  documentation, engineering analyses, and academic essays.
                </p>
                <p>
                  But in high-stakes environments, this creates a profound vulnerability: the false assurance
                  of competence.
                </p>
                <p>
                  Socratic Metric exists to close the gap between polished output and genuine human
                  readiness.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 transition-all hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#3370F7] mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Verification Over Documentation</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Written records show what was produced; Socratic Metric verifies what the human
                  actually comprehends. Comprehension has a voice.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 transition-all hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F58022] mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Science-Backed Rigor</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Our approach leverages the neurological advantages of vocalization and multimodal encoding,
                  fully protected by four U.S. AI patents issued in under two years.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 transition-all hover:shadow-lg hover:border-slate-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-4">Defensible Proof</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Every AI-moderated session generates an identity-verified, transcript-backed audit record
                  of authentic human engagement that stands up to the highest regulatory scrutiny.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Team */}
        <section className="py-20 md:py-32">
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
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Dr. Barry Sandrew</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">Founder/CEO</p>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                  Dedicated to building systems that ensure human accountability remains at the center of critical decision-making.
                </p>
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#1F2A44] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#1F2A44]/20">
                  MW
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Dr. Huston Pullen</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">Innovation Deployment</p>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
                  Dedicated to building systems that ensure human accountability remains at the center of critical decision-making.
                </p>
              </div>

              {/* Team 3 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#F58022] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#F58022]/20">
                  ER
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44] mb-1">Aansh Malik</h3>
                <p className="text-sm text-[#3370F7] font-semibold mb-4">CTO</p>
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

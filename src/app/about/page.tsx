"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Shield, Users, Lightbulb, Target, Heart, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#163460] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
           
           
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#163460] leading-tight mb-6">
                Restoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Authenticity</span> <br className="hidden md:block" />
                to Education
              </h1>
              <p className="text-lg md:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
                We believe that the most accurate measure of understanding isn't what a student can write, but what they can say. SocraticMetric is building the standard for oral assessment in the AI era.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story / Mission */}
        <section className="py-24 md:py-32 bg-[#f8fafc]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 mb-2">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Our Story
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#163460]">
                  The "Essay Crisis" was just the beginning.
                </h2>
                <p className="text-lg text-[#64748b] leading-relaxed">
                  When generative AI tools became widely available, educators faced a crisis. Traditional essays and multiple-choice exams could be completed by AI in seconds. The immediate reaction was to police students with AI detection software—a strategy that proved unreliable and adversarial.
                </p>
                <p className="text-lg text-[#64748b] leading-relaxed">
                  We asked a different question: <strong>What if we changed the assessment, not the student?</strong>
                </p>
                <p className="text-lg text-[#64748b] leading-relaxed">
                  Inspired by the Socratic method, we built a platform that scales the oldest and most reliable form of testing: the oral exam. By prioritizing the human voice, we ensure that grades reflect true understanding, not prompt engineering.
                </p>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 opacity-10"></div>
                 <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-[#f8fafc]">
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2 p-4 bg-[#f8fafc] rounded-xl">
                          <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
                          <p className="text-sm font-semibold text-[#64748b]">Identity Verification Rate</p>
                       </div>
                       <div className="space-y-2 p-4 bg-[#f8fafc] rounded-xl">
                          <h3 className="text-4xl font-bold text-indigo-600">50k+</h3>
                          <p className="text-sm font-semibold text-[#64748b]">Assessments Delivered</p>
                       </div>
                       <div className="space-y-2 p-4 bg-[#f8fafc] rounded-xl">
                          <h3 className="text-4xl font-bold text-indigo-600">12+</h3>
                          <p className="text-sm font-semibold text-[#64748b]">Partner Institutions</p>
                       </div>
                       <div className="space-y-2 p-4 bg-[#f8fafc] rounded-xl">
                          <h3 className="text-4xl font-bold text-indigo-600">10x</h3>
                          <p className="text-sm font-semibold text-[#64748b]">Faster Grading Time</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#163460] mb-6">Our Core Values</h2>
              <p className="text-lg text-[#64748b]">
                Guiding principles that define how we build, serve, and grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity First",
                  desc: "We believe academic honesty is the foundation of learning. We build tools that protect it without invading privacy."
                },
                {
                  icon: Users,
                  title: "Human-Centric",
                  desc: "Technology should amplify human connection, not replace it. We use AI to facilitate dialogue between student and teacher."
                },
                {
                  icon: Target,
                  title: "Meaningful Rigor",
                  desc: "Hard work matters. We design assessments that challenge students to think critically and articulate clearly."
                }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-[#f8fafc] hover:shadow-lg transition-all text-center">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#163460]">{value.title}</h3>
                  <p className="text-[#64748b] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Join Us */}
        <section className="py-24 md:py-32 bg-[#163460] relative overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
             <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
               Join the Movement
             </h2>
             <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
               We are working with forward-thinking universities and companies to redefine assessment. Whether you're an educator, administrator, or developer, we'd love to hear from you.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white border-none">
                  Partner with Us
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white hover:border-slate-600">
                  View Careers
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

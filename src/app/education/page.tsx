"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookDemoForm } from "@/components/forms/BookDemoForm";
import { Button } from "@/components/ui/Button";
import { CheckCircle, GraduationCap, ArrowRight, Shield, BookOpen, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-24 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 mb-6">
               <GraduationCap className="h-4 w-4 mr-2" />
               Higher Education
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
            >
              Protect Academic Integrity <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Without Policing Students</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Move beyond AI detection software. Assess authentic understanding through oral exams at scale—integrated directly into Canvas and Blackboard.
            </motion.p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 bg-white relative">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scale Oral Exams",
                  desc: "What used to take professors hours now takes minutes. AI conducts the interview, you review the insights.",
                  icon: Users
                },
                {
                  title: "LMS Integration",
                  desc: "Seamlessly syncs rosters, assignments, and grades with Canvas, Blackboard, Moodle, and D2L.",
                  icon: BookOpen
                },
                {
                  title: "Inclusive Assessment",
                  desc: "Accommodates diverse learning styles and provides students with private, low-stakes practice options.",
                  icon: Brain
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <card.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cognitive Science & Integrity */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                   Grounded in Cognitive Science
                 </h2>
                 <p className="text-lg text-slate-600">
                   Speaking out loud improves memory, retention, and comprehension. SocraticMetric isn't just an assessment tool; it's a learning reinforcement tool.
                 </p>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-6">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-indigo-600" /> 
                        Nuanced AI Policy
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                        We distinguish between using AI for preparation vs. using AI for substitution.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>Allowed:</strong> Using AI to brainstorm, organize notes, or explain complex concepts.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>Prohibited:</strong> Reciting AI-generated answers word-for-word or using text-to-speech devices.</span>
                        </li>
                    </ul>
                 </div>
                 <ul className="space-y-4">
                   {[
                     "Students must read questions aloud (70% accuracy check)",
                     "Feedback must be read aloud to ensure processing",
                     "Grading focuses on content, not accent or style",
                     "Recordings are temporary and private"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                       <span className="text-slate-700">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="relative h-full min-h-[400px] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col justify-center items-center">
                  <div className="text-center space-y-4 max-w-sm">
                    <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                       <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Learning that Sticks</h3>
                    <p className="text-slate-500">
                      "By forcing students to articulate their thoughts, we've seen a measurable increase in concept retention compared to multiple-choice exams."
                    </p>
                    <p className="font-semibold text-slate-900">- Cognitive Psychology Dept.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Book Demo */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-6">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Bring authenticity back to your campus.
                </h2>
                <p className="text-slate-300 text-lg">
                  Schedule a consultation with our Education Success team to discuss your institution's specific needs.
                </p>
              </div>
              <BookDemoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

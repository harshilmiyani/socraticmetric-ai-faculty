"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mic, Brain, ShieldCheck, Repeat, FileText, CheckCircle, ArrowRight, Sparkles, Play, GraduationCap, Building, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BookDemoForm } from "@/components/forms/BookDemoForm";
import { IndustrySelector } from "@/components/home/IndustrySelector";
import Fancybox from "@/components/ui/Fancybox";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        {/* Increased top padding to accommodate the new floating navbar which sits lower */}
        <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden">
          {/* Animated Background Mesh Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite]"></div>
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite_2s]"></div>
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[128px] animate-[blob_7s_infinite_4s]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full mix-blend-multiply filter blur-[96px] animate-pulse"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Floating Elements (Decorative) */}
            <div className="absolute top-10 left-10 hidden lg:block animate-[float_6s_ease-in-out_infinite]">
                <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-full"><Mic className="h-5 w-5 text-indigo-600" /></div>
                    <div>
                        <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                        <div className="h-2 w-10 bg-slate-100 rounded"></div>
                    </div>
                </div>
            </div>
             <div className="absolute bottom-20 right-10 hidden lg:block animate-[float_8s_ease-in-out_infinite_1s]">
                <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full"><Brain className="h-5 w-5 text-purple-600" /></div>
                    <span className="text-xs font-bold text-slate-600">Analysis Complete</span>
                </div>
            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8"
            >
              <IndustrySelector />

              <motion.h1 variants={fadeIn} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                Assessment as a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient">Conversation</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                Not a test, but a dialogue. Evaluate authenticity, comprehension, and verbal reasoning through spoken responses.
                Students read, record, and refine—demonstrating what they know in their own voice.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                <Link href="#contact">
                  <Button size="lg" className="group relative overflow-hidden w-full sm:w-auto text-base px-8 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                     <span className="relative z-10 flex items-center gap-2">
                        Book a Demo <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                     </span>
                     <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full bg-white/80 hover:bg-white border-slate-200">
                    <Play className="mr-2 h-4 w-4 fill-current" /> See How it Works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-10 border-y border-slate-100 bg-slate-50/50">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
              Trusted by innovative institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:grayscale-0 transition-all duration-500">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-12 w-32 md:h-16 md:w-48 transition-opacity hover:opacity-100">
                  <Image 
                    src="/img/showcase/WestcliffULogo.png" 
                    alt="Westcliff University" 
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Solution / Mockup */}
        <section id="features" className="py-24 bg-white relative">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
           
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  The Problem: <span className="text-slate-400">AI writes the essay.</span> <br/>
                  The Solution: <span className="text-indigo-600">You speak the answer.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Traditional text-based assignments are obsolete. ChatGPT can produce a B+ essay in seconds. 
                  SocraticMetric restores the integrity of assessment by requiring students to verbally articulate their knowledge in real-time.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Eliminates AI plagiarism via real-time speech",
                    "Cognitive Science: Speaking improves retention",
                    "Fair Grading: Accent and tone agnostic",
                    "Encourages iterative improvement (Mastery Learning)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Decorative blobs behind */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-60"></div>
                
                {/* Main Card */}
                <div className="relative rounded-2xl bg-slate-900 p-3 shadow-2xl shadow-indigo-900/20 rotate-1 hover:rotate-0 transition-all duration-500 ring-1 ring-slate-900/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Rec</span>
                        <span>Assignment: Ethics in AI</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-3">
                           <p className="text-indigo-400 text-xs font-bold tracking-wider uppercase">Question 1 of 5</p>
                           <span className="text-slate-500 text-xs">High Stakes Mode</span>
                        </div>
                        <p className="text-white text-xl font-serif leading-relaxed">"Explain the utilitarian argument against autonomous weapons systems, citing specific examples from the reading."</p>
                      </div>
                      
                      {/* Audio Waveform Visualization (Mock) */}
                      <div className="flex items-center justify-center gap-1 h-12">
                        {[...Array(20)].map((_, i) => (
                           <motion.div 
                             key={i}
                             animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                             transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                             className="w-1 bg-indigo-500 rounded-full"
                           />
                        ))}
                      </div>
                      
                      <div className="flex justify-center">
                         <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-b from-red-500 to-red-600 shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                                <Mic className="h-8 w-8 text-white fill-current" />
                            </div>
                         </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-slate-400 text-sm font-mono">00:24 / 02:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating feedback card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 w-64 bg-white/95 backdrop-blur rounded-lg p-4 shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span className="text-xs font-bold text-indigo-600 uppercase">AI Feedback</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "Great point on accountability. However, you missed the distinction between 'human-in-the-loop' vs 'human-on-the-loop'..."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6">How it Works</h2>
              <p className="text-lg text-slate-600">
                A structured 4-step workflow designed to verify identity and deep understanding.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent -z-10"></div>
              
              {[
                {
                  icon: FileText,
                  title: "1. Read Aloud",
                  desc: "Student reads the question aloud. System verifies 70% reading accuracy before unlocking the answer step."
                },
                {
                  icon: Mic,
                  title: "2. Speak Naturally",
                  desc: "Student answers as if explaining to a friend. No scripts allowed—just authentic verbal reasoning."
                },
                {
                  icon: Brain,
                  title: "3. Read Feedback",
                  desc: "AI provides immediate critique. Student must read this feedback aloud to ensure engagement."
                },
                {
                  icon: Repeat,
                  title: "4. Iterate & Refine",
                  desc: "Student can re-record up to 5 times to improve their score based on the feedback."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-20 w-full"
            >
              <Fancybox className="w-full">
                <a 
                  href="https://drive.google.com/file/d/1GRS5ZKMtdf8jd1ldQO4XcPo7buWkYRiP/preview" 
                  data-fancybox 
                  data-type="iframe"
                  className="relative group block w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                >
                  <div className="aspect-video bg-slate-900 relative flex items-center justify-center">
                     {/* Thumbnail Image */}
                     <Image 
                        src="/img/logo-light-video.png" 
                        alt="Platform Walkthrough" 
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                     />
                     
                     {/* Overlay Gradient */}
                     <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                     
                     {/* Play Button */}
                     <div className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 z-10 shadow-lg shadow-black/20">
                        <Play className="h-8 w-8 text-white fill-current ml-1" />
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                        <p className="text-white font-bold text-lg md:text-xl tracking-wide text-center">See the platform in action</p>
                     </div>
                  </div>
                </a>
              </Fancybox>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Tailored for Every Learning Environment</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  color: "blue",
                  title: "Education",
                  desc: "Ensure academic integrity in humanities and business courses where essay mills are prevalent. Perfect for high-stakes assessments."
                },
                {
                  icon: Building,
                  color: "purple",
                  title: "Government",
                  desc: "Secure, on-premise solutions for public sector training and language verification. Meets strict compliance and data sovereignty standards."
                },
                {
                  icon: Users,
                  color: "indigo",
                  title: "Businesses",
                  desc: "Verify candidates actually have the skills they claim. Streamline soft-skills training and compliance checks for remote teams."
                }
              ].map((card, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                  <div className={`h-14 w-14 rounded-2xl bg-${card.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <card.icon className={`h-7 w-7 text-${card.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-indigo-500/20 blur-[120px]"></div>
             <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-violet-500/20 blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-white">
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Ready to transform how you assess?
                </h2>
                <p className="text-slate-300 text-lg max-w-md">
                  Join the universities and organizations already using SocraticMetric to bring authenticity back to assessment.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "Easy LMS Integration (Canvas, Blackboard)",
                    "Customizable Rubrics & Feedback",
                    "Enterprise-Grade Data Privacy"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <CheckCircle className="h-4 w-4 text-indigo-300" />
                      </div>
                      <span className="text-indigo-50">{item}</span>
                    </div>
                  ))}
                </div>
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

"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookDemoForm } from "@/components/forms/BookDemoForm";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Building, Lock, Globe, Server, FileCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GovernmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-24 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-slate-400/20 blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-sm text-slate-700 mb-6">
               <Building className="h-4 w-4 mr-2" />
               Government & Defense
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
            >
              Secure Oral Assessment for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">Mission-Critical Training</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Verify language proficiency, protocol mastery, and subject matter expertise with a platform built for strict compliance and data sovereignty.
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
                  title: "Data Sovereignty",
                  desc: "On-premise and private cloud deployment options to ensure data never leaves your secure environment.",
                  icon: Server
                },
                {
                  title: "Language Verification",
                  desc: "Test diplomats and field agents for true conversational fluency, not just vocabulary memorization.",
                  icon: Globe
                },
                {
                  title: "Audit & Compliance",
                  desc: "Complete audit trails of all assessments and feedback for regulatory reporting and review.",
                  icon: FileCheck
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                  <div className="h-12 w-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                    <card.icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                   FedRAMP Ready Infrastructure
                 </h2>
                 <p className="text-lg text-slate-600">
                   We understand the unique constraints of public sector technology. SocraticMetric offers flexible deployment models to meet your security clearance needs.
                 </p>
                 <ul className="space-y-4">
                   {[
                     "Deployable in air-gapped environments",
                     "Role-based access control (RBAC) with Granular Permissions",
                     "Customizable AI models tuned for specific jargon/protocols",
                     "24/7 Dedicated US-based Support"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="h-6 w-6 text-slate-700 flex-shrink-0" />
                       <span className="text-slate-700">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <Button className="bg-slate-800 hover:bg-slate-900 mt-4">Download Security Whitepaper</Button>
               </div>
               <div className="relative h-[400px] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col justify-center items-center">
                  <div className="text-center space-y-4 max-w-sm">
                    <div className="mx-auto h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center">
                       <Lock className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Mission Ready</h3>
                    <p className="text-slate-500">
                      "The ability to test situational responses verbally has transformed how we qualify personnel for overseas deployment."
                    </p>
                    <p className="font-semibold text-slate-900">- Training Director, Federal Agency</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Book Demo */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-slate-500/20 blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-6">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Secure your assessment pipeline.
                </h2>
                <p className="text-slate-300 text-lg">
                  Contact our Government Solutions team to discuss RFPs, security requirements, and pilot programs.
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

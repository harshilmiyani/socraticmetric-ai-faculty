"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookDemoForm } from "@/components/forms/BookDemoForm";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Users, Briefcase, TrendingUp, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#1F2A44] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-24 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-200/40 blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 mb-6">
               <Briefcase className="h-4 w-4 mr-2" />
               Enterprise & Business
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-tight mb-6"
            >
              Verify Skills, Not Just Resumes <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Scale Soft Skills Assessment</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-[#85756F] max-w-2xl mx-auto leading-relaxed"
            >
              From hiring to training, ensure your teams can actually communicate. Automate role-play scenarios and sales pitches with AI analysis.
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
                  title: "Automated Hiring Screens",
                  desc: "Screen thousands of candidates for communication skills before the first human interview. Save hundreds of recruiter hours.",
                  icon: Users
                },
                {
                  title: "Sales Enablement",
                  desc: "Verify every rep knows the pitch. AI grades their delivery, objection handling, and product knowledge instantly.",
                  icon: TrendingUp
                },
                {
                  title: "Soft Skills Training",
                  desc: "Create safe practice environments for difficult conversations, leadership scenarios, and client management.",
                  icon: MessageSquare
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#F5F5F5] border border-[#F5F5F5] hover:shadow-lg transition-all">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <card.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1F2A44]">{card.title}</h3>
                  <p className="text-[#85756F] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1F2A44]">
                   Accelerate Time-to-Competency
                 </h2>
                 <p className="text-lg text-[#85756F]">
                   Don't rely on "completion" as a metric for training. Verify actual mastery of the material through verbal demonstration.
                 </p>
                 <ul className="space-y-4">
                   {[
                     "Integrates with Workday, BambooHR, and Salesforce",
                     "Customizable scenarios for your specific industry",
                     "Benchmarking against top performers in your org",
                     "Bias-free automated evaluation"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                       <span className="text-[#85756F]">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">See ROI Calculator</Button>
               </div>
               <div className="relative h-[400px] bg-white rounded-2xl shadow-xl border border-[#EAF1FE] p-8 flex flex-col justify-center items-center">
                  <div className="text-center space-y-4 max-w-sm">
                    <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center">
                       <Zap className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2A44]">10x Faster Onboarding</h3>
                    <p className="text-[#85756F]">
                      "We cut our sales ramp time in half by using SocraticMetric to certify reps on the pitch deck before they ever touched a lead."
                    </p>
                    <p className="font-semibold text-[#1F2A44]">- VP of Sales, Tech Unicorn</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Book Demo */}
        <section className="py-24 bg-[#1F2A44] relative overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-6">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Build a high-performance culture.
                </h2>
                <p className="text-slate-300 text-lg">
                  Let's discuss how SocraticMetric can streamline your hiring and training workflows.
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

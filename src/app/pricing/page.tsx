"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookDemoForm } from "@/components/forms/BookDemoForm";
import { CheckCircle, Zap, Shield, Globe, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "Education",
    price: "Custom",
    description: "For universities and colleges integrating oral assessment into their curriculum.",
    items: [
      "LMS Integration (Canvas/Blackboard)",
      "Student Identity Verification",
      "Academic Integrity Dashboard",
      "Department-wide Analytics",
      "FERPA Compliant"
    ],
    cta: "Contact Sales",
    popular: true
  },
  {
    title: "Government",
    price: "Custom",
    description: "Secure, compliant solutions for public sector and defense training.",
    items: [
      "On-Premise Deployment Options",
      "FedRAMP Ready Infrastructure",
      "Strict Data Sovereignty",
      "Custom Role-Based Access",
      "Dedicated Support Team"
    ],
    cta: "Contact Sales",
    popular: false
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Scalable assessment for hiring, training, and compliance verification.",
    items: [
      "Bulk Candidate Screening",
      "HRIS Integration",
      "Soft Skills Analysis",
      "Custom Branding (White-label)",
      "SLA Guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-24 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
            >
              Transparent Pricing for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Institutions of All Sizes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you're running a pilot or transforming an entire university, we have a plan that fits.
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24 relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? 'border-indigo-600 shadow-xl shadow-indigo-100 bg-white ring-1 ring-indigo-600' : 'border-slate-200 bg-white/50 hover:bg-white hover:shadow-lg transition-all'}`}
                >
                  {plan.popular && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                       Most Popular
                     </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                    <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full justify-center">
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why SocraticMetric?</h2>
              <p className="text-lg text-slate-600">
                The only platform designed specifically for high-stakes oral assessment at scale.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Voice Authentication", desc: "Biometric verification ensures the right student is speaking.", icon: Shield },
                 { title: "Instant Grading", desc: "AI analyzes transcripts against your custom rubrics in seconds.", icon: Zap },
                 { title: "LMS Sync", desc: "Grades and feedback push directly to Canvas, Blackboard, and Moodle.", icon: Globe },
                 { title: "Enterprise Security", desc: "FERPA compliant, SOC2 certified, and fully encrypted.", icon: Building },
               ].map((feature, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-xl">
                   <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
                   <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                   <p className="text-sm text-slate-600">{feature.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Book Demo Section */}
        <section id="book-demo" className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
             <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-6">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  Get a personalized walkthrough.
                </h2>
                <p className="text-slate-300 text-lg">
                  See how SocraticMetric can work for your specific use case. Our team will show you:
                </p>
                <ul className="space-y-4 pt-2">
                  {[
                    "How to create an oral assessment in < 2 minutes",
                    "The student recording and feedback experience",
                    "How we detect and prevent AI usage",
                    "Integration options for your LMS"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <ArrowRight className="h-3 w-3 text-indigo-300" />
                      </div>
                      <span className="text-indigo-50">{item}</span>
                    </li>
                  ))}
                </ul>
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

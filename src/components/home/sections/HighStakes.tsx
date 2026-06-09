"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, User, ShieldCheck, Shield, FileCheck, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function HighStakes() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    {
      id: "education",
      label: "Education",
      link: "/education",
      pill: "Safeguard the value of your degree with AI-resistant assessments.",
      theme: "blue",
      bgGradient: "from-blue-100/60 via-blue-50/40 to-white",
      bento: {
        mainCard: {
          title: "Cognitive Verification",
          scores: [
            { label: "Recall", value: 84, color: "text-slate-600", barColor: "bg-slate-200", percent: "84%" },
            { label: "Reasoning", value: 96, color: "text-[#3370F7]", barColor: "bg-[#3370F7]", percent: "96%" },
            { label: "Defense", value: 92, color: "text-[#1F2A44]", barColor: "bg-[#1F2A44]", percent: "92%" }
          ],
          description: "High reasoning and defense scores confirm authentic comprehension, isolating true understanding from rote memorization or AI assistance.",
          icon: Activity
        },
        transcriptCard: {
          title: "Live Defense",
          user: "Alex Johnson — HIST 201",
          text: "\"I think economic inequality created the conditions, but Rousseau gave people the language to demand change. Without the philosophical framework, the anger might not have translated into...\"",
          icon: User
        },
        statusCard: {
          title: "Integrity Status",
          status: "Authentic Authorship Confirmed",
          color: "text-emerald-600",
          bg: "bg-emerald-50/80 border-emerald-100/50",
          icon: ShieldCheck
        }
      }
    },
    {
      id: "enterprise",
      label: "Enterprise",
      link: "/enterprise",
      pill: "Verify leadership reasoning depth and compliance readiness.",
      theme: "green",
      bgGradient: "from-emerald-100/60 via-emerald-50/40 to-white",
      bento: {
        mainCard: {
          title: "Compliance Readiness",
          scores: [
            { label: "Policy Knowledge", value: 95, color: "text-slate-600", barColor: "bg-slate-200", percent: "95%" },
            { label: "Application", value: 91, color: "text-emerald-600", barColor: "bg-emerald-500", percent: "91%" },
            { label: "Risk Mitigation", value: 88, color: "text-emerald-800", barColor: "bg-emerald-700", percent: "88%" }
          ],
          description: "Strong application of GDPR Article 17 in a complex scenario, demonstrating deep regulatory alignment.",
          icon: Activity
        },
        transcriptCard: {
          title: "Scenario Handling",
          user: "T. Chen - Legal · GDPR",
          text: "\"The request can be refused if the data is necessary for exercising the right of freedom of expression, or for compliance with a legal obligation. In our case, that means...\"",
          icon: User
        },
        statusCard: {
          title: "Risk Assessment",
          status: "Policy Reasoning Verified",
          color: "text-emerald-700",
          bg: "bg-emerald-50/80 border-emerald-100/50",
          icon: Shield
        }
      }
    },
    {
      id: "government",
      label: "Government",
      link: "/government",
      pill: "Mission-critical readiness assurance for high-stakes operations.",
      theme: "red",
      bgGradient: "from-rose-100/60 via-rose-50/40 to-white",
      bento: {
        mainCard: {
          title: "Readiness Assurance",
          scores: [
            { label: "Protocol Recall", value: 98, color: "text-slate-600", barColor: "bg-slate-200", percent: "98%" },
            { label: "Crisis Reasoning", value: 96, color: "text-rose-600", barColor: "bg-rose-500", percent: "96%" },
            { label: "Override Defense", value: 97, color: "text-rose-800", barColor: "bg-rose-700", percent: "97%" }
          ],
          description: "Exceptional mastery of failure cascade protocols and override authority in simulated high-stress scenarios.",
          icon: Activity
        },
        transcriptCard: {
          title: "Protocol Mastery",
          user: "ID 87122 - Mission Critical",
          text: "\"MAYDAY indicates immediate danger to life or the vessel, while PAN-PAN is for urgent but not life-threatening situations. The lead systems engineer holds override authority unless...\"",
          icon: User
        },
        statusCard: {
          title: "Clearance Status",
          status: "Mission-Critical Readiness Confirmed",
          color: "text-rose-600",
          bg: "bg-rose-50/80 border-rose-100/50",
          icon: FileCheck
        }
      }
    }
  ];

  const activeTabData = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-700">
      {/* Dynamic Background */}
      <div className={cn("absolute inset-0 bg-gradient-to-b opacity-80 transition-colors duration-700 pointer-events-none z-0", activeTabData.bgGradient)} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-slate-200 text-slate-600 font-bold text-xs tracking-widest uppercase shadow-sm backdrop-blur-sm">
            THE NEW RISK
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight max-w-3xl mx-auto">
            When AI Can Write It,<br />
            Documentation Proves Nothing.
          </h2>
        </div>

        {/* Tab Navigation (Pill Style) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-slate-200/60">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-white text-[#1F2A44] shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-slate-200/50 scale-105"
                    : "text-slate-500 hover:text-[#1F2A44] hover:bg-slate-50/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Pill Text */}
        <div className="flex justify-center mb-12 h-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg shadow-slate-200/50 border border-slate-200/60 text-center"
            >
              <h3 className="text-sm md:text-lg font-bold text-[#1F2A44]">
                {activeTabData.pill}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Main Card (Spans 2 columns on desktop) */}
              <motion.div 
                className="md:col-span-2 bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="absolute top-[-10%] right-[-5%] p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 group-hover:rotate-0">
                   <activeTabData.bento.mainCard.icon className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-100 p-2 rounded-xl">
                       <Activity className="w-5 h-5 text-slate-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#1F2A44]">{activeTabData.bento.mainCard.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">{activeTabData.bento.mainCard.description}</p>
                </div>
                
                <div className="mt-10 space-y-6 relative z-10 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80">
                  {activeTabData.bento.mainCard.scores.map((score, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{score.label}</span>
                        <span className={cn("text-2xl font-black leading-none", score.color)}>{score.value}</span>
                      </div>
                      <div className="h-3 w-full bg-slate-200/60 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: score.percent }}
                          transition={{ duration: 1.2, delay: 0.2 + (idx * 0.15), type: "spring", bounce: 0.3 }}
                          className={cn("h-full rounded-full relative overflow-hidden", score.barColor)} 
                        >
                           <div className="absolute inset-0 bg-white/20 w-full h-full mix-blend-overlay" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-col gap-6">
                {/* Status Card */}
                <motion.div 
                  className={cn("rounded-3xl p-6 shadow-xl shadow-slate-200/40 border flex flex-col items-center justify-center text-center h-48 relative overflow-hidden hover:-translate-y-1 transition-transform duration-500", activeTabData.bento.statusCard.bg)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white p-3.5 rounded-2xl shadow-sm mb-4">
                      <activeTabData.bento.statusCard.icon className={cn("w-8 h-8", activeTabData.bento.statusCard.color)} />
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{activeTabData.bento.statusCard.title}</p>
                    <p className={cn("font-bold text-sm md:text-base leading-tight", activeTabData.bento.statusCard.color)}>{activeTabData.bento.statusCard.status}</p>
                  </div>
                </motion.div>

                {/* Transcript Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 flex-1 flex flex-col hover:-translate-y-1 transition-transform duration-500"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 border border-slate-200/50 shadow-sm">
                      <activeTabData.bento.transcriptCard.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeTabData.bento.transcriptCard.title}</p>
                      <p className="font-bold text-[#1F2A44] text-xs sm:text-sm truncate">{activeTabData.bento.transcriptCard.user}</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-2xl p-5 flex-1 border border-slate-100 relative shadow-inner">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-[#F8FAFC] border-l border-t border-slate-100 rotate-45" />
                    <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                      {activeTabData.bento.transcriptCard.text}
                    </p>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Link */}
        <div className="mt-12 flex justify-center relative z-10">
          <Link 
            href={activeTabData.link}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1F2A44] shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-200/80 border border-slate-100 group"
          >
            Learn more about {activeTabData.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#3370F7]" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
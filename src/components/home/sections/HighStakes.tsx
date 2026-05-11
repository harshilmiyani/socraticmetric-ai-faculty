"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, User, ShieldCheck, Shield, FileCheck, Activity, ArrowRight } from "lucide-react";
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
      bgGradient: "from-blue-100 via-blue-50 to-white",
      mockup: {
        url: "app.socraticmetric.ai/session/education",
        user: { name: "Alex Johnson — HIST 201 - Essay #4", role: "" },
        progress: { label: "Session Progress", step: "Question 3 of 5 (60%)", percent: 60, color: "bg-blue-600" },
        status: { label: "Integrity Flag", text: "No AI authorship detected", icon: ShieldCheck, color: "text-green-600" },
        question: "You argued that economic inequality was the primary cause of the Revolution—but Enlightenment thinkers like Rousseau were also influential. How do you weigh these two forces against each other?",
        transcript: "\"I think economic inequality created the conditions, but Rousseau gave people the language to demand change. Without the philosophical framework, the anger might not have translated into...\"",
        scores: [
          { label: "Recall", value: 84 },
          { label: "Reasoning", value: 79 },
          { label: "Defense", value: 76 }
        ],
        button: { text: "Authentic comprehension confirmed", color: "bg-blue-600 text-white shadow-blue-600/20" },
        waveformColor: "bg-blue-500",
        playColor: "bg-blue-600"
      }
    },
    {
      id: "enterprise",
      label: "Enterprise",
      link: "/enterprise",
      pill: "Verify leadership reasoning depth and compliance readiness.",
      theme: "green",
      bgGradient: "from-emerald-100 via-emerald-50 to-white",
      mockup: {
        url: "app.socraticmetric.ai/session/enterprise",
        user: { name: "T. Chen - Legal · GDPR Compliance 2026", role: "" },
        progress: { label: "Training Status", step: "Question 3 of 5", percent: 60, color: "bg-emerald-500" },
        status: { label: "Risk Level", text: "Compliance verified — Regulatory alignment confirmed", icon: Shield, color: "text-emerald-600" },
        question: "Under GDPR Article 17, describe three specific scenarios where a 'right to erasure' request can be legally refused. How does this impact our current data retention policy?",
        transcript: "\"The request can be refused if the data is necessary for exercising the right of freedom of expression, or for compliance with a legal obligation. In our case, that means...\"",
        scores: [
          { label: "Recall", value: 95 },
          { label: "Reasoning", value: 91 },
          { label: "Defense", value: 88 }
        ],
        button: { text: "Policy reasoning verified — certified", color: "bg-emerald-700 text-white shadow-emerald-700/20" },
        waveformColor: "bg-emerald-400",
        playColor: "bg-emerald-600"
      }
    },
    {
      id: "government",
      label: "Government",
      link: "/government",
      pill: "Mission-critical readiness assurance for high-stakes operations.",
      theme: "red",
      bgGradient: "from-rose-100 via-rose-50 to-white",
      mockup: {
        url: "app.socraticmetric.ai/session/government",
        user: { name: "ID 87122 - Cleared · Mission Critical Ops", role: "" },
        progress: { label: "Readiness Check", step: "Question 3 of 5", percent: 60, color: "bg-rose-600" },
        status: { label: "Chain of Custody", text: "Identity verified — Voice authenticated", icon: FileCheck, color: "text-emerald-600" },
        question: "Contrast the authorization protocols for MAYDAY vs PAN-PAN. Who holds final override authority during a failure cascade in the propulsion subsystem?",
        transcript: "\"MAYDAY indicates immediate danger to life or the vessel, while PAN-PAN is for urgent but not life-threatening situations. The lead systems engineer holds override authority unless...\"",
        scores: [
          { label: "Recall", value: 98 },
          { label: "Reasoning", value: 96 },
          { label: "Defense", value: 97 }
        ],
        button: { text: "Protocol mastery confirmed", color: "bg-rose-600 text-white shadow-rose-600/20" },
        waveformColor: "bg-rose-400",
        playColor: "bg-rose-600"
      }
    }
  ];

  const activeTabData = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-700">
      {/* Dynamic Background */}
      <div className={cn("absolute inset-0 bg-gradient-to-b opacity-60 transition-colors duration-700", activeTabData.bgGradient)} />
      
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
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-white text-[#1F2A44] shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-slate-200/50"
                    : "text-slate-500 hover:text-[#1F2A44] hover:bg-slate-50/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Pill Text */}
        <div className="flex justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 text-center"
            >
              <h3 className="text-base md:text-xl font-bold text-[#1F2A44]">
                {activeTabData.pill}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Browser Mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-200 overflow-hidden flex flex-col">
            {/* Browser Header */}
            <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium bg-white px-4 py-1.5 rounded-md border border-slate-100 shadow-sm truncate max-w-full">
                  <Activity className="w-3 h-3 shrink-0" />
                  <span className="truncate">{activeTabData.mockup.url}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                session active
              </div>
            </div>

            {/* Browser Body */}
            <div className="p-4 md:p-6 lg:p-8 bg-[#F8FAFC] flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-[300px_1fr] gap-4 md:gap-6"
                >
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* User Card */}
                    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">User</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[#1F2A44] text-sm truncate">{activeTabData.mockup.user.name}</p>
                          {activeTabData.mockup.user.role ? (
                            <p className="text-xs text-slate-500 truncate">{activeTabData.mockup.user.role}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">{activeTabData.mockup.progress.label}</p>
                      <p className="font-bold text-[#1F2A44] text-sm mb-3">{activeTabData.mockup.progress.step}</p>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full transition-all duration-1000", activeTabData.mockup.progress.color)} style={{ width: `${activeTabData.mockup.progress.percent}%` }} />
                      </div>
                    </div>

                    {/* Status Card */}
                    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">{activeTabData.mockup.status.label}</p>
                      <div className={cn("flex items-center gap-2 text-sm font-bold", activeTabData.mockup.status.color)}>
                        <activeTabData.mockup.status.icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{activeTabData.mockup.status.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-4">
                    {/* Question Card */}
                    <div className="bg-[#EAF1FE]/50 p-5 md:p-6 rounded-xl border border-blue-100/50">
                      <p className="text-[#1F2A44] text-sm md:text-base leading-relaxed font-medium">
                        {activeTabData.mockup.question}
                      </p>
                    </div>

                    {/* Response Card */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Response</p>
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-300">— Live Transcript</p>
                        </div>
                        <button className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105 shrink-0", activeTabData.mockup.playColor)}>
                          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                        </button>
                      </div>

                      {/* Waveform */}
                      <div className="flex items-center gap-1 mb-6 h-8">
                        {[4, 6, 8, 5, 3, 7, 10, 16, 24, 12, 8, 5, 4, 6, 3, 2].map((h, i) => (
                          <div key={i} className={cn("w-1.5 rounded-full opacity-80", activeTabData.mockup.waveformColor)} style={{ height: `${h * 2}px` }} />
                        ))}
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed italic">
                        {activeTabData.mockup.transcript}
                      </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4 mt-2">
                      <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                        {activeTabData.mockup.scores.map((score, i) => (
                          <div key={i} className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center flex-1 sm:min-w-[80px]">
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">{score.label}</p>
                            <p className="text-xl sm:text-2xl font-bold text-[#1F2A44]">{score.value}</p>
                          </div>
                        ))}
                      </div>
                      <button className={cn("w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-transform hover:scale-[1.02]", activeTabData.mockup.button.color)}>
                        {activeTabData.mockup.button.text}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Link below mockup */}
          <div className="mt-10 flex justify-center">
            <Link 
              href={activeTabData.link}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1F2A44] shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-200/80 border border-slate-100 group"
            >
              Learn more about {activeTabData.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-[#3370F7]" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
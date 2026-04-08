"use client";

import { useState } from "react";
import { GraduationCap, Building, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function HighStakes() {
  const [activeTab, setActiveTab] = useState("higher-ed");

  const tabs = [
    {
      id: "higher-ed",
      label: "Higher Education",
      icon: GraduationCap,
      content: {
        title: "Higher Education",
        description: "Verify authentic comprehension beyond AI-written submissions. Restore academic integrity through oral verification.",
        points: [
          "Academic integrity verification",
          "Oral exam administration",
          "Learning outcome assessment",
          "Accreditation compliance"
        ]
      }
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: Building,
      content: {
        title: "Enterprise",
        description: "Ensure your workforce can articulate and apply critical policies and procedures beyond documentation.",
        points: [
          "Compliance verification",
          "Training effectiveness",
          "Knowledge retention",
          "Operational readiness"
        ]
      }
    },
    {
      id: "government",
      label: "Government & Defense",
      icon: Shield,
      content: {
        title: "Government & Defense",
        description: "Verify operator competency under high-stakes conditions with audit-ready verification records.",
        points: [
          "Mission-critical verification",
          "Security clearance validation",
          "Doctrine comprehension",
          "Audit trail compliance"
        ]
      }
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background UI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#F1F5F9] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]" />
        {/* Glows */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#EAF1FE]/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#3370F7]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-[#EAF1FE] border border-blue-100 text-[#3370F7] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            Built for High-Stakes Environments
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Adaptable to Your Industry
          </h2>
        </div>

        {/* Tab Navigation (Pill Style) */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-12 px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border w-full sm:w-auto",
                  activeTab === tab.id
                    ? "bg-[#1F2A44] text-white border-[#1F2A44] shadow-lg shadow-[#1F2A44]/20 scale-100 sm:scale-105"
                    : "bg-white/60 text-[#85756F] border-white/80 hover:bg-white hover:text-[#1F2A44] hover:shadow-md hover:border-slate-200"
                )}
              >
                <Icon className={cn("w-5 h-5", activeTab === tab.id ? "text-[#F58022]" : "text-slate-400")} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area (Glass Card) */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#3370F7]/10 bg-white/80 backdrop-blur-xl border border-white ring-1 ring-black/5 p-6 sm:p-8 md:p-14 min-h-[550px] md:min-h-[480px]">
          <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full"
                  >
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col h-full justify-center space-y-8">
                      <div>
                         <h3 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-4 drop-shadow-sm">
                          {tab.content.title}
                        </h3>
                        <p className="text-base md:text-lg text-[#85756F] leading-relaxed font-medium">
                          {tab.content.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-4">
                        {tab.content.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#85756F] font-medium text-sm md:text-base group">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F58022] flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column: Visualization Placeholder (Glass Card) */}
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-inner flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-80" />
                      
                      {/* Dynamic Abstract Visuals based on Active Tab */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                        {tab.id === "higher-ed" && (
                          <div className="w-full max-w-sm space-y-4">
                            <div className="h-12 w-3/4 rounded-xl bg-white/80 shadow-sm border border-white flex items-center px-4 gap-3 transform -translate-x-4">
                              <div className="w-8 h-8 rounded-full bg-[#EAF1FE] text-[#3370F7] flex items-center justify-center"><tab.icon className="h-4 w-4" /></div>
                              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-[#3370F7] w-3/4 rounded-full" /></div>
                            </div>
                            <div className="h-16 w-full rounded-xl bg-white/90 shadow-md border border-white flex items-center px-4 gap-3 z-10 relative transform hover:scale-105 transition-transform">
                              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">98%</div>
                              <div className="flex flex-col gap-1.5 flex-1">
                                <div className="h-2.5 w-1/2 bg-slate-200 rounded-full" />
                                <div className="h-2 w-1/3 bg-slate-100 rounded-full" />
                              </div>
                              <div className="px-2 py-1 rounded bg-green-50 border border-green-100 text-green-600 text-[10px] font-semibold">Verified</div>
                            </div>
                            <div className="h-12 w-5/6 rounded-xl bg-white/60 shadow-sm border border-white flex items-center px-4 gap-3 transform translate-x-4">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center" />
                              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-300 w-1/2 rounded-full" /></div>
                            </div>
                          </div>
                        )}

                        {tab.id === "enterprise" && (
                          <div className="w-full max-w-sm grid grid-cols-2 gap-4">
                            <div className="col-span-2 h-20 rounded-2xl bg-white/90 shadow-md border border-white flex items-center justify-between px-6 hover:scale-105 transition-transform">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#F58022]/10 text-[#F58022] flex items-center justify-center"><tab.icon className="h-5 w-5" /></div>
                                <div className="flex flex-col gap-1.5">
                                  <div className="h-3 w-20 bg-slate-200 rounded-full" />
                                  <div className="h-2 w-12 bg-slate-100 rounded-full" />
                                </div>
                              </div>
                              <div className="w-12 h-12 rounded-full border-4 border-[#F58022] border-t-transparent border-l-transparent rotate-45" />
                            </div>
                            <div className="h-28 rounded-2xl bg-white/70 shadow-sm border border-white p-4 flex flex-col justify-end gap-2">
                              <div className="h-2 w-full bg-[#EAF1FE] rounded-t-sm" />
                              <div className="h-6 w-full bg-[#3370F7] rounded-t-sm" />
                              <div className="h-12 w-full bg-[#1F2A44] rounded-t-sm" />
                            </div>
                            <div className="h-28 rounded-2xl bg-white/70 shadow-sm border border-white p-4 flex flex-col items-center justify-center text-center gap-2">
                              <span className="text-2xl font-bold text-[#1F2A44]">10x</span>
                              <div className="h-2 w-16 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                        )}

                        {tab.id === "government" && (
                          <div className="relative w-full max-w-sm flex items-center justify-center h-full">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] z-10" />
                            <div className="w-48 h-48 rounded-full border border-[#1F2A44]/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                              <div className="w-32 h-32 rounded-full border border-[#3370F7]/20 flex items-center justify-center animation-reverse">
                                <div className="w-16 h-16 rounded-full border border-[#F58022]/30 flex items-center justify-center" />
                              </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white shadow-xl border border-white/50 flex items-center justify-center z-20 hover:scale-110 transition-transform">
                              <tab.icon className="h-8 w-8 text-[#1F2A44]" />
                            </div>
                            {/* Floating nodes */}
                            <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-[#3370F7] shadow-[0_0_10px_rgba(51,112,247,0.5)] z-20" />
                            <div className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-[#F58022] shadow-[0_0_10px_rgba(245,128,34,0.5)] z-20" />
                            <div className="absolute bottom-[20%] left-[30%] w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] z-20" />
                          </div>
                        )}
                      </div>

                       {/* Decorative Glow Elements */}
                       <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F58022]/10 rounded-full blur-3xl group-hover:bg-[#F58022]/20 transition-colors duration-500" />
                       <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#3370F7]/10 rounded-full blur-3xl" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
    </section>
  );
}

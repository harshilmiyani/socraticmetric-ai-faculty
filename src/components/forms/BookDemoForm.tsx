"use client";

import { Button } from "@/components/ui/Button";

export function BookDemoForm() {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Book a Demo</h3>
      <form className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-semibold text-slate-700">First Name</label>
            <input id="first-name" className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F58022] transition-all" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-semibold text-slate-700">Last Name</label>
            <input id="last-name" className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F58022] transition-all" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
          <input id="email" type="email" className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F58022] transition-all" placeholder="jane@university.edu" />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="organization" className="text-sm font-semibold text-slate-700">Organization</label>
          <input id="organization" className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F58022] transition-all" placeholder="Acme University" />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
          <textarea id="message" className="w-full h-32 px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F58022] transition-all resize-none" placeholder="Tell us about your needs..." />
        </div>
        
        <Button className="w-full h-12 text-base font-semibold" size="lg">Submit Inquiry</Button>
      </form>
    </div>
  );
}

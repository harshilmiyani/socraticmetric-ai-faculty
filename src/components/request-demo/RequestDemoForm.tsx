"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function RequestDemoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    phone: "",
    organizationType: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#EAF6FF] to-[#F2F8FC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1F2A44] leading-relaxed">
            Tell us a bit about your organization and we'll walk you through how Socratic Metric can fit your high-stakes workflows.
          </h2>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-100/40 border border-slate-100">
          <h3 className="text-2xl font-bold text-[#1F2A44] mb-8">Request a Demo</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-600 block">Full Name</label>
              <input 
                type="text" 
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all"
                required
              />
            </div>

            {/* Work Email */}
            <div className="space-y-1.5">
              <label htmlFor="workEmail" className="text-sm font-medium text-slate-600 block">Work Email</label>
              <input 
                type="email" 
                id="workEmail"
                name="workEmail"
                placeholder="Your Company Email Address"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all"
                required
              />
            </div>

            {/* Company / Institution */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-sm font-medium text-slate-600 block">Company/ Institution</label>
              <input 
                type="text" 
                id="company"
                name="company"
                placeholder="Your Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all"
                required
              />
            </div>

            {/* Role / Job Title */}
            <div className="space-y-1.5">
              <label htmlFor="role" className="text-sm font-medium text-slate-600 block">Role/ Job title</label>
              <input 
                type="text" 
                id="role"
                name="role"
                placeholder="Your Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all"
                required
              />
            </div>

            {/* Phone Number with Country Code */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-slate-600 block">Phone Number</label>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-[120px] relative">
                   {/* Simplified country code dropdown for wireframe mockup */}
                   <select 
                     className="w-full h-full appearance-none bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-8 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all cursor-pointer"
                     defaultValue="+234"
                   >
                     <option value="+1">+1 (US)</option>
                     <option value="+44">+44 (UK)</option>
                     <option value="+234">+234 (NG)</option>
                   </select>
                   <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                     <span className="text-lg">🇳🇬</span>
                   </div>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                     <ChevronDown className="w-4 h-4 text-slate-500" />
                   </div>
                </div>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  placeholder="8023456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all"
                  required
                />
              </div>
            </div>

            {/* Organization Type */}
            <div className="space-y-1.5 relative">
              <label htmlFor="organizationType" className="text-sm font-medium text-slate-600 block">Organization Type</label>
              <select 
                id="organizationType"
                name="organizationType"
                value={formData.organizationType}
                onChange={handleChange}
                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Select</option>
                <option value="higher-education">Higher Education</option>
                <option value="enterprise">Enterprise</option>
                <option value="government">Government & Aerospace</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-[38px] pointer-events-none">
                <ChevronDown className="w-5 h-5 text-slate-500" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-1">
                  <input 
                    type="checkbox" 
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3370F7]/50 focus:border-[#3370F7] checked:bg-[#3370F7] checked:border-[#3370F7] transition-all cursor-pointer"
                    required
                  />
                  <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-slate-600 leading-relaxed font-medium group-hover:text-slate-800 transition-colors">
                  I agree to be contacted by Socratic Metric about this inquiry.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button 
                type="submit"
                className="w-full h-14 bg-[#3370F7] hover:bg-[#285ecf] text-white text-lg font-medium rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                Request Demo
              </Button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

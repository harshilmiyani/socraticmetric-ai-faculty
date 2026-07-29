import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, GraduationCap, Building2, Shield, Microscope, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          {/* 404 Header */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[#3370F7]/10 text-[#3370F7] text-sm font-bold tracking-widest uppercase">
            Error 404
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1F2A44] leading-[1.1] mb-6">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-10">
            We couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/">
              <Button variant="primary" size="lg" className="gap-2 text-base">
                <Home className="w-5 h-5" />
                Back to Homepage
              </Button>
            </Link>
            <Link href="/request-demo">
              <Button variant="outline" size="lg" className="gap-2 text-base">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Helpful Links Grid */}
          <div className="text-left bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1F2A44] mb-8 text-center sm:text-left">
              Explore Our Solutions
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Education",
                  desc: "Verify authentic student comprehension beyond AI-written submissions.",
                  icon: GraduationCap,
                  href: "/education",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                {
                  title: "Enterprise",
                  desc: "Verify authentic employee comprehension for enterprise training and compliance.",
                  icon: Building2,
                  href: "/enterprise",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                {
                  title: "Government",
                  desc: "Mission-critical readiness assurance for the public sector and agencies.",
                  icon: Shield,
                  href: "/government",
                  color: "text-rose-600",
                  bg: "bg-rose-50"
                },
                {
                  title: "The Science",
                  desc: "Explore the cognitive neuroscience and research behind our platform.",
                  icon: Microscope,
                  href: "/science",
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                }
              ].map((link) => (
                <Link 
                  key={link.title} 
                  href={link.href}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${link.bg} transition-colors group-hover:bg-white group-hover:shadow-sm`}>
                    <link.icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2A44] group-hover:text-[#3370F7] transition-colors mb-1">
                      {link.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
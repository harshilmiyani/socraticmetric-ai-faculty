import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-indigo-100 bg-slate-50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/img/logo.png" 
                alt="SocraticMetric" 
                width={200} 
                height={65} 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Restoring authenticity to assessment. Our platform ensures true understanding through real-time oral defense and AI-powered feedback.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Product</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</Link></li>
              <li><Link href="#security" className="hover:text-indigo-600 transition-colors">Security</Link></li>
              <li><Link href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Company</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SocraticMetric AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link href="mailto:hello@socraticmetric.ai" className="hover:text-indigo-600 transition-colors">hello@socraticmetric.ai</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

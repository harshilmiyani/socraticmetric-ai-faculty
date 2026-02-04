"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-500"
            >
              Rules and regulations for using the SocraticMetric platform
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="prose prose-lg prose-slate max-w-none">
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Welcome to SocraticMetric. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the service.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                These Terms of Service ("Terms") constitute a binding legal agreement between you and SocraticMetric AI Inc. ("SocraticMetric," "we," "us," or "our"). By registering for an account or otherwise using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">2. Description of Service</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                SocraticMetric provides an AI-powered oral assessment platform designed for educational institutions, government agencies, and businesses (the "Service"). The Service allows users to create, administer, and grade oral assessments using voice recognition and artificial intelligence technologies.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">3. User Accounts</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep this information up to date. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">4. User Content</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                You retain ownership of any content you submit, post, or display on or through the Service ("User Content"), including oral recordings. By submitting User Content, you grant SocraticMetric a limited, non-exclusive, worldwide license to use, store, and process such content solely for the purpose of providing and improving the Service, consistent with our Privacy Policy.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">5. Acceptable Use</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                You agree not to misuse the Service. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600">
                <li>Attempting to probe, scan, or test the vulnerability of any system or network.</li>
                <li>Breaching or otherwise circumventing any security or authentication measures.</li>
                <li>Accessing, tampering with, or using non-public areas of the Service.</li>
                <li>Interfering with or disrupting any user, host, or network, such as by sending a virus, overloading, flooding, spamming, or mail-bombing any part of the Service.</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">6. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of SocraticMetric and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">7. Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">8. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In no event shall SocraticMetric, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-12 mb-6">9. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <div className="mt-16 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500">Last updated: February 4, 2026</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

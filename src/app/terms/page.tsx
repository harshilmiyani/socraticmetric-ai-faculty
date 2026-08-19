import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#163460] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 bg-white border-b border-[#f8fafc]">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 
             
             
             
              className="animate-text-enter font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#163460] leading-tight mb-4"
            >
              Terms of Service
            </h1>
            <p 
             
             
             
              className="text-[#64748b]"
            >
              Rules and regulations for using the SocraticMetric platform
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="prose prose-lg prose-slate max-w-none">
              
              <p className="text-[#64748b] leading-relaxed mb-6">
                Welcome to SocraticMetric. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the service.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                These Terms of Service ("Terms") constitute a binding legal agreement between you and SocraticMetric AI Inc. ("SocraticMetric," "we," "us," or "our"). By registering for an account or otherwise using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">2. Description of Service</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                SocraticMetric provides an AI-powered oral assessment platform designed for educational institutions, government agencies, and businesses (the "Service"). The Service allows users to create, administer, and grade oral assessments using voice recognition and artificial intelligence technologies.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">3. User Accounts</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep this information up to date. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">4. User Content</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                You retain ownership of any content you submit, post, or display on or through the Service ("User Content"), including oral recordings. By submitting User Content, you grant SocraticMetric a limited, non-exclusive, worldwide license to use, store, and process such content solely for the purpose of providing and improving the Service, consistent with our Privacy Policy.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">5. Acceptable Use</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                You agree not to misuse the Service. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li>Attempting to probe, scan, or test the vulnerability of any system or network.</li>
                <li>Breaching or otherwise circumventing any security or authentication measures.</li>
                <li>Accessing, tampering with, or using non-public areas of the Service.</li>
                <li>Interfering with or disrupting any user, host, or network, such as by sending a virus, overloading, flooding, spamming, or mail-bombing any part of the Service.</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">6. Intellectual Property</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of SocraticMetric and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">7. Termination</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">8. Limitation of Liability</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                In no event shall SocraticMetric, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">9. Changes to Terms</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <div className="mt-16 pt-8 border-t border-[#e8eff5]">
                <p className="text-sm text-[#64748b]">Last updated: February 4, 2026</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

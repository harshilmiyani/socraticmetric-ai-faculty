"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#163460] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 bg-white border-b border-[#f8fafc]">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#163460] leading-tight mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-[#64748b]"
            >
              How The Socratic Metric Learning System Protects Student Privacy
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="prose prose-lg prose-slate max-w-none">
              
              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Why the Socratic Metric Uses Oral Dialogue</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                The Socratic Metric learning system is designed to restore authenticity in education at a time when AI tools make written work easy to outsource. Instead of typed submissions, students engage in real-time oral dialogue, responding aloud to questions that adapt in difficulty and context. This approach is grounded in cognitive neuroscience: speaking out loud improves memory, retention, and comprehension.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Equally important, oral interactions make it much harder to rely on AI shortcuts or plagiarism tools, protecting the integrity of learning and assessment. Student voices, not keystrokes, become the evidence of learning.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Why Recordings Are Necessary</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                To deliver authentic assessments, the Socratic Metric records student responses so they can be analyzed for accuracy, depth of reasoning, and engagement. The recordings also support technologies that:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li>Confirm identity through voice recognition.</li>
                <li>Detect unnatural pauses or patterns that may signal AI interference.</li>
                <li>Provide evidence for fair, consistent evaluation across all learners.</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed mb-6">
                These recordings are used solely for educational purposes and are protected as confidential educational records. Recordings are never converted into biometric identifiers such as voiceprints, and they are only accessed by the assigned faculty or staff for educational evaluation.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Our Commitment to Student Privacy</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                SocraticMetric strictly complies with the Family Educational Rights and Privacy Act (FERPA) and applicable state and federal privacy laws. In practice, this means:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li><strong className="text-[#163460]">Limited access:</strong> Only authorized faculty and staff may access recordings.</li>
                <li><strong className="text-[#163460]">Confidential use:</strong> Recordings are treated as part of your education record under FERPA.</li>
                <li><strong className="text-[#163460]">No unauthorized sharing:</strong> Recordings will not be released outside the institution without your written consent, except as allowed by law (e.g., for accreditation or legal compliance).</li>
                <li><strong className="text-[#163460]">Retention policies:</strong> Recordings are stored securely and retained for no longer than 12 months after course completion or the end of an accreditation review cycle, whichever is later.</li>
                <li><strong className="text-[#163460]">Breach protocols:</strong> In the extremely unlikely event of a security incident, we follow federal and state notification requirements and will inform affected students promptly.</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">How OpenAI Protects Your Data</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Because the Socratic Metric integrates with advanced AI technologies, some processing occurs through OpenAI’s systems. OpenAI’s published privacy and security practices include:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li><strong className="text-[#163460]">Strong security controls:</strong> Encryption in transit and at rest, ongoing security audits, and strict internal access controls.</li>
                <li><strong className="text-[#163460]">Compliance:</strong> OpenAI maintains industry-standard privacy safeguards, aligned with global security and compliance frameworks.</li>
                <li><strong className="text-[#163460]">Transparency:</strong> Details are available at <a href="https://openai.com/security-and-privacy/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/security-and-privacy/</a>.</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Our agreement with OpenAI specifies that OpenAI functions as a “school official” under FERPA with legitimate educational interest. Student data is processed solely to provide Socratic Metric services and is not used for training, profiling, or commercial purposes.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-6">
                We integrate these safeguards with our own FERPA-based protections to create a two-layer privacy framework for your information.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Your Role as a Student</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                By participating in Socratic Metric assessments, you contribute your authentic voice and reasoning. You can expect:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li>That your recordings are used only for educational purposes.</li>
                <li>That your data is secured under both SocraticMetric and OpenAI protections.</li>
                <li>That your privacy rights under FERPA remain fully intact.</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">In Summary</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                The Socratic Metric system is designed to ensure real learning speaks for itself. While it relies on recorded oral interactions, your privacy and security are fully protected through:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-[#64748b]">
                <li>Our FERPA compliance, and</li>
                <li>OpenAI’s strict privacy and security safeguards.</li>
              </ul>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Together with defined retention limits, explicit breach protocols, and contractual assurances that OpenAI does not use your data beyond providing Socratic Metric services, these measures ensure that your authentic learning experience remains both protected and respected.
              </p>

              <div className="mt-16 pt-8 border-t border-[#e8eff5]">
                <p className="text-sm text-[#64748b]">Issued: September 16, 2025</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#163460] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 bg-white border-b border-[#f8fafc]">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 
             
             
             
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#163460] leading-tight mb-4"
            >
              Cookie Policy
            </h1>
            <p 
             
             
             
              className="text-[#64748b]"
            >
              How we use cookies and similar technologies
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="prose prose-lg prose-slate max-w-none">
              
              <p className="text-[#64748b] leading-relaxed mb-6">
                This Cookie Policy explains how SocraticMetric AI Inc. ("SocraticMetric", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at socraticmetric.ai ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">What are cookies?</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Cookies set by the website owner (in this case, SocraticMetric) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., like advertising, interactive content, and analytics).
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Why do we use cookies?</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-extrabold tracking-tight text-[#163460] mt-8 mb-4">Essential Cookies</h3>
              <p className="text-[#64748b] leading-relaxed mb-6">
                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
              </p>

              <h3 className="text-xl font-extrabold tracking-tight text-[#163460] mt-8 mb-4">Performance and Functionality Cookies</h3>
              <p className="text-[#64748b] leading-relaxed mb-6">
                These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>

              <h3 className="text-xl font-extrabold tracking-tight text-[#163460] mt-8 mb-4">Analytics and Customization Cookies</h3>
              <p className="text-[#64748b] leading-relaxed mb-6">
                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">How can I control cookies?</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-6">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>

              <h2 className="font-serif text-3xl font-bold text-[#163460] mt-12 mb-6">Updates to this Policy</h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
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

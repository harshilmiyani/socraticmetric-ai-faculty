import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

/** Structured data schemas that apply specifically to the homepage. */
export function HomeJsonLd() {
  return (
    <JsonLd
      data={[
        /**
         * FAQPage — eligible for FAQ rich results in Google Search.
         * Using the education FAQ set as it is the first tab shown.
         */
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Socratic Metric?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Socratic Metric is an AI-powered oral assessment platform that measures how well students understand course material by asking them to explain, reason, and respond out loud in real time.",
              },
            },
            {
              "@type": "Question",
              name: "How is this different from discussion questions or written exams?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Written work can be edited, assisted, or generated. Socratic Metric evaluates thinking as it happens. Students must respond verbally to adaptive questions, which makes it very difficult to rely on outside help.",
              },
            },
            {
              "@type": "Question",
              name: "How does Socratic Metric address AI cheating?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Because responses are oral, adaptive, and time-bound, students cannot simply paste in answers. The system measures authentic understanding rather than polished output.",
              },
            },
            {
              "@type": "Question",
              name: "Does Socratic Metric integrate with Canvas or other LMS platforms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Socratic Metric integrates with major LMS systems including Canvas, with single sign-on and automated grade transfer.",
              },
            },
            {
              "@type": "Question",
              name: "Can Socratic Metric be used for enterprise compliance training?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Socratic Metric verifies that employees can explain, apply, and defend knowledge in real-time conversations. It sits on top of your existing training and answers a different question: Can your people actually perform when it matters?",
              },
            },
            {
              "@type": "Question",
              name: "Is Socratic Metric suitable for government agencies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. It is designed for high-stakes situations where decisions, communication, and reasoning must be accurate under pressure. It provides enterprise-grade security and can be configured to meet government requirements for data handling and access control.",
              },
            },
          ],
        },

        /**
         * SoftwareApplication — eligible for app rich results in Google Search.
         */
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Socratic Metric™",
          url: siteUrl,
          description:
            "AI-moderated oral assessment and cognitive verification platform that verifies live human understanding through adaptive spoken dialogue — for education, enterprise, and government.",
          applicationCategory: "EducationApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            url: `${siteUrl}/request-demo`,
            priceCurrency: "USD",
            price: "0",
            description: "Request a free demo to get started.",
          },
          featureList: [
            "AI-moderated oral assessment",
            "Adaptive real-time questioning",
            "Voice authentication and identity verification",
            "LMS integration (Canvas and others)",
            "Audit-ready FERPA-compliant records",
            "Immediate feedback loop",
          ],
          provider: {
            "@type": "Organization",
            name: "SocraticMetric AI",
            url: siteUrl,
          },
        },

        /**
         * VideoObject — eligible for Video rich results / video carousels in Google Search.
         */
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Socratic Metric — Evaluate Live Cognition Demo",
          description:
            "See how Socratic Metric's AI-moderated oral assessment platform verifies authentic human understanding in real time. Watch the platform in action for education, enterprise, and government use cases.",
          thumbnailUrl: `${siteUrl}/img/homepage/homepage-video-1-thubnail.png`,
          uploadDate: "2024-01-01",
          embedUrl: `https://www.youtube.com/embed/B1LGkF_4vHA`,
          contentUrl: `https://www.youtube.com/watch?v=B1LGkF_4vHA`,
          publisher: {
            "@type": "Organization",
            name: "SocraticMetric AI",
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/img/logos/sm_logo.svg`,
            },
          },
        },
      ]}
    />
  );
}

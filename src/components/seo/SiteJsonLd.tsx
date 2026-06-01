import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export function SiteJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SocraticMetric AI",
          url: siteUrl,
          logo: `${siteUrl}/img/logos/sm_logo.svg`,
          sameAs: ["https://www.linkedin.com/company/socratic-metric/"],
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@socraticmetric.ai",
            contactType: "customer support",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SocraticMetric AI",
          url: siteUrl,
        },
      ]}
    />
  );
}

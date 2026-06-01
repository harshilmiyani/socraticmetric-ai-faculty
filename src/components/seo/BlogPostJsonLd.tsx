import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

type BlogPostJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  author: string;
  coverImageUrl?: string | null;
};

export function BlogPostJsonLd({
  title,
  description,
  slug,
  author,
  coverImageUrl,
}: BlogPostJsonLdProps) {
  const url = `${getSiteUrl()}/blog/${slug}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "SocraticMetric AI",
          logo: {
            "@type": "ImageObject",
            url: `${getSiteUrl()}/img/logos/sm_logo.svg`,
          },
        },
        ...(coverImageUrl
          ? {
              image: {
                "@type": "ImageObject",
                url: coverImageUrl,
              },
            }
          : {}),
      }}
    />
  );
}

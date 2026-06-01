import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";

export const SITE_NAME = "SocraticMetric AI";
export const DEFAULT_OG_IMAGE_PATH = "/opengraph-image";

const DEFAULT_DESCRIPTION =
  "Socratic Metric™ verifies live cognition when written output is no longer proof of understanding. Oral assessment for education, enterprise, and government.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  /** Use for home or blog posts where the title template should not apply. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

function pageUrl(path = ""): string {
  if (!path || path === "/") return getSiteUrl();
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function ogImages() {
  return [
    {
      url: DEFAULT_OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    },
  ];
}

export function createPageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: ogImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function createBlogPostMetadata({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  const pageTitle = `${title} | SocraticMetric Blog`;
  const url = pageUrl(`/blog/${slug}`);

  return {
    title: { absolute: pageTitle },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      images: ogImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
    description: DEFAULT_DESCRIPTION,
    url: getSiteUrl(),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: ogImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
};

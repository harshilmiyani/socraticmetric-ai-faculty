import type { PortableTextBlock } from "@portabletext/types";

export type SanityImageAsset = {
  _type?: string;
  asset?: { _ref?: string; _type?: string };
  alt?: string;
};

export type SanityPostListGroq = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  readTime?: string;
  category?: string;
  authorName?: string;
  authorRole?: string;
  mainImage?: SanityImageAsset | null;
};

export type SanityPostDetailGroq = SanityPostListGroq & {
  body?: PortableTextBlock[] | null;
};

export type BlogPostCard = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
  imageClass: string;
  coverImageUrl: string | null;
  source: "sanity" | "fallback";
};

export type BlogPostPageData = BlogPostCard & {
  body: PortableTextBlock[] | null;
  fallbackHtml: string | null;
};

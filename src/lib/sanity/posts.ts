import { getSanityClient, isSanityConfigured } from "./client";
import { postBySlugQuery, postSlugsQuery, postsListQuery } from "./queries";
import { urlForImage } from "./image";
import { fallbackBlogHtml, fallbackBlogPosts } from "./fallback-posts";
import type { BlogPostCard, BlogPostPageData, SanityPostDetailGroq, SanityPostListGroq } from "./types";

function formatPostDate(iso: string | undefined): string {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function mapSanityListItem(p: SanityPostListGroq, index: number): BlogPostCard {
  const gradients = [
    "bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9]",
    "bg-gradient-to-br from-[#FFF4ED] to-[#F1F5F9]",
    "bg-gradient-to-br from-slate-100 to-[#EAF1FE]/60",
    "bg-gradient-to-br from-[#EAF1FE]/80 to-[#F58022]/10",
  ];
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    author: p.authorName ?? "SocraticMetric",
    role: p.authorRole ?? "",
    date: formatPostDate(p.publishedAt) || "Draft",
    readTime: p.readTime ?? "5 min read",
    category: p.category ?? "Blog",
    imageClass: gradients[index % gradients.length],
    coverImageUrl: urlForImage(p.mainImage ?? null),
    source: "sanity",
  };
}

export async function getBlogPosts(): Promise<BlogPostCard[]> {
  const client = getSanityClient();
  if (!client) return fallbackBlogPosts;

  try {
    const rows = await client.fetch<SanityPostListGroq[]>(postsListQuery);
    return (rows ?? []).map((p, i) => mapSanityListItem(p, i));
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostPageData | null> {
  const client = getSanityClient();

  if (client) {
    try {
      const doc = await client.fetch<SanityPostDetailGroq | null>(postBySlugQuery, { slug });
      if (doc?.slug) {
        const card = mapSanityListItem(doc, 0);
        return {
          ...card,
          body: doc.body ?? null,
          fallbackHtml: null,
        };
      }
    } catch {
      /* fall through to fallback */
    }
  }

  const fb = fallbackBlogPosts.find((p) => p.slug === slug);
  if (!fb) return null;
  const html = fallbackBlogHtml[slug] ?? null;
  if (!html) return null;

  return {
    ...fb,
    body: null,
    fallbackHtml: html,
  };
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const fromFallback = fallbackBlogPosts.map((p) => p.slug);
  const client = getSanityClient();
  if (!client) return fromFallback;

  try {
    const slugs = await client.fetch<string[]>(postSlugsQuery);
    const merged = new Set([...fromFallback, ...(slugs ?? [])]);
    return [...merged];
  } catch {
    return fromFallback;
  }
}

export { isSanityConfigured };

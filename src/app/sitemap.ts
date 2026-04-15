import type { MetadataRoute } from "next";
import { getBlogEntriesForSitemap } from "@/lib/sanity/posts";
import { getSiteUrl } from "@/lib/site-url";

/** Regenerate sitemap periodically so new Sanity posts are included without redeploying. */
export const revalidate = 3600;

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/business", changeFrequency: "monthly", priority: 0.85 },
  { path: "/education", changeFrequency: "monthly", priority: 0.85 },
  { path: "/enterprise", changeFrequency: "monthly", priority: 0.85 },
  { path: "/government", changeFrequency: "monthly", priority: 0.85 },
  { path: "/science", changeFrequency: "monthly", priority: 0.85 },
  { path: "/why-it-matters", changeFrequency: "monthly", priority: 0.85 },
  { path: "/patents", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.75 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/request-demo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = await getBlogEntriesForSitemap();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(({ slug, lastModified }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: lastModified ?? now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

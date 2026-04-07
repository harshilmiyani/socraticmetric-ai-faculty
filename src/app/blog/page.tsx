import { BlogHero, BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogListing } from "@/components/blog/BlogListing";
import { getBlogPosts, isSanityConfigured } from "@/lib/sanity/posts";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sanityConfigured = isSanityConfigured();

  return (
    <BlogPageShell>
      <BlogHero />
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_40%,transparent_100%)] pointer-events-none opacity-70" />
        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-7xl">
          <BlogListing posts={posts} sanityConfigured={sanityConfigured} />
        </div>
      </section>
    </BlogPageShell>
  );
}

import { BlogHero, BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogListing } from "@/components/blog/BlogListing";
import { getBlogPosts } from "@/lib/sanity/posts";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogPageShell>
      <BlogHero />
      <section
        className="relative overflow-hidden border-t border-slate-200/70 pb-16 pt-6 md:pb-20 md:pt-8 lg:pb-24"
        aria-label="Blog articles"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EDF3]/60 via-[#F1F5F9] to-[#F1F5F9]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_85%_55%_at_50%_100%,#000_35%,transparent_100%)] opacity-80" />
        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <BlogListing posts={posts} />
        </div>
      </section>
    </BlogPageShell>
  );
}

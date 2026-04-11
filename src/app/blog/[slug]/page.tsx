import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { blogPortableTextComponents } from "@/components/blog/portable-components";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/sanity/posts";
import { extractTocFromPortableText, enrichFallbackHtmlWithToc } from "@/lib/blog/toc";
import { BlogPostToc } from "@/components/blog/BlogPostToc";
import type { PortableTextBlock } from "@portabletext/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | SocraticMetric Blog`,
    description: post.excerpt,
  };
}

const fallbackArticleClass =
  "prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#1F2A44] prose-h2:scroll-mt-28 prose-h3:scroll-mt-28 prose-p:text-[#64748B] prose-p:leading-[1.75] prose-li:text-[#64748B] prose-li:leading-relaxed prose-strong:text-[#1F2A44] prose-a:text-[#3370F7] prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-[#3370F7]";

const articleInnerClass = "max-w-[46rem] mx-auto w-full";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let tocItems = extractTocFromPortableText(post.body as PortableTextBlock[] | null);
  let fallbackHtmlWithAnchors: string | null = null;
  if (!post.body?.length && post.fallbackHtml) {
    const { html, toc } = enrichFallbackHtmlWithToc(post.fallbackHtml);
    fallbackHtmlWithAnchors = html;
    tocItems = toc;
  }

  const hasCover = Boolean(post.coverImageUrl);

  return (
    <BlogPageShell>
      {/* Masthead: typography on deep navy — image never sits behind text */}
      <header className="relative isolate overflow-hidden bg-[#1F2A44] pt-24 text-white md:pt-28 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(ellipse 120% 80% at 20% 0%, rgb(51 112 247 / 0.45), transparent 55%),
              radial-gradient(ellipse 90% 70% at 100% 20%, rgb(245 128 34 / 0.2), transparent 50%),
              linear-gradient(180deg, rgb(31 42 68) 0%, rgb(22 32 52) 100%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 [mask-image:linear-gradient(180deg,white_40%,transparent_100%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 md:pb-14 lg:px-10 lg:pb-16 xl:px-14">
          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/15 sm:text-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back
            </Link>
            <span className="text-white/25" aria-hidden>
              ·
            </span>
            <Link href="/blog" className="text-xs font-semibold text-[#9BB8FF] transition-colors hover:text-white">
              All articles
            </Link>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#3370F7]/40 bg-[#3370F7]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8D9FF] sm:text-xs">
              {post.category}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
              Article
            </span>
          </div>

          <h1 className="mb-6 max-w-[22ch] font-serif text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white sm:max-w-[28ch] sm:text-4xl md:mb-8 md:text-5xl lg:text-[4rem] lg:leading-[1.06]">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:mb-10">{post.excerpt}</p>
          ) : null}

          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3370F7]/80 to-[#1F2A44] text-sm font-bold text-white ring-2 ring-white/20">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                {post.role ? <p className="text-sm text-white/60">{post.role}</p> : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#F58022]" strokeWidth={2} aria-hidden />
                {post.date}
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#7EB6FF]" strokeWidth={2} aria-hidden />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom curve into page background */}
        <div
          className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
        <div
          className="relative z-10 h-12 bg-[#F1F5F9] [clip-path:ellipse(120%_100%_at_50%_100%)] sm:h-16 md:h-20"
          aria-hidden
        />
      </header>

      <section
        className="relative overflow-hidden pb-20 pt-6 md:pb-28 md:pt-8"
        aria-label="Article body"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EDF3]/40 via-[#F1F5F9] to-[#F1F5F9]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_30%,transparent_100%)] opacity-70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <article className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white bg-white/95 shadow-xl shadow-[#1F2A44]/[0.06] ring-1 ring-black/[0.05] backdrop-blur-sm sm:rounded-3xl">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3370F7] via-[#4C8FD6]/80 to-[#F58022]/70 sm:w-1.5 sm:rounded-l-3xl"
              aria-hidden
            />

            {hasCover ? (
              <figure className="relative w-full overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#E8EDF3] via-[#F1F5F9] to-[#F8FAFC]">
                {/* Height scales with viewport (svh avoids mobile URL-bar jump); caps grow by breakpoint */}
                <div
                  className="relative mx-auto w-full max-w-full
                    h-[clamp(12.5rem,42svh,20rem)]
                    sm:h-[clamp(13.5rem,48svh,26rem)]
                    md:h-[clamp(15rem,52svh,32rem)]
                    lg:h-[clamp(17rem,56svh,38rem)]
                    xl:h-[clamp(18rem,min(60svh,68vh),45rem)]"
                >
                  <Image
                    src={post.coverImageUrl!}
                    alt={`Cover: ${post.title}`}
                    fill
                    className="object-contain object-center p-3 sm:p-5 md:p-7 lg:p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) min(100vw - 2rem, 42rem), (max-width: 1280px) min(100vw - 6rem, 48rem), min(72rem, 65vw)"
                    priority
                  />
                </div>
              </figure>
            ) : null}

            <div className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
              <div className="pointer-events-none absolute right-6 top-6 hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-[#EAF1FE]/80 to-transparent lg:block" aria-hidden />

              {post.body?.length ? (
                <div className={`${articleInnerClass} [&_h2:first-child]:mt-0 [&_h3:first-child]:mt-0`}>
                  <PortableText value={post.body} components={blogPortableTextComponents} />
                </div>
              ) : fallbackHtmlWithAnchors ? (
                <div className={articleInnerClass}>
                  <div className={fallbackArticleClass} dangerouslySetInnerHTML={{ __html: fallbackHtmlWithAnchors }} />
                </div>
              ) : null}
            </div>
          </article>

          <BlogPostToc items={tocItems} />

          <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
            <BlogPostCTA />
          </div>
        </div>
      </section>
    </BlogPageShell>
  );
}

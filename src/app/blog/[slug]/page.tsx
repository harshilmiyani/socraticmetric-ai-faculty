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
import { BlogTocDrawer } from "@/components/blog/BlogTocDrawer";
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
  "prose prose-lg lg:prose-xl max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#1F2A44] prose-h2:scroll-mt-28 prose-h3:scroll-mt-28 prose-p:text-[#85756F] prose-p:leading-[1.75] prose-li:text-[#85756F] prose-li:leading-relaxed prose-strong:text-[#1F2A44] prose-a:text-[#3370F7] prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-[#3370F7]";

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

  const hasHeroImage = Boolean(post.coverImageUrl);

  return (
    <BlogPageShell>
      {hasHeroImage ? (
        <header className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.coverImageUrl!}
              alt={`${post.title} — article hero image`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-[#1F2A44]/92"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/40 via-transparent to-transparent opacity-90" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(88vh,720px)] max-w-7xl flex-col justify-between px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:min-h-[min(78vh,680px)] md:pt-32 lg:px-10 lg:pb-14 lg:pt-36 xl:px-14">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-black/20 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/25"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
                Back
              </Link>
              <span className="hidden text-white/35 sm:inline" aria-hidden>
                /
              </span>
              <Link
                href="/blog"
                className="hidden text-xs font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white sm:inline"
              >
                All articles
              </Link>
            </div>

            <div className="mt-10 max-w-4xl space-y-5 md:mt-14 md:space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#3370F7]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white ring-1 ring-white/25 backdrop-blur-sm sm:text-xs">
                  {post.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">Article</span>
              </div>

              <h1 className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-white text-balance drop-shadow-sm sm:text-4xl md:text-5xl lg:text-[3.35rem]">
                {post.title}
              </h1>

              <div className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-md sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:rounded-3xl sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-lg font-bold text-white ring-2 ring-white/30">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{post.author}</p>
                    {post.role ? <p className="text-sm text-white/75">{post.role}</p> : null}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white/95">
                    <Calendar className="h-4 w-4 text-[#7EB6FF]" strokeWidth={2} aria-hidden />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white/95">
                    <Clock className="h-4 w-4 text-[#7EB6FF]" strokeWidth={2} aria-hidden />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-24 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/85 to-transparent md:h-32"
            aria-hidden
          />
        </header>
      ) : (
        <header className="relative overflow-hidden pb-8 pt-24 md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
          <div className="pointer-events-none absolute left-[-8%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#3370F7]/10 blur-[100px]" />
          <div className="pointer-events-none absolute right-[-12%] top-[15%] h-[480px] w-[480px] rounded-full bg-[#F58022]/6 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_45%,transparent_100%)] opacity-80" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#85756F] shadow-sm backdrop-blur-md transition-all hover:border-[#3370F7]/25 hover:text-[#3370F7]"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
                Back
              </Link>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                /
              </span>
              <Link
                href="/blog"
                className="hidden text-xs font-semibold text-[#3370F7] transition-colors hover:text-[#4C8FD6] sm:inline"
              >
                All articles
              </Link>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#EAF1FE]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#3370F7] ring-1 ring-[#3370F7]/12 sm:text-xs">
                {post.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3370F7]/80 sm:text-xs">Article</span>
            </div>

            <h1 className="mb-8 max-w-4xl font-sans text-3xl font-bold leading-[1.12] tracking-tight text-[#1F2A44] sm:text-4xl md:text-5xl lg:text-[3.35rem]">
              {post.title}
            </h1>

            <div className="flex flex-col gap-5 rounded-2xl border border-white/90 bg-white/70 p-5 shadow-lg shadow-[#1F2A44]/[0.04] ring-1 ring-black/[0.04] backdrop-blur-md sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:rounded-3xl sm:p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9] text-lg font-bold text-[#3370F7] shadow-sm ring-2 ring-white">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#1F2A44]">{post.author}</p>
                  {post.role ? <p className="text-sm text-[#85756F]">{post.role}</p> : null}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9]/90 px-3 py-2 text-sm font-semibold text-[#85756F] ring-1 ring-slate-200/80">
                  <Calendar className="h-4 w-4 text-[#3370F7]" strokeWidth={2} aria-hidden />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9]/90 px-3 py-2 text-sm font-semibold text-[#85756F] ring-1 ring-slate-200/80">
                  <Clock className="h-4 w-4 text-[#3370F7]" strokeWidth={2} aria-hidden />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#E8EDF3]/80 via-[#F1F5F9]/30 to-transparent md:h-28"
            aria-hidden
          />
        </header>
      )}

      <section
        className="relative overflow-hidden pb-20 pt-2 md:pb-28 md:pt-4"
        aria-label="Article body"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E8EDF3]/40 via-[#F1F5F9] to-[#F1F5F9]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_30%,transparent_100%)] opacity-70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <article className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white bg-white/95 shadow-xl shadow-[#1F2A44]/[0.06] ring-1 ring-black/[0.05] backdrop-blur-sm sm:rounded-3xl">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3370F7] via-[#4C8FD6]/80 to-[#F58022]/70 sm:w-1.5 sm:rounded-l-3xl"
              aria-hidden
            />
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

          <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
            <BlogPostCTA />
          </div>
        </div>

        <BlogTocDrawer items={tocItems} />
      </section>
    </BlogPageShell>
  );
}

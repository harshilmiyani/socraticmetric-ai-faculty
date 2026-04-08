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

  return (
    <BlogPageShell>
      <div className="relative pt-24 pb-0 md:pt-28 lg:pt-32 overflow-hidden">
        <div className="absolute top-[5%] left-[-8%] w-[420px] h-[420px] bg-[#3370F7]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-12%] w-[480px] h-[480px] bg-[#F58022]/6 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-7xl relative z-10 pb-10 md:pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#85756F] hover:text-[#3370F7] mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3370F7] mb-4">
            <span>{post.category}</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1F2A44] leading-[1.12] tracking-tight mb-8 max-w-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-8 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#EAF1FE] ring-2 ring-white shadow-md flex items-center justify-center text-[#3370F7] font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#1F2A44]">{post.author}</p>
                {post.role ? <p className="text-sm text-[#85756F]">{post.role}</p> : null}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[#85756F]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#3370F7]" strokeWidth={2} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#3370F7]" strokeWidth={2} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {post.coverImageUrl ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-7xl -mt-2 mb-10 md:mb-14">
          <div className="relative aspect-[21/9] sm:aspect-[2/1] w-full rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl shadow-black/[0.06]">
            <Image
              src={post.coverImageUrl}
              alt={`Cover: ${post.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      ) : null}

      <section className="relative py-10 md:py-14 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_35%,transparent_100%)] pointer-events-none opacity-60" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-7xl relative z-10">
          <div className="max-w-6xl mx-auto w-full">
            <article className="bg-white rounded-2xl sm:rounded-3xl border border-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5 p-6 sm:p-10 md:p-12 lg:p-14">
              {post.body?.length ? (
                <div className="[&_h2:first-child]:mt-0 [&_h3:first-child]:mt-0">
                  <PortableText value={post.body} components={blogPortableTextComponents} />
                </div>
              ) : fallbackHtmlWithAnchors ? (
                <div
                  className={fallbackArticleClass}
                  dangerouslySetInnerHTML={{ __html: fallbackHtmlWithAnchors }}
                />
              ) : null}
            </article>

            <div className="mt-10 sm:mt-12">
              <BlogPostCTA />
            </div>
          </div>
        </div>

        <BlogTocDrawer items={tocItems} />
      </section>
    </BlogPageShell>
  );
}

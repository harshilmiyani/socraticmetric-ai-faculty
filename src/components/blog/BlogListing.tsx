"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { BlogPostCard } from "@/lib/sanity/types";

type Props = {
  posts: BlogPostCard[];
};

function PostMeta({
  post,
  className = "",
}: {
  post: BlogPostCard;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#3370F7] ${className}`}
    >
      <span className="rounded-full bg-[#EAF1FE]/90 px-2.5 py-0.5 text-[#3370F7] ring-1 ring-[#3370F7]/10">
        {post.category}
      </span>
      <span className="flex items-center gap-1.5 text-[#85756F] normal-case font-semibold tracking-normal">
        <Clock className="h-3.5 w-3.5 shrink-0 text-[#3370F7]/70" strokeWidth={2} />
        {post.readTime}
      </span>
    </div>
  );
}

function AuthorRow({ post }: { post: BlogPostCard }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9] text-sm font-bold text-[#3370F7] shadow-sm ring-2 ring-white">
        {post.author.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-[#1F2A44]">{post.author}</p>
        <p className="truncate text-xs text-[#64748B]">{post.date}</p>
      </div>
    </div>
  );
}

function ReadCircleLink({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-[#3370F7] shadow-sm transition-all duration-300 hover:bg-[#3370F7] hover:text-white hover:border-[#3370F7] hover:shadow-md hover:shadow-[#3370F7]/25"
      aria-label={`Read ${title}`}
    >
      <ArrowRight className="h-5 w-5" strokeWidth={2} />
    </Link>
  );
}

function FeaturedPostCard({ post }: { post: BlogPostCard }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white bg-white shadow-xl shadow-[#1F2A44]/[0.06] ring-1 ring-black/[0.05] transition-shadow duration-300 hover:shadow-2xl hover:ring-[#3370F7]/12"
    >
      <div className="grid lg:grid-cols-[1.25fr_1fr] lg:gap-0">
        <Link
          href={`/blog/${post.slug}`}
          className="relative block h-56 sm:h-64 lg:h-full lg:min-h-[320px] w-full overflow-hidden shrink-0"
        >
          <div className={`absolute inset-0 ${post.coverImageUrl ? "" : post.imageClass}`}>
            {post.coverImageUrl ? (
              <Image
                src={post.coverImageUrl}
                alt={`Cover: ${post.title}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="absolute top-6 right-6 text-[#3370F7]/20 transition-colors group-hover:text-[#3370F7]/30">
                  <svg className="h-36 w-36 sm:h-40 sm:w-40" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-[#1F2A44]/0 transition-colors duration-500 group-hover:bg-[#1F2A44]/[0.03] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none lg:h-40" />
        </Link>

        <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 lg:border-l lg:border-slate-100">
          <div className="absolute right-6 top-6 hidden lg:flex h-10 w-10 items-center justify-center rounded-xl bg-[#F58022]/10 text-[#F58022]">
            <Sparkles className="h-5 w-5" strokeWidth={2} aria-hidden />
          </div>

          <PostMeta post={post} className="mb-4" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-[#1F2A44] leading-[1.15] tracking-tight mb-5 group-hover:text-[#3370F7] transition-colors duration-300">
            <Link
              href={`/blog/${post.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3370F7]/30 focus-visible:rounded-sm"
            >
              {post.title}
            </Link>
          </h2>

          <p className="text-[#64748B] leading-relaxed text-base sm:text-lg mb-8 line-clamp-3 sm:line-clamp-4 lg:line-clamp-[5]">
            {post.excerpt}
          </p>

          <div className="mt-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
            <AuthorRow post={post} />
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3370F7] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#3370F7]/25 transition-all hover:bg-[#4C8FD6] hover:shadow-xl hover:shadow-[#3370F7]/30"
            >
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function GridPostCard({ post, i }: { post: BlogPostCard; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: Math.min(i * 0.06, 0.36), duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white bg-white shadow-lg shadow-[#1F2A44]/[0.04] ring-1 ring-black/[0.05] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1F2A44]/[0.08] hover:ring-[#3370F7]/10"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative block h-48 sm:h-52 lg:h-56 w-full shrink-0 overflow-hidden"
      >
        <div className={`absolute inset-0 ${post.coverImageUrl ? "" : post.imageClass}`}>
          {post.coverImageUrl ? (
            <Image
              src={post.coverImageUrl}
              alt={`Cover: ${post.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 720px"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
              <div className="absolute top-4 right-4 p-4 text-[#3370F7]/25 transition-colors group-hover:text-[#3370F7]/35">
                {i % 2 === 0 ? (
                  <svg className="h-24 w-24 sm:h-28 sm:w-28" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                ) : (
                  <svg className="h-24 w-24 sm:h-28 sm:w-28" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                )}
              </div>
            </>
          )}
        </div>
        <div className="absolute inset-0 bg-[#1F2A44]/0 transition-colors duration-500 group-hover:bg-[#1F2A44]/[0.03] pointer-events-none" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <PostMeta post={post} className="mb-3" />

        <h2 className="mb-3 font-serif text-xl font-bold leading-tight text-[#1F2A44] transition-colors duration-300 group-hover:text-[#3370F7] sm:text-2xl">
          <Link
            href={`/blog/${post.slug}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3370F7]/30 focus-visible:rounded-sm"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-[#64748B] sm:text-[0.9375rem] line-clamp-3">{post.excerpt}</p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <AuthorRow post={post} />
          <ReadCircleLink slug={post.slug} title={post.title} />
        </div>
      </div>
    </motion.article>
  );
}

export function BlogListing({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-lg rounded-2xl border border-white bg-white/90 px-8 py-14 text-center shadow-xl shadow-black/[0.04] ring-1 ring-black/5 sm:rounded-3xl sm:px-12"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9] ring-1 ring-[#3370F7]/10">
          <Sparkles className="h-7 w-7 text-[#3370F7]" strokeWidth={1.75} />
        </div>
        <p className="mb-2 text-lg font-bold text-[#1F2A44]">Insights coming soon</p>
        <p className="text-sm leading-relaxed text-[#85756F]">
          We don&apos;t have any articles published here yet. New perspectives on oral verification, learning, and
          assessment will appear when they&apos;re ready — please check back later.
        </p>
      </motion.div>
    );
  }

  const [featured, ...rest] = posts;
  const showFeatured = posts.length >= 1;

  return (
    <div className="w-full space-y-10 sm:space-y-12 lg:space-y-14">
      {showFeatured ? <FeaturedPostCard post={featured} /> : null}

      {rest.length > 0 ? (
        <div>
          <div className="mb-6 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3370F7]">Library</p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1F2A44] sm:text-4xl">
                More articles
              </h2>
            </div>
            <p className="text-sm font-medium text-[#85756F]">
              {rest.length} more {rest.length === 1 ? "article" : "articles"} to explore
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {rest.map((post, i) => (
              <GridPostCard key={post.slug} post={post} i={i} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

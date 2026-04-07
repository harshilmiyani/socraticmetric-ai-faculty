"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPostCard } from "@/lib/sanity/types";

type Props = {
  posts: BlogPostCard[];
  /** When true and list is empty, show CMS hint instead of generic copy. */
  sanityConfigured?: boolean;
};

export function BlogListing({ posts, sanityConfigured = false }: Props) {
  if (posts.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center rounded-2xl border border-white bg-white/90 shadow-xl shadow-black/[0.04] ring-1 ring-black/5 px-8 py-14">
        <p className="text-lg font-semibold text-[#1F2A44] mb-2">No posts yet</p>
        <p className="text-sm text-[#85756F] leading-relaxed mb-6">
          {sanityConfigured
            ? "Publish a post in Sanity Studio — it will show here within about a minute, or immediately after your revalidation webhook runs."
            : "Add NEXT_PUBLIC_SANITY_PROJECT_ID to your environment to load posts from Sanity, or publish content in the CMS."}
        </p>
        {sanityConfigured ? (
          <Link
            href="/studio"
            className="inline-flex items-center justify-center rounded-full bg-[#3370F7] text-white text-sm font-bold px-6 py-3 shadow-lg shadow-[#3370F7]/25 hover:bg-[#4C8FD6] transition-colors"
          >
            Open Studio
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group flex flex-col bg-white rounded-2xl border border-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5 overflow-hidden hover:shadow-2xl hover:ring-[#3370F7]/10 transition-all duration-300"
        >
          <Link href={`/blog/${post.slug}`} className="relative block h-48 sm:h-52 w-full overflow-hidden shrink-0">
            <div className={`absolute inset-0 ${post.coverImageUrl ? "" : post.imageClass}`}>
              {post.coverImageUrl ? (
                <Image
                  src={post.coverImageUrl}
                  alt={`Cover: ${post.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  <div className="absolute top-4 right-4 p-6 text-[#3370F7]/25 group-hover:text-[#3370F7]/35 transition-colors">
                    {i % 2 === 0 ? (
                      <svg className="w-28 h-28 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                    ) : (
                      <svg className="w-28 h-28 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                      </svg>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#3370F7] mb-3 flex-wrap">
              <span>{post.category}</span>
              <span className="text-slate-200 font-normal" aria-hidden>
                •
              </span>
              <span className="flex items-center gap-1.5 text-[#85756F] normal-case font-semibold tracking-normal">
                <Clock className="h-3.5 w-3.5 text-[#3370F7]/70" strokeWidth={2} />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2A44] mb-3 leading-snug group-hover:text-[#3370F7] transition-colors duration-300">
              <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3370F7]/30 focus-visible:rounded-sm">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm sm:text-base text-[#85756F] leading-relaxed mb-6 flex-1">{post.excerpt}</p>

            <div className="flex items-center justify-between gap-4 pt-5 border-t border-slate-100 mt-auto">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-full bg-[#EAF1FE] ring-2 ring-white shadow-sm flex items-center justify-center text-[#3370F7] font-bold text-sm shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#1F2A44] truncate">{post.author}</p>
                  <p className="text-xs text-[#85756F] truncate">{post.date}</p>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-[#F1F5F9] text-[#3370F7] shadow-sm transition-all duration-300 hover:bg-[#3370F7] hover:text-white hover:border-[#3370F7] hover:shadow-md hover:shadow-[#3370F7]/25"
                aria-label={`Read ${post.title}`}
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

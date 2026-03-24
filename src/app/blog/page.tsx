"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

// Blog Data
export const blogPosts = [
  {
    slug: "end-of-the-essay",
    title: "The End of the Essay: Why Oral Assessment is the Future",
    excerpt: "Generative AI has trivialized the take-home essay. It's time to return to the Socratic method, scaled for the 21st century.",
    author: "Dr. Sarah Chen",
    role: "Chief Learning Officer",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Thought Leadership",
    image: "bg-indigo-100" // Placeholder class for now
  },
  {
    slug: "cognitive-science-verbal-testing",
    title: "The Generation Effect: How Speaking Boosts Retention",
    excerpt: "Cognitive science shows that articulating an idea reinforces the neural pathways associated with it. Here's the science behind SocraticMetric.",
    author: "James Wilson",
    role: "Head of Product",
    date: "January 28, 2026",
    readTime: "4 min read",
    category: "Cognitive Science",
    image: "bg-purple-100"
  }
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#1F2A44] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-white">
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-tight mb-6"
            >
              Insights & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Perspectives</span>
            </motion.h1>
            <p className="text-lg text-[#85756F] max-w-2xl mx-auto">
              Exploring the intersection of AI, assessment, and human learning.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {blogPosts.map((post, i) => (
                <motion.article 
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#F5F5F5] flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className={`h-48 w-full ${post.image} relative overflow-hidden group`}>
                     <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                     {/* Decorative pattern */}
                     <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                        {i === 0 ? (
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                        ) : (
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        )}
                     </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
                      <span>{post.category}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-[#85756F] normal-case font-normal">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1F2A44] mb-3 hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-[#85756F] leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-[#F5F5F5] mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-[#85756F] font-bold text-sm">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1F2A44]">{post.author}</p>
                          <p className="text-xs text-[#85756F]">{post.date}</p>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="rounded-full hover:bg-indigo-50 text-indigo-600 p-0 h-10 w-10 flex items-center justify-center">
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { use } from "react";
import { blogPosts } from "../page"; // We'll assume we can import the list or just redefine the data for simplicity here to avoid client/server conflicts

// Full Content Data
const blogContent: Record<string, string> = {
  "end-of-the-essay": `
    <p>For decades, the take-home essay was the gold standard of academic assessment. It tested critical thinking, research skills, and the ability to construct a coherent argument. It was, in many ways, the perfect proxy for understanding.</p>
    
    <p>Then came ChatGPT.</p>
    
    <p>Suddenly, the correlation between a submitted essay and a student's actual knowledge broke. A student could generate a B+ essay in seconds with zero understanding of the material. Educators scrambled. Some banned laptops. Others turned to AI detection software, sparking an arms race that schools were destined to lose.</p>

    <h3>The Detection Trap</h3>
    <p>AI detection tools are fundamentally probabilistic. They don't "know" if text is AI-generated; they guess based on statistical patterns. This leads to false positives (accusing innocent students) and false negatives (letting cheaters pass). It creates an adversarial classroom environment where every student is a suspect.</p>

    <h3>The Socratic Solution</h3>
    <p>The solution isn't better detection; it's better assessment. We need to measure something AI cannot easily forge: real-time verbal reasoning.</p>
    
    <p>When a student speaks about a topic, they reveal the depth of their understanding instantly. Can they connect concepts? Can they defend their argument against a follow-up question? Can they cite sources from memory?</p>
    
    <p>Oral exams have historically been unscalable—a professor can't interview 300 students. But with SocraticMetric, we use Voice AI to conduct these interviews at scale. The AI acts as the Socratic tutor, asking questions, listening to answers, and grading based on the <em>content</em> of the speech, not the eloquence.</p>

    <p>This isn't just about catching cheaters. It's about freeing students from the temptation to cheat. When the assessment requires them to speak, they focus on learning the material, knowing that no prompt can save them in the moment.</p>
  `,
  "cognitive-science-verbal-testing": `
    <p>Ask any teacher how they learned their subject best, and they'll tell you: "I learned it when I had to teach it."</p>

    <p>This is the <strong>Generation Effect</strong> in action. Cognitive science has long shown that information is better remembered if it is generated from one's own mind rather than simply read. When you have to articulate an idea, you are forcing your brain to retrieve information, structure it, and translate it into language.</p>

    <h3>Neural Pathways of Speech</h3>
    <p>Speaking is a complex cognitive task. It activates Broca's area (language production) and Wernicke's area (comprehension) simultaneously. Unlike selecting 'C' on a multiple-choice test, speaking requires:</p>
    <ul>
      <li><strong>Retrieval:</strong> Pulling facts from long-term memory.</li>
      <li><strong>Synthesis:</strong> Combining those facts into a new structure.</li>
      <li><strong>Articulation:</strong> converting that structure into speech.</li>
    </ul>

    <p>This active processing creates stronger memory traces. Students who explain concepts aloud retain that information longer than those who simply re-read their notes.</p>

    <h3>Assessment as Learning</h3>
    <p>At SocraticMetric, we view assessment not just as a measurement tool, but as a learning reinforcement tool. By requiring students to answer orally, we are tricking them into using the most effective study method available: self-explanation.</p>

    <p>Even if a student struggles through an oral answer, the act of struggling is productive. It highlights gaps in their knowledge immediately. When they receive immediate feedback and try again, they are engaging in <strong>deliberate practice</strong>.</p>
    
    <p>We're moving from "Assessment OF Learning" to "Assessment AS Learning."</p>
  `
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const postInfo = blogPosts.find(p => p.slug === slug);
  const content = blogContent[slug];

  if (!postInfo || !content) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#1F2A44] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-40 pb-16 bg-white border-b border-[#F5F5F5]">
           <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
              <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#85756F] hover:text-indigo-600 mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-indigo-600 font-bold uppercase tracking-wider mb-6">
                <span>{postInfo.category}</span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1F2A44] leading-tight mb-8">
                {postInfo.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[#F5F5F5]">
                <div className="flex items-center gap-3">
                   <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-[#85756F] font-bold text-lg">
                      {postInfo.author.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-[#1F2A44]">{postInfo.author}</p>
                     <p className="text-xs text-[#85756F]">{postInfo.role}</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-6 text-[#85756F] text-sm">
                   <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {postInfo.date}</span>
                   <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {postInfo.readTime}</span>
                </div>
              </div>
           </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <article className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-indigo max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#F5F5F5]">
               <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>

            {/* Share / CTA */}
            <div className="mt-12 flex justify-center">
               <div className="bg-indigo-900 text-white p-8 rounded-2xl text-center max-w-2xl w-full">
                  <h3 className="font-serif text-2xl font-bold mb-4">Ready to try oral assessment?</h3>
                  <p className="text-indigo-200 mb-6">Join the pilot program and see the difference in your classroom.</p>
                  <Link href="/#contact">
                    <Button className="bg-white text-indigo-900 hover:bg-indigo-50 border-none">Book a Demo</Button>
                  </Link>
               </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

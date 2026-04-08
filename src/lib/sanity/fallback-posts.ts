import type { BlogPostCard } from "./types";

/** Static posts used when Sanity is not configured or returns no data. */
export const fallbackBlogPosts: BlogPostCard[] = [
  {
    slug: "end-of-the-essay",
    title: "The End of the Essay: Why Oral Assessment is the Future",
    excerpt:
      "Generative AI has trivialized the take-home essay. It's time to return to the Socratic method, scaled for the 21st century.",
    author: "Dr. Sarah Chen",
    role: "Chief Learning Officer",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Thought Leadership",
    imageClass: "bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9]",
    coverImageUrl: null,
    source: "fallback",
  },
  {
    slug: "cognitive-science-verbal-testing",
    title: "The Generation Effect: How Speaking Boosts Retention",
    excerpt:
      "Cognitive science shows that articulating an idea reinforces the neural pathways associated with it. Here's the science behind SocraticMetric.",
    author: "James Wilson",
    role: "Head of Product",
    date: "January 28, 2026",
    readTime: "4 min read",
    category: "Cognitive Science",
    imageClass: "bg-gradient-to-br from-[#FFF4ED] to-[#F1F5F9]",
    coverImageUrl: null,
    source: "fallback",
  },
];

export const fallbackBlogHtml: Record<string, string> = {
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
  `,
};

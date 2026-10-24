export type EducationSolutionLink = {
  label: string;
  slug: string;
  description: string;
};

export const EDUCATION_SOLUTION_LINKS: EducationSolutionLink[] = [
  {
    label: "AI Oral Exam Software",
    slug: "ai-oral-exam-software",
    description: "Automate oral exams with AI moderation while preserving academic rigor.",
  },
  {
    label: "Oral Assessment Platform",
    slug: "oral-assessment-platform",
    description: "Run structured oral assessments at scale across courses and programs.",
  },
  {
    label: "Scalable Oral Exams",
    slug: "scalable-oral-exams",
    description: "Deliver high-stakes oral exams to large cohorts without adding faculty load.",
  },
  {
    label: "Asynchronous Oral Assessment",
    slug: "asynchronous-oral-assessment",
    description: "Let students complete oral assessments on their schedule with verified responses.",
  },
  {
    label: "AI-Resistant Assessment",
    slug: "ai-resistant-assessment",
    description: "Verify authentic understanding when written work can be AI-generated.",
  },
  {
    label: "Oral Defense Software",
    slug: "oral-defense-software",
    description: "Support thesis, capstone, and dissertation defenses with live verification.",
  },
  {
    label: "Viva Voice Platform",
    slug: "viva-voice-platform",
    description: "Modern viva voce workflows with adaptive questioning and audit trails.",
  },
  {
    label: "Discussion Board Alternative",
    slug: "discussion-board-alternative",
    description: "Replace shallow forum posts with spoken reasoning and accountable dialogue.",
  },
];

// Subset shown in the navbar — only these three, in this order
export const NAVBAR_EDUCATION_LINKS: EducationSolutionLink[] = [
  {
    label: "AI Oral Exam Software",
    slug: "ai-oral-exam-software",
    description: "Automate oral exams with AI moderation while preserving academic rigor.",
  },
  {
    label: "Discussion Board Alternative",
    slug: "discussion-board-alternative",
    description: "Replace shallow forum posts with spoken reasoning and accountable dialogue.",
  },
  {
    label: "AI-Resistant Assessment",
    slug: "ai-resistant-assessment",
    description: "Verify authentic understanding when written work can be AI-generated.",
  },
];

export function educationSolutionHref(slug: string): string {
  return `/education/${slug}`;
}

export function getEducationSolutionBySlug(slug: string): EducationSolutionLink | undefined {
  return EDUCATION_SOLUTION_LINKS.find((item) => item.slug === slug);
}

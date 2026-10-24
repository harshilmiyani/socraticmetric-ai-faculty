import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { AiOralExamSoftwareSolution } from "@/components/education/solutions/AiOralExamSoftwareSolution";
import { OralAssessmentPlatformSolution } from "@/components/education/solutions/OralAssessmentPlatformSolution";
import { ScalableOralExamsSolution } from "@/components/education/solutions/ScalableOralExamsSolution";
import { AsynchronousOralAssessmentSolution } from "@/components/education/solutions/AsynchronousOralAssessmentSolution";
import { AiResistantAssessmentSolution } from "@/components/education/solutions/AiResistantAssessmentSolution";
import { OralDefenseSoftwareSolution } from "@/components/education/solutions/OralDefenseSoftwareSolution";
import { VivaVoicePlatformSolution } from "@/components/education/solutions/VivaVoicePlatformSolution";
import { DiscussionBoardAlternativeSolution } from "@/components/education/solutions/DiscussionBoardAlternativeSolution";
import {
  EDUCATION_SOLUTION_LINKS,
  getEducationSolutionBySlug,
} from "@/lib/education-solutions";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { createPageMetadata } from "@/lib/site-metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return EDUCATION_SOLUTION_LINKS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getEducationSolutionBySlug(slug);

  if (!solution) {
    return createPageMetadata({
      title: "Education Solution",
      description: "Education solutions from Socratic Metric.",
      path: `/education/${slug}`,
      noIndex: true,
    });
  }

  if (slug === "ai-oral-exam-software") {
    return createPageMetadata({
      title: "AI Oral Exam Software | Verify Real Student Understanding",
      description:
        "SocraticMetric conducts adaptive, spoken examinations with every student — delivering rubric-aligned evaluations, verbatim transcripts, and cited evidence without the calendar math.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "oral-assessment-platform") {
    return createPageMetadata({
      title: "Oral Assessment Platform Built for Higher Education",
      description:
        "Run oral exams, defenses, and role-plays as a consistent, auditable process across courses and departments with enterprise compliance.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "scalable-oral-exams") {
    return createPageMetadata({
      title: "Scalable Oral Exams for Every Student You Teach",
      description:
        "Run adaptive oral exams concurrently for entire cohorts so class size stops deciding how rigorously you can assess.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "asynchronous-oral-assessment") {
    return createPageMetadata({
      title: "Asynchronous Oral Assessment | Exams on the Student's Clock",
      description:
        "Set an assessment window and let students join adaptive oral examinations on their schedule with verified transcripts.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "ai-resistant-assessment") {
    return createPageMetadata({
      title: "AI-Resistant Assessment | Beyond Detection Tools",
      description:
        "Stop detecting AI and start assessing what it can't fake: live, spoken explanation and unscripted reasoning.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "oral-defense-software") {
    return createPageMetadata({
      title: "Oral Defense Software | If They Wrote It, They Can Defend It",
      description:
        "SocraticMetric conducts spoken defenses tailored to each student's submitted essay, code, project, or thesis.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "viva-voice-platform") {
    return createPageMetadata({
      title: "AI Viva Voce Platform | The Living Voice Freed From the Committee Room",
      description:
        "Conduct adaptive viva voce examinations for any course and cohort size with full transcript evidence and examiner oversight.",
      path: `/education/${solution.slug}`,
    });
  }

  if (slug === "discussion-board-alternative") {
    return createPageMetadata({
      title: "Discussion Board Alternative | Retire the Board, Keep the Discussion",
      description:
        "Replace automated forum posts with short spoken discussions that show weekly engagement and authentic understanding.",
      path: `/education/${solution.slug}`,
    });
  }

  return createPageMetadata({
    title: solution.label,
    description: solution.description,
    path: `/education/${solution.slug}`,
  });
}

export default async function EducationSolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getEducationSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const isAiOralExam = slug === "ai-oral-exam-software";
  const isOralAssessmentPlatform = slug === "oral-assessment-platform";
  const isScalableOralExams = slug === "scalable-oral-exams";
  const isAsynchronousOralAssessment = slug === "asynchronous-oral-assessment";
  const isAiResistantAssessment = slug === "ai-resistant-assessment";
  const isOralDefense = slug === "oral-defense-software";
  const isVivaVoice = slug === "viva-voice-platform";
  const isDiscussionBoard = slug === "discussion-board-alternative";

  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {isAiOralExam ? (
          <AiOralExamSoftwareSolution />
        ) : isOralAssessmentPlatform ? (
          <OralAssessmentPlatformSolution />
        ) : isScalableOralExams ? (
          <ScalableOralExamsSolution />
        ) : isAsynchronousOralAssessment ? (
          <AsynchronousOralAssessmentSolution />
        ) : isAiResistantAssessment ? (
          <AiResistantAssessmentSolution />
        ) : isOralDefense ? (
          <OralDefenseSoftwareSolution />
        ) : isVivaVoice ? (
          <VivaVoicePlatformSolution />
        ) : isDiscussionBoard ? (
          <DiscussionBoardAlternativeSolution />
        ) : (
          <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12">
              <Link
                href="/education"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3370F7] transition-colors hover:text-[#2558D8]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Education
              </Link>

              <div className="mb-4">
                <span className="inline-block rounded-full border border-[#3370F7]/20 bg-[#EAF1FE] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3370F7]">
                  Education Solution
                </span>
              </div>

              <h1 className="animate-text-enter max-w-3xl font-serif text-4xl font-bold leading-[1.12] tracking-tight text-[#1F2A44] sm:text-5xl md:text-6xl">
                {solution.label}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {solution.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={REQUEST_DEMO_BOOKING_HREF}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2558D8] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-lg"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/education"
                  className="inline-flex items-center gap-2 rounded-full border border-[#3370F7]/20 bg-white px-6 py-3 text-sm font-bold text-[#3370F7] transition-colors hover:bg-[#EAF1FE]"
                >
                  Explore all education solutions
                </Link>
              </div>
            </div>
          </section>
        )}

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


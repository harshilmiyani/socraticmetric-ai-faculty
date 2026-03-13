"use client";

import { FileText, BookOpen, Award, Hourglass } from "lucide-react";

export function EducationRisk() {
  const risks = [
    {
      icon: <FileText className="w-8 h-8 text-yellow-500" />,
      bg: "bg-yellow-50",
      title: "Undetected AI-generated essays and assignments",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
      title: "Limited visibility into individual student understanding",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
      title: "Difficulty proving academic integrity to accreditors",
    },
    {
      icon: <Hourglass className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-50",
      title: "Faculty time consumed by suspected cheating investigations",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1F2A44]">
            The new risk in higher education
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            AI tools make it easy for students to submit polished work that may not reflect their own thinking.
            Grading written documentation alone no longer proves authentic comprehension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center space-y-6"
            >
              <div className={`p-4 rounded-full ${risk.bg} group-hover:scale-110 transition-transform`}>
                {risk.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1F2A44] leading-snug">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

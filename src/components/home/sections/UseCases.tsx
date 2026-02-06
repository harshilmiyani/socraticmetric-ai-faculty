import { GraduationCap, Building, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCases() {
  const cases = [
    {
      icon: GraduationCap,
      colorClass: "bg-blue-100 text-blue-600",
      title: "Education",
      desc: "Ensure academic integrity in humanities and business courses where essay mills are prevalent. Perfect for high-stakes assessments."
    },
    {
      icon: Building,
      colorClass: "bg-purple-100 text-purple-600",
      title: "Government",
      desc: "Secure, on-premise solutions for public sector training and language verification. Meets strict compliance and data sovereignty standards."
    },
    {
      icon: Users,
      colorClass: "bg-indigo-100 text-indigo-600",
      title: "Businesses",
      desc: "Verify candidates actually have the skills they claim. Streamline soft-skills training and compliance checks for remote teams."
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Tailored for Every Learning Environment</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((card, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", card.colorClass.split(" ")[0])}>
                <card.icon className={cn("h-7 w-7", card.colorClass.split(" ")[1])} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

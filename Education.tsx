import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

export const Education = () => {
  const education = [
    {
      level: "Senior High School",
      institution: "Comboni Technical Institute",
      location: "Volta Region, Ghana",
      period: "Graduate",
      description: "Completed comprehensive technical education with focus on practical skills and theoretical knowledge in technology and engineering."
    },
    {
      level: "Junior High School",
      institution: "Mighty Rock Bilingual School",
      location: "Lakeside-Accra, Ghana",
      period: "Completed",
      description: "Built strong foundational knowledge across core subjects with emphasis on academic excellence and personal development."
    }
  ];

  return (
    <section id="education" className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My educational journey has provided me with a strong technical foundation 
            and critical thinking skills essential for success in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-primary group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{edu.level}</h3>
                    <p className="text-sm text-accent">{edu.period}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-primary">{edu.institution}</h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

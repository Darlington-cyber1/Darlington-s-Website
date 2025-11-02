import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Application Development",
      description: "Building robust, scalable applications with modern technologies and best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Website Design",
      description: "Creating visually stunning and user-friendly interfaces that captivate audiences"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to deliver cutting-edge solutions"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hello! I'm <span className="text-primary font-semibold">Darlington Owusu</span>, 
              a passionate website designer and application developer dedicated to creating 
              exceptional digital experiences that make a difference.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              With a keen eye for design and a strong foundation in development, I specialize 
              in transforming ideas into elegant, functional solutions. My journey in technology 
              has equipped me with the skills to bridge the gap between aesthetics and functionality, 
              ensuring every project not only looks great but performs flawlessly.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I believe in the power of clean code, intuitive interfaces, and continuous learning. 
              Whether it's crafting a responsive website or developing a complex application, 
              I approach each project with dedication, creativity, and attention to detail.
            </p>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-primary group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

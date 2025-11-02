import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Contact />
      
      <footer className="py-8 px-4 bg-card border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Darlington Owusu. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/60">
            Designed & Developed with passion
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

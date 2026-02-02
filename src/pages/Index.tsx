import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ApproachSection } from "@/components/landing/ApproachSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ProcessSection />
        <TestimonialsSection />
      </div>
      
      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2026 — Fait avec{" "}
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />{" "}
            pour les SaaS ambitieux
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

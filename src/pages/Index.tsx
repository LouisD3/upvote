import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ApproachSection } from "@/components/landing/ApproachSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 — Fait avec ❤️ pour les SaaS B2B ambitieux
        </p>
      </footer>
    </div>
  );
};

export default Index;

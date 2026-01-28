import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ApproachSection } from "@/components/landing/ApproachSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
      <ProblemSection />
        <ApproachSection />
      </div>
      
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

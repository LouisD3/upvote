import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
      </div>
      
      <footer className="py-10 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2026 — {t("footer.madeWith")}{" "}
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />{" "}
            {t("footer.forSaaS")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Heart, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { XIcon } from "@/components/icons/XIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

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
      
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Email */}
            <a
              href="mailto:contact@redditpartners.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@redditpartners.com
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/mateodr_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mateodrouillard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              © 2026 RedditPartners — {t("footer.madeWith")}{" "}
              <Heart className="w-3.5 h-3.5 text-primary fill-primary" />{" "}
              {t("footer.forSaaS")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

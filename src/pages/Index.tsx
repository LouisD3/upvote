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
import logo from "@/assets/logo_reddit_agence.png";

const Index = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <div className="flex flex-col gap-8">
            {/* Top row: logo + nav + socials */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo + name */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="RedditPartners" className="h-8 w-8 rounded-lg" />
                <span className="text-foreground font-bold text-lg">RedditPartners</span>
              </div>

              {/* Nav links */}
              <nav className="flex items-center gap-6">
                <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.howItWorks")}
                </button>
                <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.pricing")}
                </button>
                <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.faq")}
                </button>
              </nav>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <a href="mailto:contact@redditpartners.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://x.com/mateodr_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                  <XIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/mateodrouillard/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* Bottom row: copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                © 2026 RedditPartners. {t("footer.allRights")}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                {t("footer.madeWith")}{" "}
                <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
                {t("footer.forSaaS")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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
          <div className="flex flex-col gap-10">
            {/* Top: left info + right nav */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Left: logo, socials, email */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="UpvotePartners" className="h-7 w-7 rounded-lg" />
                  <span className="text-foreground font-semibold text-lg">UpvotePartners</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://x.com/mateodr_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/mateodrouillard/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
                <a href="mailto:contact@redditpartners.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  contact@redditpartners.com
                </a>
              </div>

              {/* Right: nav columns */}
              <nav className="flex gap-16">
                <div className="flex flex-col gap-3">
                  <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.howItWorks")}
                  </button>
                  <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.pricing")}
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.faq")}
                  </button>
                </div>
              </nav>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* Bottom: copyright */}
            <p className="text-xs text-muted-foreground">
              Copyright ©RedditPartners. {t("footer.allRights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

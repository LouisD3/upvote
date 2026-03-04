import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import logo from "@/assets/logo_reddit_agence.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/posthog";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-redditpartners/audit";

export const Header = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <AnimatedSection>
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src={logo} 
                alt="RedditPartners" 
                className="relative w-11 h-11 rounded-xl transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 hidden sm:inline">
              RedditPartners
            </span>
          </a>
        </AnimatedSection>

        {/* Nav links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("process")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.howItWorks")}
          </button>
          <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.pricing")}
          </button>
          <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.faq")}
          </button>
        </nav>
        
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="text-lg hover:scale-110 transition-transform duration-200 px-1"
            aria-label="Toggle language"
          >
            {lang === "en" ? "🇫🇷" : "🇬🇧"}
          </button>

          <AnimatedSection delay={100}>
            <Button 
              onClick={() => { trackCTAClick("header"); window.open(CALENDLY_URL, "_blank"); }}
              size="sm" 
              className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t("header.cta")}</span>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

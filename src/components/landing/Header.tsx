import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import logoAsset from "@/assets/logo_reddit_agence.webp";
const logo = typeof logoAsset === 'string' ? logoAsset : logoAsset.src;

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const getAlternateUrl = (lang: string, currentPath: string): string => {
  if (lang === "en") {
    return currentPath.replace(/^\/en(\/|$)/, "/");
  }
  return `/en${currentPath === "/" ? "" : currentPath}`;
};

interface HeaderProps {
  lang?: "fr" | "en";
  currentPath?: string;
  showLangToggle?: boolean;
  navItems?: { label: string; sectionId: string }[];
  ctaLabel?: string;
  homePath?: string;
}

export const Header = ({
  lang = "fr",
  currentPath = "/",
  showLangToggle = false,
  navItems = [],
  ctaLabel = "Réserver un audit gratuit",
  homePath = "/",
}: HeaderProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <AnimatedSection>
          <a href={homePath} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="UpvotePartners"
                className="relative w-11 h-11 rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 hidden sm:inline">
              UpvotePartners
            </span>
          </a>
        </AnimatedSection>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollTo(item.sectionId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {showLangToggle && (
            <a
              href={getAlternateUrl(lang, currentPath)}
              className="text-lg hover:scale-110 transition-transform duration-200 px-1"
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
            >
              {lang === "en" ? "🇫🇷" : "🇬🇧"}
            </a>
          )}

          <AnimatedSection delay={100}>
            <Button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              size="sm"
              className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">{ctaLabel}</span>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

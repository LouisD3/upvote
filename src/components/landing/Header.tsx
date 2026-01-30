import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_reddit_agence.png";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <AnimatedSection>
          <a href="/" className="flex items-center gap-2 group">
            <img src={logo} alt="RedditPartners" className="w-12 h-12 rounded-lg" />
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              RedditPartners
            </span>
          </a>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Button onClick={scrollToTop} size="sm" className="flex items-center gap-2">
            <span>Rejoindre la waitlist</span>
            <span className="hidden sm:inline bg-background/20 text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              7 places
            </span>
          </Button>
        </AnimatedSection>
      </div>
    </header>
  );
};

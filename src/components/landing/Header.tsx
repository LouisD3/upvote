import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import logo from "@/assets/logo_reddit_agence.png";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              RedditPartners
            </span>
          </a>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Button 
            onClick={scrollToTop} 
            size="sm" 
            className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm sm:text-base">Rejoindre</span>
            <span className="hidden sm:inline text-sm sm:text-base">la waitlist</span>
            <span className="hidden md:inline bg-background/20 text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              7 places
            </span>
          </Button>
        </AnimatedSection>
      </div>
    </header>
  );
};

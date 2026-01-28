import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <AnimatedSection>
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              RedditGrowth
            </span>
          </a>
        </AnimatedSection>
      </div>
    </header>
  );
};

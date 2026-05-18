import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LogoBanner } from "./LogoBanner";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const FloatingRedditLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const handleBookAudit = () => {
  import("canvas-confetti").then(({ default: confetti }) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b00", "#ff8c33", "#ffad66", "#ffffff"],
    });
  });
  setTimeout(() => {
    window.open(CALENDLY_URL, "_blank");
  }, 600);
};

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-start px-6 pt-28 pb-0 text-center relative overflow-hidden bg-gradient-hero">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Floating Reddit logos background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <FloatingRedditLogo className="absolute top-[10%] left-[5%] w-12 h-12 text-primary/10 animate-[float1_8s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[20%] right-[10%] w-8 h-8 text-primary/8 animate-[float2_10s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[50%] left-[8%] w-16 h-16 text-primary/5 animate-[float3_12s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[30%] right-[5%] w-20 h-20 text-primary/7 animate-[float1_9s_ease-in-out_infinite_1s]" />
        <FloatingRedditLogo className="absolute bottom-[20%] left-[15%] w-10 h-10 text-primary/10 animate-[float2_11s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute bottom-[30%] right-[15%] w-14 h-14 text-primary/6 animate-[float3_8s_ease-in-out_infinite_0.5s]" />
        <FloatingRedditLogo className="absolute top-[60%] right-[25%] w-6 h-6 text-primary/8 animate-[float1_7s_ease-in-out_infinite_2s]" />
      </div>

      {/* YC Trust Badge */}
      <AnimatedSection delay={50} className="relative z-10 mb-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary">
            <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" />
          </svg>
          <span className="text-sm font-medium text-muted-foreground">
            {t("hero.trustedBy")}
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-foreground">{t("hero.headline1")}</span>
          <span className="text-gradient">{t("hero.headline2")}</span>
          <span className="text-foreground">{t("hero.headline3")}</span>
          <span className="text-gradient">{t("hero.headline4")}</span>
          <span className="text-foreground">.</span>
        </h1>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="mt-6 max-w-2xl mx-auto relative z-10">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t("hero.subline")}
        </p>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={500} className="mt-8 relative z-10">
        <Button
          onClick={handleBookAudit}
          size="lg"
          className={cn(
            "h-14 px-8 text-base font-bold rounded-xl",
            "hover:scale-[1.02] active:scale-[0.98]",
            "transition-all duration-300",
            "shadow-lg shadow-primary/30 animate-wiggle-glow"
          )}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {t("hero.cta")}
        </Button>
        <p className="mt-4 text-sm text-muted-foreground font-medium animate-pulse">
          🔥 {t("hero.limitedSpots")}
        </p>
      </AnimatedSection>

      <LogoBanner />
    </section>
  );
};
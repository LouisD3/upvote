import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ClipboardCheck, Target, UserPlus, Rocket, TrendingUp, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import confetti from "canvas-confetti";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const icons: LucideIcon[] = [ClipboardCheck, Target, UserPlus, Rocket, TrendingUp];

const StepCard = ({ step, index }: { step: { number: number; title: string; description: string; icon: LucideIcon }; index: number }) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  const isLast = index === 4;

  return (
    <div className="relative">
      <AnimatedSection delay={index * 200} animation="slide-up" className="w-full relative z-10">
        <div className={cn("flex items-center gap-6", "md:w-[80%]", isEven ? "md:justify-start md:ml-0" : "md:justify-end md:ml-auto")}>
          <div className={cn("flex items-center gap-5 p-6 rounded-2xl w-full", "bg-card/80 backdrop-blur-sm", "border border-primary/20", "hover:border-primary/40 hover:bg-card", "transition-all duration-500", "group cursor-default", "shadow-lg shadow-primary/5", isEven ? "md:flex-row" : "md:flex-row-reverse")}>
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={cn("relative w-16 h-16 rounded-2xl", "bg-gradient-to-br from-primary to-primary/80", "flex items-center justify-center", "shadow-lg shadow-primary/30", "group-hover:shadow-primary/50 group-hover:scale-110", "transition-all duration-500")}>
                <Icon className="w-7 h-7 text-primary-foreground" />
                <div className={cn("absolute -top-2 -right-2", "w-7 h-7 rounded-full", "bg-background border-2 border-primary", "flex items-center justify-center", "text-sm font-bold text-primary", "shadow-md")}>
                  {step.number}
                </div>
              </div>
            </div>
            <div className={cn("flex-1", isEven ? "text-left" : "md:text-right text-left")}>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {!isLast && (
        <AnimatedSection delay={index * 200 + 100} animation="fade-in" className="relative z-0">
          <div className="py-4 md:py-2">
            <div className="md:hidden flex justify-center">
              <div className="relative h-16 w-12">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 rounded-full" />
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
              </div>
            </div>
            <svg className="hidden md:block w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id={`pathGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(16 100% 50% / 0.5)" />
                  <stop offset="50%" stopColor="hsl(16 100% 50% / 0.8)" />
                  <stop offset="100%" stopColor="hsl(16 100% 50% / 0.5)" />
                </linearGradient>
                <circle id={`dot-${index}`} r="4" fill="hsl(16 100% 50%)">
                  <animateMotion dur="3s" repeatCount="indefinite" path={isEven ? "M 60,10 Q 200,40 340,70" : "M 340,10 Q 200,40 60,70"} />
                </circle>
              </defs>
              <path d={isEven ? "M 60,10 Q 200,40 340,70" : "M 340,10 Q 200,40 60,70"} fill="none" stroke={`url(#pathGradient-${index})`} strokeWidth="3" strokeLinecap="round" className="drop-shadow-sm" />
              <path d={isEven ? "M 60,10 Q 200,40 340,70" : "M 340,10 Q 200,40 60,70"} fill="none" stroke="hsl(16 100% 50% / 0.2)" strokeWidth="6" strokeLinecap="round" strokeDasharray="0 15" />
              <use href={`#dot-${index}`} />
            </svg>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
};

const handleBookAudit = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff6b00", "#ff8c33", "#ffad66", "#ffffff"],
  });
  setTimeout(() => {
    window.open(CALENDLY_URL, "_blank");
  }, 600);
};

export const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { number: 1, title: t("process.step1Title"), description: t("process.step1Desc"), icon: icons[0] },
    { number: 2, title: t("process.step2Title"), description: t("process.step2Desc"), icon: icons[1] },
    { number: 3, title: t("process.step3Title"), description: t("process.step3Desc"), icon: icons[2] },
    { number: 4, title: t("process.step4Title"), description: t("process.step4Desc"), icon: icons[3] },
    { number: 5, title: t("process.step5Title"), description: t("process.step5Desc"), icon: icons[4] },
  ];

  return (
    <section id="process" className="pt-12 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Target className="w-4 h-4" />
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("process.title1")}
            <span className="text-primary">{t("process.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("process.subtitle")}</p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <AnimatedSection delay={1200} className="mt-16 text-center">
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
            {t("process.cta")}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

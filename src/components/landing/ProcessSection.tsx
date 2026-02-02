import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ClipboardCheck, Target, UserPlus, Rocket, TrendingUp, LucideIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Audit",
    description: "Analyse de ton SaaS, funnel et ICP",
    icon: ClipboardCheck,
  },
  {
    number: 2,
    title: "Stratégie",
    description: "Définition de la stratégie Reddit sur-mesure",
    icon: Target,
  },
  {
    number: 3,
    title: "Setup",
    description: "Création des comptes + warm-up",
    icon: UserPlus,
  },
  {
    number: 4,
    title: "Exécution",
    description: "Déploiement de la stratégie + reporting mensuel",
    icon: Rocket,
  },
  {
    number: 5,
    title: "Scaling",
    description: "Scaling du canal pour maximiser les résultats",
    icon: TrendingUp,
  },
];

const StepCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  const isLast = index === steps.length - 1;

  return (
    <div className="relative">
      <AnimatedSection 
        delay={index * 200} 
        animation="slide-up"
        className="w-full relative z-10"
      >
        <div
          className={cn(
            "flex items-center gap-6",
            "md:w-[80%]",
            isEven ? "md:justify-start md:ml-0" : "md:justify-end md:ml-auto"
          )}
        >
          {/* Card content */}
          <div
            className={cn(
              "flex items-center gap-5 p-6 rounded-2xl w-full",
              "bg-card/80 backdrop-blur-sm",
              "border border-primary/20",
              "hover:border-primary/40 hover:bg-card",
              "transition-all duration-500",
              "group cursor-default",
              "shadow-lg shadow-primary/5",
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Number circle with icon */}
            <div className="relative flex-shrink-0">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div
                className={cn(
                  "relative w-16 h-16 rounded-2xl",
                  "bg-gradient-to-br from-primary to-primary/80",
                  "flex items-center justify-center",
                  "shadow-lg shadow-primary/30",
                  "group-hover:shadow-primary/50 group-hover:scale-110",
                  "transition-all duration-500"
                )}
              >
                <Icon className="w-7 h-7 text-primary-foreground" />
                
                {/* Step number badge */}
                <div
                  className={cn(
                    "absolute -top-2 -right-2",
                    "w-7 h-7 rounded-full",
                    "bg-background border-2 border-primary",
                    "flex items-center justify-center",
                    "text-sm font-bold text-primary",
                    "shadow-md"
                  )}
                >
                  {step.number}
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className={cn("flex-1", isEven ? "text-left" : "md:text-right text-left")}>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Connector path to next step */}
      {!isLast && (
        <AnimatedSection delay={index * 200 + 100} animation="fade-in" className="relative z-0">
          <div className="py-4 md:py-2">
            {/* Mobile: Vertical connector */}
            <div className="md:hidden flex justify-center">
              <div className="relative h-16 w-12">
                {/* Gradient line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 rounded-full" />
                {/* Animated dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
              </div>
            </div>

            {/* Desktop: Curved SVG path */}
            <svg
              className="hidden md:block w-full h-20"
              viewBox="0 0 400 80"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`pathGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(16 100% 50% / 0.5)" />
                  <stop offset="50%" stopColor="hsl(16 100% 50% / 0.8)" />
                  <stop offset="100%" stopColor="hsl(16 100% 50% / 0.5)" />
                </linearGradient>
                
                {/* Animated dot along path */}
                <circle id={`dot-${index}`} r="4" fill="hsl(16 100% 50%)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={isEven 
                      ? "M 60,10 Q 200,40 340,70"
                      : "M 340,10 Q 200,40 60,70"
                    }
                  />
                </circle>
              </defs>
              
              {/* Main curved path */}
              <path
                d={isEven 
                  ? "M 60,10 Q 200,40 340,70"
                  : "M 340,10 Q 200,40 60,70"
                }
                fill="none"
                stroke={`url(#pathGradient-${index})`}
                strokeWidth="3"
                strokeLinecap="round"
                className="drop-shadow-sm"
              />
              
              {/* Dashed overlay for style */}
              <path
                d={isEven 
                  ? "M 60,10 Q 200,40 340,70"
                  : "M 340,10 Q 200,40 60,70"
                }
                fill="none"
                stroke="hsl(16 100% 50% / 0.2)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="0 15"
              />

              {/* Animated traveling dot */}
              <use href={`#dot-${index}`} />
            </svg>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
};

export const ProcessSection = () => {
  return (
    <section className="pt-12 pb-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Target className="w-4 h-4" />
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            5 étapes pour{" "}
            <span className="text-primary">exploser sur Reddit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Un process éprouvé, done-for-you, pour transformer Reddit en machine à leads
          </p>
        </AnimatedSection>

        {/* Process steps with connected path */}
        <div className="relative">
          {/* Background continuous line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA - Scroll to Hero */}
        <AnimatedSection delay={1200} className="mt-16 text-center">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className={cn(
              "h-14 px-8 text-base font-bold rounded-xl",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "transition-all duration-300",
              "hover:scale-[1.02] active:scale-[0.98]",
              "shadow-lg shadow-primary/30 animate-wiggle-glow"
            )}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Rejoindre la waitlist
            <span className="ml-2 bg-background/20 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
              🔥 7 places
            </span>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

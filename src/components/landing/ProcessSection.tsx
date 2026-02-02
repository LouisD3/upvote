import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ClipboardCheck, Target, UserPlus, Rocket, TrendingUp, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    description: "Déploiement de la strat + reporting mensuel",
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

  return (
    <AnimatedSection 
      delay={index * 150} 
      animation="slide-up"
      className="w-full"
    >
      <div
        className={cn(
          "flex items-center gap-6",
          "md:w-[85%]",
          isEven ? "md:justify-start md:ml-0" : "md:justify-end md:ml-auto"
        )}
      >
        {/* Card content */}
        <div
          className={cn(
            "flex items-center gap-5 p-5 rounded-2xl w-full",
            "bg-card/60 backdrop-blur-sm",
            "border border-primary/10",
            "hover:border-primary/30 hover:bg-card/80",
            "transition-all duration-500",
            "group cursor-default",
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          {/* Number circle with icon */}
          <div className="relative flex-shrink-0">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div
              className={cn(
                "relative w-16 h-16 rounded-2xl",
                "bg-gradient-to-br from-primary to-primary/80",
                "flex items-center justify-center",
                "shadow-lg shadow-primary/20",
                "group-hover:shadow-primary/40 group-hover:scale-105",
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
                  "text-sm font-bold text-primary"
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
  );
};

const ConnectorLine = ({ index }: { index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative h-12 md:h-8 flex items-center justify-center">
      {/* Mobile vertical line */}
      <div className="md:hidden w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/20" />
      
      {/* Desktop diagonal SVG */}
      <svg
        className={cn(
          "hidden md:block absolute w-full h-16",
          "text-primary/30"
        )}
        preserveAspectRatio="none"
      >
        <path
          d={isEven 
            ? "M 15% 0 Q 50% 50%, 85% 100%" 
            : "M 85% 0 Q 50% 50%, 15% 100%"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="opacity-60"
        />
      </svg>
    </div>
  );
};

export const ProcessSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            5 étapes pour{" "}
            <span className="text-primary">exploser sur Reddit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Un process éprouvé, du-for-you, pour transformer Reddit en machine à leads
          </p>
        </AnimatedSection>

        {/* Process steps serpent */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.number}>
              <StepCard step={step} index={index} />
              {index < steps.length - 1 && <ConnectorLine index={index} />}
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <AnimatedSection delay={800} className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Prêt à lancer ta stratégie Reddit ?{" "}
            <a href="#waitlist-form" className="text-primary hover:underline font-medium">
              Rejoins la waitlist ↓
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

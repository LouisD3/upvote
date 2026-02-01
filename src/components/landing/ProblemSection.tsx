import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, X, ArrowRight } from "lucide-react";

const comparisonData = [
  {
    without: "Se fait bannir ou flag",
    with: "Un canal d'acquisition stable"
  },
  {
    without: "0-2 leads aléatoires (avec de la chance)",
    with: "Des leads ultras qualifiés récurrents en automatique"
  },
  {
    without: "6-10h/semaine perdues",
    with: "100% done-for-you"
  },
  {
    without: "Pics de trafic éphémères",
    with: "Threads qui génèrent du trafic pendant des mois"
  },
  {
    without: "Image de marque fragilisée",
    with: "Positionnement de marque renforcé"
  },
  {
    without: "Aucune visibilité hors Reddit",
    with: "Contenu qui compound via SEO & LLMs"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Le problème
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            La plupart des SaaS échouent sur Reddit.{" "}
            <span className="text-gradient">Pas nous.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Reddit n'est pas Twitter. Ni LinkedIn. Les règles sont différentes.
            Voici ce qui sépare ceux qui réussissent de ceux qui se font bannir.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without Strategy */}
          <AnimatedSection delay={150}>
            <div className="group h-full">
              <div className="h-full bg-card shadow-card rounded-2xl p-8 border border-destructive/20 transition-all duration-500 hover:shadow-lg hover:border-destructive/40">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Sans stratégie</h3>
                    <p className="text-sm text-muted-foreground">Ce qui arrive à 95% des SaaS</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {comparisonData.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-4 group/item"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:bg-destructive/20">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {item.without}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* With Strategy */}
          <AnimatedSection delay={250}>
            <div className="group h-full">
              <div className="relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative h-full bg-card shadow-card rounded-2xl p-8 border border-primary/30 transition-all duration-500 hover:shadow-card-hover overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-0 right-0 overflow-hidden">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 transform rotate-0 origin-top-right">
                      ✨ Notre système
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-glow-pulse">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Avec notre système</h3>
                      <p className="text-sm text-muted-foreground">Résultats garantis</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-5">
                    {comparisonData.map((item, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-4 group/item"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:bg-primary/20 group-hover/item:scale-110">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium group-hover/item:text-primary transition-colors duration-300">
                          {item.with}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Arrow indicator */}
        <AnimatedSection delay={400} className="flex justify-center mt-12">
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">De là</span>
            <ArrowRight className="w-5 h-5 text-primary animate-bounce-soft" style={{ animationDirection: "alternate" }} />
            <span className="text-sm font-medium text-primary">à là</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

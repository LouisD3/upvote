import { AnimatedSection } from "@/components/ui/AnimatedSection";

const approaches = [
  "Du storytelling natif Reddit",
  "Une distribution via les conversations",
  "De la visibilité par les commentaires stratégiques",
  "Des outils pour détecter où l'attention existe déjà",
];

export const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            La plupart des SaaS B2B échouent sur Reddit.{" "}
            <span className="text-primary">Pas nous.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-lg text-muted-foreground text-center mb-10 leading-relaxed">
            La plupart des SaaS échouent sur Reddit parce qu'ils le traitent comme Twitter ou LinkedIn.
            Nous, on ne fait pas ça. On utilise :
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {approaches.map((approach, index) => (
            <AnimatedSection key={approach} delay={200 + index * 100}>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                <p className="text-foreground font-medium">{approach}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

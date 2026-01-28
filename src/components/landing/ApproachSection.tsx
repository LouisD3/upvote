import { AnimatedSection } from "@/components/ui/AnimatedSection";

const trustBullets = [
  {
    title: "Mentalité opérateur",
    description: "Pas agence classique",
  },
  {
    title: "Zéro spam automatisé",
    description: "Chaque interaction est authentique",
  },
  {
    title: "Clients limités",
    description: "Pour garantir la qualité",
  },
  {
    title: "Signal long terme",
    description: "Plutôt que clics court terme",
  },
];

export const ApproachSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Reddit, c'est <span className="text-primary">différent</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustBullets.map((bullet, index) => (
            <AnimatedSection key={bullet.title} delay={100 + index * 100}>
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {bullet.title}
                </h3>
                <p className="text-muted-foreground">{bullet.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, X } from "lucide-react";
const comparisonData = [{
  without: "Se fait bannir ou flag",
  with: "Exécution native, conforme aux règles Reddit"
}, {
  without: "0-2 leads aléatoires (avec de la chance)",
  with: "Conversations inbound qualifiées régulières"
}, {
  without: "6-10h/semaine perdues",
  with: "100% done-for-you"
}, {
  without: "Posts qui sentent la promo → ban",
  with: "Perçu comme une voix respectée de la communauté"
}, {
  without: "Court après les posts viraux",
  with: "Construit l'autorité dans les bonnes communautés"
}, {
  without: "Pics de trafic éphémères",
  with: "Threads qui génèrent du trafic pendant des mois"
}, {
  without: "Risque de domage réputationnel",
  with: "Positionnement de marque renforcé"
}, {
  without: "Aucune visibilité hors Reddit",
  with: "Contenu qui compound via SEO & LLMs"
}];
export const ProblemSection = () => {
  return <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            La plupart des SaaS échouent sur Reddit.{" "}
            <span className="text-primary">Pas nous.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Reddit n'est pas Twitter. Ni LinkedIn. Les règles sont différentes.
            Voici ce qui sépare ceux qui réussissent de ceux qui se font bannir.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without Strategy */}
          <AnimatedSection delay={150}>
            <div className="bg-background border border-destructive/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Sans stratégie</h3>
              </div>
              <ul className="space-y-4">
                {comparisonData.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item.without}</span>
                  </li>)}
              </ul>
            </div>
          </AnimatedSection>

          {/* With Strategy */}
          <AnimatedSection delay={250}>
            <div className="bg-background border border-primary/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Notre système
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Avec notre système d'acquisition</h3>
              </div>
              <ul className="space-y-4">
                {comparisonData.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item.with}</span>
                  </li>)}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
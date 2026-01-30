import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lock, TrendingUp, Users, MessageSquare, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const blurredChartData = [
  { month: "J", impressions: 5000, leads: 2, mrr: 20 },
  { month: "F", impressions: 12000, leads: 5, mrr: 25 },
  { month: "M", impressions: 28000, leads: 12, mrr: 32 },
  { month: "A", impressions: 65000, leads: 28, mrr: 45 },
  { month: "M", impressions: 120000, leads: 52, mrr: 68 },
  { month: "J", impressions: 280000, leads: 95, mrr: 110 },
];

const credibilityPillars = [
  {
    icon: Users,
    quote: "On a construit et marketé nos propres produits SaaS.",
    meaning: "On vous comprend. On est un partenaire, pas un prestataire.",
  },
  {
    icon: MessageSquare,
    quote: "On a fait passer une audience X de 0 à 3k en 90 jours en misant sur la valeur.",
    meaning: "On sait créer de la valeur en écrivant.",
  },
  {
    icon: TrendingUp,
    quote: "On a écrit du contenu qui a généré des millions d'impressions organiques en quelques jours.",
    meaning: "On sait créer le buzz et surfer sur le momentum.",
  },
  {
    icon: Zap,
    quote: "On combine l'écriture Reddit-native avec des outils modernes de détection de signaux.",
    meaning: "Social listening, timing, analytics mais aucun posts automatisés.",
  },
];

export const ApproachSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            <span className="text-primary">Reddit</span>, c'est différent
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Et ça demande une approche différente. Voici pourquoi nos clients nous font confiance.
          </p>
        </AnimatedSection>

        {/* Blurred Chart Section */}
        <AnimatedSection delay={100}>
          <div 
            className="relative bg-card border border-border rounded-2xl p-6 mb-16 cursor-pointer group"
            onClick={scrollToForm}
          >
            {/* Chart - Blurred */}
            <div className="blur-sm group-hover:blur-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Résultats d'un client (6 mois)</h3>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    Impressions
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    Leads
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                    MRR (k€)
                  </span>
                </div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={blurredChartData}>
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Area 
                      type="monotone" 
                      dataKey="impressions" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary)/0.2)"
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="mrr" 
                      stroke="#3b82f6" 
                      fill="rgba(59, 130, 246, 0.2)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Overlay with Lock */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground text-center px-4">
                Nos clients restent anonymes
              </p>
              <p className="text-sm text-muted-foreground text-center mt-1 px-4">
                Le marketing Reddit efficace, c'est en toute discrétion.
              </p>
              <span className="mt-4 text-sm text-primary font-medium group-hover:underline">
                Rejoins la waitlist pour en savoir plus →
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
            Les résultats varient selon le produit et le marché, mais Reddit surpasse systématiquement le trafic payant en qualité des leads.
          </p>
        </AnimatedSection>

        {/* Credibility Pillars */}
        <AnimatedSection delay={200}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Pourquoi nous faire confiance ?
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityPillars.map((pillar, index) => (
            <AnimatedSection key={index} delay={300 + index * 100}>
              <div className="relative h-full">
                {/* Pillar design */}
                <div className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
                  {/* Top decorative element */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary to-transparent" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto mt-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-muted-foreground italic text-center mb-4 flex-grow">
                    "{pillar.quote}"
                  </p>
                  
                  {/* Meaning */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground text-center">
                      {pillar.meaning}
                    </p>
                  </div>
                  
                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

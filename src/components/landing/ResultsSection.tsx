import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "15",
    label: "leads/mois",
    description: "ultra qualifiés",
    suffix: "",
  },
  {
    icon: DollarSign,
    value: "0$",
    label: "CAC",
    description: "Coût d'acquisition",
    suffix: "",
  },
  {
    icon: TrendingUp,
    value: "2ème",
    label: "source",
    description: "d'acquisition en 3 mois",
    suffix: "",
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <BarChart3 className="w-4 h-4" />
            Résultats
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des résultats concrets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les performances moyennes de nos clients SaaS
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedSection 
              key={metric.label} 
              delay={100 + index * 100}
              animation="fade-up"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <metric.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

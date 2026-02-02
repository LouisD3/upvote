import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lock, TrendingUp, Users, MessageSquare, Zap, ArrowUpRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
const blurredChartData = [{
  month: "J",
  impressions: 5000,
  leads: 2,
  mrr: 20
}, {
  month: "F",
  impressions: 12000,
  leads: 5,
  mrr: 25
}, {
  month: "M",
  impressions: 28000,
  leads: 12,
  mrr: 32
}, {
  month: "A",
  impressions: 65000,
  leads: 28,
  mrr: 45
}, {
  month: "M",
  impressions: 120000,
  leads: 52,
  mrr: 68
}, {
  month: "J",
  impressions: 280000,
  leads: 95,
  mrr: 110
}];
const credibilityPillars = [{
  icon: Users,
  quote: "On a construit et marketé nos propres produits SaaS.",
  meaning: "On vous comprend. On est un partenaire, pas un prestataire.",
  gradient: "from-blue-500/20 to-cyan-500/20"
}, {
  icon: MessageSquare,
  quote: "On a fait passer une audience X de 0 à 3k en 90 jours en misant sur la valeur.",
  meaning: "On sait créer de la valeur en écrivant.",
  gradient: "from-purple-500/20 to-pink-500/20"
}, {
  icon: TrendingUp,
  quote: "On a écrit du contenu qui a généré des millions d'impressions organiques en quelques jours.",
  meaning: "On sait créer le buzz et surfer sur le momentum.",
  gradient: "from-primary/20 to-orange-500/20"
}, {
  icon: Zap,
  quote: "On combine l'écriture Reddit-native avec des outils modernes de détection de signaux.",
  meaning: "Social listening, timing, analytics mais aucun posts automatisés.",
  gradient: "from-yellow-500/20 to-green-500/20"
}];
export const ApproachSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Notre approche
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            <span className="text-gradient">Reddit</span>, c'est différent
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Et ça demande une approche différente. Voici pourquoi nos clients nous font confiance.
          </p>
        </AnimatedSection>

        {/* Blurred Chart Section */}
        <AnimatedSection delay={100}>
          <div className="relative bg-card shadow-card border border-border rounded-2xl p-8 mb-16 cursor-pointer group transition-all duration-500 hover:shadow-card-hover hover:border-primary/30" onClick={scrollToTop}>
            {/* Chart - Blurred */}
            <div className="blur-[2px] group-hover:blur-sm transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-xl font-bold text-foreground">Résultats d'un client (6 mois)</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-glow" />
                    <span className="text-muted-foreground">Impressions</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">MRR (k€)</span>
                  </span>
                </div>
              </div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={blurredChartData}>
                    <defs>
                      <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(16, 100%, 50%)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="hsl(16, 100%, 50%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Area type="monotone" dataKey="impressions" stroke="hsl(16, 100%, 50%)" fill="url(#primaryGradient)" strokeWidth={3} />
                    <Area type="monotone" dataKey="mrr" stroke="#3b82f6" fill="url(#blueGradient)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Overlay with Lock */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm rounded-2xl transition-all duration-500">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 animate-glow-pulse">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground text-center px-4 mb-2">
                Contrat d'exclusivité garanti
              </p>
              <p className="text-muted-foreground text-center px-4 max-w-md">
                On ne travaille jamais avec vos concurrents. Vos performances explosent, et on reste discrets si vous le souhaitez.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Rejoins la waitlist pour en savoir plus</span>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            Les résultats varient selon le produit et le marché, mais Reddit surpasse systématiquement n'importe quel traffic payant en qualité des leads.
          </p>
        </AnimatedSection>

        {/* Credibility Pillars */}
        <AnimatedSection delay={200} className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Pourquoi nous faire <span className="text-gradient">confiance</span> ?
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityPillars.map((pillar, index) => <AnimatedSection key={index} delay={300 + index * 100}>
              <div className="group h-full">
                <div className={`h-full bg-card shadow-card border border-border rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1`}>
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-glow">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-muted-foreground text-center mb-5 flex-grow leading-relaxed">
                    "{pillar.quote}"
                  </p>
                  
                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-4" />
                  
                  {/* Meaning */}
                  <p className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {pillar.meaning}
                  </p>
                </div>
              </div>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};
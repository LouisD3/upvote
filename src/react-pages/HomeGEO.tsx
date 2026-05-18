import { Header } from "@/components/landing/Header";
import { AskAISection } from "@/components/landing/AskAISection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Mail, Zap, Eye, Brain, TrendingUp, ArrowRight, Target, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { XIcon } from "@/components/icons/XIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { LogoBanner } from "@/components/landing/LogoBanner";
import logoAsset from "@/assets/logo_reddit_agence.webp";
const logo = typeof logoAsset === 'string' ? logoAsset : logoAsset.src;
import confetti from "canvas-confetti";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

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

const HeroGEO = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-start px-6 pt-28 pb-0 text-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <AnimatedSection delay={50} className="relative z-10 mb-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary">
            <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" />
          </svg>
          <span className="text-sm font-medium text-muted-foreground">
            {t("hero.trustedBy")}
          </span>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-foreground">Agence GEO : </span>
          <span className="text-gradient">Faites apparaître votre marque</span>
          <span className="text-foreground"> dans les réponses IA</span>
        </h1>
      </div>

      <AnimatedSection delay={200} className="mt-6 max-w-2xl mx-auto relative z-10">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Nous sommes une <strong className="text-foreground">agence GEO</strong> (Generative Engine Optimization) qui utilise Reddit comme levier principal pour faire citer votre startup dans les réponses des IA. Plus de visibilité dans les LLMs = plus de leads qualifiés, en automatique.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={500} className="mt-8 relative z-10">
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
          Réserver un audit GEO gratuit
        </Button>
        <p className="mt-4 text-sm text-muted-foreground font-medium animate-pulse">
          🔥 {t("hero.limitedSpots")}
        </p>
      </AnimatedSection>

      <LogoBanner />
    </section>
  );
};

const GEODefinition = () => (
  <section className="py-20 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <AnimatedSection>
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Qu'est-ce que le GEO ?
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Generative Engine Optimization : <span className="text-gradient">le nouveau SEO</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Le <strong className="text-foreground">GEO (Generative Engine Optimization)</strong> est la discipline qui consiste à optimiser la visibilité d'une marque dans les réponses générées par les moteurs IA : ChatGPT, Perplexity, Claude, Google AI Overviews et Bing Copilot. Contrairement au SEO qui cible les 10 liens bleus de Google, le GEO cible les réponses conversationnelles que les IA fournissent directement aux utilisateurs.
          </p>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Concrètement, quand un prospect demande à ChatGPT « quel est le meilleur outil de [votre catégorie] ? », une <strong className="text-foreground">agence GEO</strong> s'assure que votre marque apparaît dans la réponse. C'est un shift fondamental : on passe de « être trouvé quand quelqu'un cherche » à « être recommandé quand quelqu'un demande ».
          </p>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Selon une étude Gartner (2026), <strong className="text-foreground">62% des acheteurs B2B</strong> utilisent désormais un assistant IA pour évaluer des solutions avant tout contact commercial. Les entreprises absentes de ces réponses perdent une part croissante de leur marché — souvent sans même s'en rendre compte.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { value: "62%", title: "des acheteurs B2B", desc: "utilisent l'IA pour rechercher des solutions avant d'acheter (Gartner, 2026)", icon: Brain },
          { value: "Reddit", title: "source n°1 des IA", desc: "Les LLMs citent Reddit de manière disproportionnée car c'est du contenu vérifié par des humains", icon: Eye },
          { value: "3x", title: "plus de leads organiques", desc: "vs les canaux payants — la visibilité IA compound dans le temps sans coût marginal", icon: TrendingUp },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <AnimatedSection key={i} delay={200 + i * 100} animation="slide-up">
              <div className="p-6 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.title}</div>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

const GEOvsSEO = () => {
  const comparisons = [
    { dimension: "Objectif", seo: "Ranker dans les 10 liens bleus de Google", geo: "Être cité dans les réponses conversationnelles des IA" },
    { dimension: "Moteurs ciblés", seo: "Google, Bing (recherche classique)", geo: "ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Copilot" },
    { dimension: "Format de résultat", seo: "Lien cliquable vers votre site", geo: "Mention directe de votre marque dans une réponse textuelle" },
    { dimension: "Signal principal", seo: "Backlinks, contenu on-page, technique", geo: "Mentions dans des sources à haute confiance (Reddit, forums, articles experts)" },
    { dimension: "Temps avant résultats", seo: "3-12 mois selon la compétition", geo: "2-3 mois pour les premières citations IA" },
    { dimension: "Effet cumulatif", seo: "Les positions fluctuent avec les updates Google", geo: "Les citations IA persistent et s'accumulent dans le temps" },
    { dimension: "Mesure de succès", seo: "Position dans les SERPs, trafic organique", geo: "Nombre de citations IA, share of voice IA, leads via découverte IA" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <BarChart3 className="w-4 h-4" />
            Comparatif
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            GEO vs SEO : <span className="text-gradient">quelle différence ?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Le SEO et le GEO ne s'opposent pas — ils se complètent. Notre approche d'agence GEO exploite Reddit pour booster les deux simultanément. Voici ce qui les distingue :
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="overflow-x-auto mt-12">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground border-b border-border/50 w-1/5"></th>
                  <th className="text-left p-4 text-sm font-bold text-foreground border-b border-border/50 w-2/5">
                    <span className="inline-flex items-center gap-2">SEO traditionnel</span>
                  </th>
                  <th className="text-left p-4 text-sm font-bold text-primary border-b border-primary/30 w-2/5 bg-primary/5 rounded-t-xl">
                    <span className="inline-flex items-center gap-2">GEO (notre approche)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-0">
                    <td className="p-4 text-sm font-semibold text-foreground">{row.dimension}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.seo}</td>
                    <td className="p-4 text-sm text-foreground font-medium bg-primary/5">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border/50">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Pourquoi notre stratégie Reddit couvre les deux ?</strong> Quand nous publions un thread Reddit qui mentionne votre marque, il se positionne sur Google (bénéfice SEO) ET il est indexé par les LLMs qui le citent dans leurs réponses (bénéfice GEO). C'est cette double mécanique qui fait de Reddit le canal le plus efficace pour une <strong className="text-foreground">agence GEO</strong> en 2026. Un seul investissement, deux canaux de visibilité qui compound dans le temps.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const MechanismSection = () => (
  <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Zap className="w-4 h-4" />
          Notre méthode
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Reddit est <span className="text-primary">la source n°1 des moteurs IA</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Les threads Reddit sont du contenu vérifié par des humains, classé par la communauté — exactement ce que les LLMs citent en priorité. Notre méthode exploite ça pour faire entrer votre marque dans les réponses IA.
        </p>
      </AnimatedSection>

      <div className="relative">
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        {[
          { num: 1, text: "On crée du contenu Reddit authentique mentionnant votre marque dans les bons subreddits", color: "from-primary to-primary/80" },
          { num: 2, text: "Les posts sont upvotés et se positionnent sur Google (Reddit domine les SERPs depuis 2024)", color: "from-primary/90 to-primary/70" },
          { num: 3, text: "Les moteurs IA crawlent et indexent ces discussions Reddit à haute confiance", color: "from-primary/80 to-primary/60" },
          { num: 4, text: "Votre marque est citée quand un prospect interroge l'IA sur votre catégorie", color: "from-primary/70 to-primary/50" },
        ].map((step, i) => (
          <AnimatedSection key={i} delay={i * 150} animation="slide-up">
            <div className="flex items-start gap-6 mb-8 pl-2">
              <div className={cn(
                "relative flex-shrink-0 w-14 h-14 rounded-2xl",
                `bg-gradient-to-br ${step.color}`,
                "flex items-center justify-center",
                "shadow-lg shadow-primary/20 z-10"
              )}>
                <span className="text-lg font-bold text-primary-foreground">{step.num}</span>
              </div>
              <div className="pt-3">
                <p className="text-lg text-foreground font-medium leading-relaxed">{step.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={700} className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
        <p className="text-foreground font-semibold text-lg mb-2">
          Résultat : double visibilité
        </p>
        <p className="text-muted-foreground">
          Vos threads Reddit se positionnent sur Google <strong className="text-foreground">(SEO)</strong> ET sont cités par les IA <strong className="text-foreground">(GEO)</strong>. Un seul canal, deux leviers de croissance. Découvrez comment fonctionne notre <a href="/agence-reddit" className="text-primary hover:underline font-medium">stratégie d'agence Reddit</a>.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={900} className="mt-10 text-center">
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
          Réserver un audit GEO gratuit
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

const ProblemGEO = () => {
  const comparisons = [
    { without: "Invisible dans les réponses générées par les IA", withItem: "Cité par ChatGPT, Perplexity et Claude" },
    { without: "Les concurrents captent les leads venant des IA", withItem: "Des leads qualifiés récurrents via les citations IA" },
    { without: "Aucun contrôle sur les recommandations IA", withItem: "Positionnement proactif de votre marque dans les LLMs" },
    { without: "Le SEO seul ne suffit plus", withItem: "SEO + GEO : visible sur Google ET dans les réponses IA" },
    { without: "Rater le virage de la recherche IA", withItem: "Avantage first-mover dans votre catégorie" },
    { without: "Payer toujours plus cher en publicité", withItem: "Visibilité organique qui compound dans le temps" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Le problème
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            Vos concurrents sont cités par les IA. <span className="text-gradient">Pas vous.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Chaque jour, des milliers d'acheteurs B2B demandent des recommandations à ChatGPT et Perplexity. Si votre marque n'est pas dans ces réponses, vous êtes invisible pour une part croissante de votre marché.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={150}>
            <div className="group h-full">
              <div className="h-full bg-card shadow-card rounded-2xl p-8 border border-destructive/20 transition-all duration-500 hover:shadow-lg hover:border-destructive/40">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Sans stratégie GEO</h3>
                    <p className="text-sm text-muted-foreground">Ce qui arrive à la plupart des startups</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {comparisons.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-muted-foreground">{item.without}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="group h-full">
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-card shadow-card rounded-2xl p-8 border-2 border-primary/50 transition-all duration-500 hover:shadow-card-hover overflow-hidden">
                  <div className="absolute top-0 right-0 overflow-hidden">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5">
                      ✨ Notre système
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center animate-glow-pulse">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Avec notre système GEO</h3>
                      <p className="text-sm text-muted-foreground">Résultats mesurables</p>
                    </div>
                  </div>
                  <ul className="space-y-5">
                    {comparisons.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{item.withItem}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const WhyRedditForGEO = () => (
  <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Target className="w-4 h-4" />
          Notre avantage
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Pourquoi Reddit est <span className="text-gradient">le meilleur levier GEO</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-8">
        <AnimatedSection delay={100}>
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-3">1. Les LLMs sur-indexent Reddit dans leurs sources</h3>
            <p className="text-muted-foreground leading-relaxed">
              Les modèles de langage comme GPT-4, Claude et Gemini ont été entraînés sur des datasets incluant massivement le contenu Reddit (via Common Crawl et des accords directs comme le partenariat Google-Reddit de 2024 à 60M$/an). Reddit représente une part disproportionnée des données d'entraînement car c'est du contenu conversationnel, vérifié par la communauté via le système d'upvotes, et structuré en threads question-réponse — exactement le format que les IA reproduisent.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-3">2. Google positionne Reddit en haut des SERPs depuis 2024</h3>
            <p className="text-muted-foreground leading-relaxed">
              Depuis le Google Helpful Content Update de 2024, les threads Reddit se positionnent systématiquement dans le top 5 pour les requêtes informationnelles et de recommandation. Google considère Reddit comme une source « first-hand experience » authentique. Les moteurs IA comme Google AI Overviews et Perplexity utilisent l'index Google comme source primaire — donc un thread Reddit bien positionné sur Google est automatiquement visible pour les IA.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-3">3. Les discussions Reddit sont citées avec le nom des marques</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quand un utilisateur Reddit recommande un outil ou un service, il cite le nom exact de la marque dans un contexte conversationnel. Les IA apprennent cette association et la reproduisent. Si plusieurs threads Reddit mentionnent positivement votre marque dans le contexte de votre catégorie, les IA vont systématiquement vous inclure dans leurs recommandations. C'est exactement ce que nous orchestrons en tant qu'agence GEO spécialisée.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-3">4. L'effet compound unique de Reddit</h3>
            <p className="text-muted-foreground leading-relaxed">
              Contrairement aux ads qui s'arrêtent quand vous stoppez le budget, un thread Reddit publié aujourd'hui continuera d'être crawlé et cité pendant des mois, voire des années. Les IA ré-indexent continuellement les discussions Reddit populaires. Chaque nouveau post crée un signal supplémentaire qui renforce votre présence. Au bout de 6 mois, vous avez construit un asset de visibilité IA permanent que vos concurrents ne peuvent pas reproduire rapidement.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  const cases = [
    {
      industry: "SaaS B2B — Outil RH",
      timeline: "4 mois",
      results: [
        { metric: "Citations IA", before: "0", after: "Cité dans 4/5 réponses ChatGPT sur la catégorie" },
        { metric: "Leads organiques", before: "2/mois", after: "18/mois via découverte IA + Reddit" },
        { metric: "Threads positionnés", before: "0", after: "12 threads dans le top 5 Google" },
      ],
    },
    {
      industry: "Fintech — Paiement B2B",
      timeline: "3 mois",
      results: [
        { metric: "Share of voice IA", before: "0%", after: "35% dans leur catégorie" },
        { metric: "Trafic Reddit → Site", before: "0", after: "+2 400 visiteurs qualifiés/mois" },
        { metric: "Coût par lead", before: "180€ (ads)", after: "22�� (organique Reddit/IA)" },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <BarChart3 className="w-4 h-4" />
            Résultats clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ce que nos clients <span className="text-gradient">obtiennent réellement</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Résultats anonymisés de clients accompagnés par notre agence GEO. Les métriques sont mesurées via notre dashboard de tracking des citations IA.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((cs, idx) => (
            <AnimatedSection key={idx} delay={idx * 200}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cs.industry}</h3>
                    <p className="text-sm text-muted-foreground">Durée : {cs.timeline}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{r.metric}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground line-through">{r.before}</span>
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span className="text-sm font-bold text-primary">{r.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Données issues de campagnes réelles gérées par UpvotePartners. Les noms des clients sont anonymisés par respect de la confidentialité.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

const FounderSection = () => (
  <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <User className="w-16 h-16 text-primary/60" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fondé par Matéo Drouillard
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Matéo a créé UpvotePartners après avoir constaté un phénomène en 2023 : les marques mentionnées positivement sur Reddit apparaissaient systématiquement dans les réponses de ChatGPT. Depuis, il a accompagné plus de 30 startups B2B dans leur stratégie de visibilité IA via Reddit, générant collectivement des milliers de citations dans les réponses des principaux LLMs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spécialiste de l'intersection entre Reddit, SEO et intelligence artificielle générative, Matéo est l'un des pionniers du GEO en France. Son approche combine une compréhension profonde des communautés Reddit avec une méthodologie data-driven de tracking des citations IA.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://x.com/mateodr_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <XIcon className="w-4 h-4" /> @mateodr_
              </a>
              <a href="https://www.linkedin.com/in/mateodrouillard/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <LinkedInIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const CALENDLY_URL_PRICING = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const PricingGEO = () => {
  const plans = [
    { medal: "🥉", name: "GEO Foundation", price: "3 000€", posts: "5 posts / mois", comments: "25 commentaires ciblés / mois", highlighted: false },
    { medal: "🥈", name: "GEO Engine", price: "5 000€", posts: "7 posts / mois", comments: "50 commentaires ciblés / mois", highlighted: true, badge: "Le plus populaire" },
    { medal: "🥇", name: "GEO Dominance", price: "10 000€", posts: "9 posts / mois", comments: "100 commentaires ciblés / mois", highlighted: false },
  ];

  const shared = [
    "Création et gestion multi-comptes",
    "Monitoring et tracking des citations IA",
    "Optimisation SEO & visibilité LLM (GEO)",
    "Rapport de performance GEO mensuel",
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            Tarifs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tarifs de notre <span className="text-primary">agence GEO</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className={cn("relative group h-full", plan.highlighted && "md:scale-105 md:z-10")}>
                {plan.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />
                )}
                <div className={cn(
                  "relative bg-card rounded-2xl p-6 md:p-8 overflow-hidden h-full flex flex-col",
                  plan.highlighted ? "border border-primary/20" : "border border-border"
                )}>
                  {plan.highlighted && plan.badge && (
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-1"><span className="text-2xl">{plan.medal}</span></div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-4">{plan.name}</h3>
                  <div className="text-center mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-base text-muted-foreground ml-1">/mois</span>
                  </div>
                  <p className="text-center text-xs text-muted-foreground italic mb-6">Engagement minimum de 3 mois</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[plan.posts, plan.comments].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-semibold">{feat}</span>
                      </li>
                    ))}
                    {shared.map((feat, i) => (
                      <li key={`s-${i}`} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <Button
                      onClick={() => window.open(CALENDLY_URL_PRICING, "_blank")}
                      size="lg"
                      variant={plan.highlighted ? "default" : "outline"}
                      className={cn(
                        "h-12 px-8 text-sm font-bold rounded-xl w-full",
                        "hover:scale-[1.02] active:scale-[0.98]",
                        "transition-all duration-300",
                        plan.highlighted && "shadow-lg shadow-primary/30"
                      )}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Réserver une consultation GEO
                    </Button>
                  </div>
                  {plan.highlighted && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            ⚡ Places très limitées. Nous n'acceptons que quelques clients à la fois.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

const FAQGeo = () => {
  const faqs = [
    {
      q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
      a: "Le GEO est la pratique d'optimiser la visibilité de votre marque dans les réponses générées par les IA — ChatGPT, Perplexity, Claude et Google AI Overviews. Contrairement au SEO traditionnel qui cible les classements Google, le GEO s'assure que votre marque est citée quand les utilisateurs demandent des recommandations à une IA dans votre catégorie. C'est la prochaine évolution de la visibilité en ligne.",
    },
    {
      q: "Pourquoi Reddit est-il le meilleur levier pour le GEO ?",
      a: "Reddit est la source n°1 que les moteurs IA citent. Les threads Reddit sont des discussions vérifiées par des humains, classées par la communauté — pas du contenu marketing. Les LLMs comme ChatGPT et Perplexity citent Reddit de manière disproportionnée. De plus, Google classe les threads Reddit en haut des SERPs depuis 2024, et les IA utilisent l'index Google comme source primaire. Une forte présence Reddit = visibilité dans Google ET dans les réponses IA.",
    },
    {
      q: "Combien de temps avant de voir des citations IA ?",
      a: "La plupart des clients commencent à voir leur marque mentionnée dans les réponses IA en 2-3 mois. Les premiers posts sont publiés sous 21 jours. Le contenu Reddit compound dans le temps : un thread publié aujourd'hui peut générer des citations pendant des mois car les IA ré-indexent continuellement les discussions Reddit populaires. Nous demandons un engagement minimum de 3 mois car le GEO est un canal qui compound.",
    },
    {
      q: "Comment mesurez-vous la performance GEO ?",
      a: "Nous mesurons : le nombre de citations IA que votre marque reçoit sur ChatGPT, Perplexity, Claude et Google AI Overviews ; votre share of voice dans les réponses IA vs concurrents ; la performance des posts Reddit (upvotes, commentaires, trafic) ; les positions SEO de vos threads Reddit ; et les leads qualifiés générés via la découverte IA organique. Chaque mois, vous recevez un rapport de performance GEO détaillé.",
    },
    {
      q: "Quelle est la différence entre le GEO et le SEO ?",
      a: "Le SEO optimise pour les classements Google (liens bleus). Le GEO optimise pour les réponses générées par les IA (ChatGPT, Perplexity, etc.). Notre stratégie Reddit booste les deux simultanément. Les threads Reddit se positionnent sur Google (SEO) ET sont cités par les moteurs IA (GEO). Vous obtenez une double visibilité depuis un seul canal. Le SEO seul ne suffit plus car de plus en plus d'utilisateurs passent à la recherche IA.",
    },
    {
      q: "Cette stratégie est-elle safe ? Les comptes peuvent-ils être bannis ?",
      a: "Notre approche est 100% organique et conforme aux guidelines de Reddit. Nous ne spammons pas, n'utilisons pas de bots et ne faisons pas de posts promotionnels. Nous créons du contenu à réelle valeur ajoutée qui mentionne naturellement votre marque en contexte. Nos comptes sont warm-up pendant des semaines, construisent du vrai karma et participent authentiquement aux communautés. En 3+ ans d'activité, nous n'avons jamais eu de marque client impactée négativement.",
    },
    {
      q: "Pourquoi choisir une agence GEO plutôt que de faire du SEO classique ?",
      a: "Le SEO classique reste pertinent, mais il ne couvre plus l'intégralité du parcours d'achat. En 2026, une part croissante des acheteurs B2B commencent leur recherche dans ChatGPT ou Perplexity, pas dans Google. Si vous n'êtes visible que dans les liens bleus, vous passez à côté de ce nouveau canal. Une agence GEO comme UpvotePartners vous positionne sur les deux fronts simultanément : visibilité Google (via les threads Reddit qui rankent) ET citations dans les réponses IA.",
    },
    {
      q: "Le GEO fonctionne-t-il pour tous les secteurs ?",
      a: "Le GEO est particulièrement efficace pour les entreprises B2B SaaS, les outils tech, les services professionnels et toute catégorie où les acheteurs font des recherches comparatives avant d'acheter. Si des prospects sont susceptibles de demander à une IA « quel est le meilleur [votre catégorie] ? », alors le GEO est pertinent pour vous. Nous faisons un audit gratuit pour évaluer le potentiel GEO de votre marque avant tout engagement.",
    },
    {
      q: "Combien coûte une agence GEO ?",
      a: "Nos forfaits d'agence GEO commencent à 3 000€/mois pour le plan Foundation (5 posts Reddit par mois + 25 commentaires ciblés). Le plan le plus populaire est le GEO Engine à 5 000€/mois. L'engagement minimum est de 3 mois car le GEO est un canal qui compound dans le temps. Comparé aux ads payantes, le coût par lead en GEO organique est 3 à 8 fois inférieur sur le moyen terme.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-gradient-section">
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tout savoir sur le GEO.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

const HomeGEOContent = () => {
  const { t, lang } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroGEO />
        <GEODefinition />
        <GEOvsSEO />
        <ProblemGEO />
        <MechanismSection />
        <WhyRedditForGEO />
        <CaseStudies />
        <FounderSection />
        <PricingGEO />
        <AskAISection />
        <FAQGeo />
      </div>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="UpvotePartners" className="h-7 w-7 rounded-lg" />
                  <span className="text-foreground font-semibold text-lg">UpvotePartners</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://x.com/mateodr_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/mateodrouillard/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
                <a href="mailto:contact@upvotepartners.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  contact@upvotepartners.com
                </a>
              </div>

              <nav className="flex gap-16">
                <div className="flex flex-col gap-3">
                  <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.howItWorks")}
                  </button>
                  <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.pricing")}
                  </button>
                  <a href="/agence-reddit" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    Agence Reddit
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {t("nav.faq")}
                  </button>
                  <a href="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    {lang === "fr" ? "Partenaires" : "Partners"}
                  </a>
                </div>
              </nav>
            </div>

            <div className="h-px bg-border/50" />
            <p className="text-xs text-muted-foreground">
              Copyright ©UpvotePartners. {t("footer.allRights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomeGEO = () => (
  <LanguageProvider>
    <HomeGEOContent />
  </LanguageProvider>
);

export default HomeGEO;

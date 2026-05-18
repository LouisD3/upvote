import { Header } from "@/components/landing/Header";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Mail, Zap, Shield, TrendingUp, Users, MessageSquare, Search, ArrowRight, Target, Eye, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { XIcon } from "@/components/icons/XIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { LogoBanner } from "@/components/landing/LogoBanner";
import { faqReddit } from "@/data/faq-reddit";
import logoAsset from "@/assets/logo_reddit_agence.webp";
const logo = typeof logoAsset === 'string' ? logoAsset : logoAsset.src;
const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const handleBookAudit = () => {
  import("canvas-confetti").then(({ default: confetti }) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b00", "#ff8c33", "#ffad66", "#ffffff"],
    });
  });
  setTimeout(() => {
    window.open(CALENDLY_URL, "_blank");
  }, 600);
};

/* ============================================================
   HERO
   ============================================================ */
const HeroReddit = () => (
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
          Approuvé par les startups de YC
        </span>
      </div>
    </AnimatedSection>

    <AnimatedSection className="max-w-4xl mx-auto relative z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        <span className="text-foreground">Agence Reddit n°1 en France : </span>
        <span className="text-gradient">Générez des leads qualifiés</span>
        <span className="text-foreground"> pour votre Startup</span>
      </h1>
    </AnimatedSection>

    <AnimatedSection delay={200} className="mt-6 max-w-2xl mx-auto relative z-10">
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        UpvotePartners est une <strong className="text-foreground">agence Reddit</strong> spécialisée dans l'acquisition organique pour les startups. Nous créons du contenu stratégique sur Reddit qui se positionne sur Google, génère des leads, et fait citer votre marque par les IA.
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
        Réserver un audit Reddit gratuit
      </Button>
      <p className="mt-4 text-sm text-muted-foreground font-medium animate-pulse">
        🔥 Places très limitées, nous n'acceptons que quelques clients à la fois
      </p>
    </AnimatedSection>

    <LogoBanner />
  </section>
);

/* ============================================================
   WHY REDDIT IN 2026
   ============================================================ */
const WhyReddit2026 = () => (
  <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <AnimatedSection>
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pourquoi Reddit ?
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
          Reddit est devenu <span className="text-gradient">incontournable</span> en 2026
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            En 2024, Google a signé un partenariat à 60M$/an avec Reddit pour intégrer ses discussions dans les résultats de recherche. Résultat : les threads Reddit dominent désormais les SERPs pour les requêtes de recommandation. Parallèlement, les moteurs IA (ChatGPT, Perplexity, Claude) citent Reddit de manière disproportionnée dans leurs réponses car c'est du contenu authentique, vérifié par la communauté.
          </p>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Pour les startups B2B, c'est une opportunité unique : une <strong className="text-foreground">agence Reddit</strong> comme UpvotePartners peut positionner votre marque là où vos prospects cherchent activement des recommandations : dans les discussions Reddit qui apparaissent sur Google ET dans les réponses des IA génératives.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { value: "23M", title: "utilisateurs actifs/jour", desc: "Reddit est le 6ème site le plus visité en France (Similarweb, 2026)", icon: Users },
          { value: "Top 3", title: "dans les SERPs Google", desc: "Les threads Reddit se positionnent dans le top 3 pour les requêtes de recommandation", icon: Search },
          { value: "+300%", title: "trafic organique Reddit", desc: "Croissance du trafic SEO des pages Reddit depuis le partenariat Google-Reddit 2024", icon: TrendingUp },
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

/* ============================================================
   PROBLEM SECTION
   ============================================================ */
const ProblemReddit = () => {
  const comparisons = [
    { without: "Posts supprimés par les modérateurs", withItem: "Contenu approuvé et upvoté par la communauté" },
    { without: "Comptes bannis après quelques posts", withItem: "Comptes warm-up avec karma authentique" },
    { without: "Contenus perçus comme du spam", withItem: "Posts à valeur ajoutée qui mentionnent votre marque naturellement" },
    { without: "Aucun résultat après des mois d'efforts", withItem: "Leads qualifiés dès les premières semaines" },
    { without: "Perte de temps sur les mauvais subreddits", withItem: "Ciblage précis des communautés où se trouve votre ICP" },
    { without: "Aucune visibilité sur Google ou les IA", withItem: "Threads positionnés dans Google + cités par les IA" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Le problème
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 leading-tight">
            La plupart des startups échouent sur Reddit. <span className="text-gradient">Pas nos clients.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Reddit est un canal ultra-puissant, mais ses communautés détestent le marketing. Sans la bonne approche, vos posts sont supprimés, vos comptes bannis, et vous perdez des mois. Notre agence Reddit a développé une méthode qui contourne ces obstacles.
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
                    <h3 className="text-xl font-bold text-foreground">Reddit en interne</h3>
                    <p className="text-sm text-muted-foreground">Ce qui arrive sans expertise Reddit</p>
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
                      ✨ Avec notre agence Reddit
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center animate-glow-pulse">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Avec UpvotePartners</h3>
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

/* ============================================================
   METHODOLOGY - DETAILED
   ============================================================ */
const MethodologyReddit = () => (
  <section id="how-it-works" className="py-24 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Zap className="w-4 h-4" />
          Notre méthode en 5 étapes
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Comment notre <span className="text-primary">agence Reddit</span> génère vos leads
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Une méthodologie éprouvée sur 30+ campagnes Reddit B2B. Chaque étape est conçue pour maximiser l'impact tout en respectant les guidelines de Reddit.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {[
          {
            num: 1,
            title: "Audit & stratégie de subreddits",
            desc: "On identifie les subreddits où votre ICP (Ideal Customer Profile) est actif. On analyse le ton, les règles, les types de posts qui performent, et la présence de vos concurrents. On sélectionne 5 à 15 communautés stratégiques par campagne.",
            icon: Search,
          },
          {
            num: 2,
            title: "Warm-up des comptes Reddit",
            desc: "Nos comptes sont construits sur plusieurs semaines avec du karma authentique, une activité diversifiée, et une participation réelle aux communautés. Pas de bots, pas de fermes à karma. Chaque compte a un historique crédible avant de publier pour votre marque.",
            icon: Shield,
          },
          {
            num: 3,
            title: "Création de contenu natif Reddit",
            desc: "On rédige des posts et commentaires qui apportent une réelle valeur à la communauté tout en mentionnant naturellement votre marque. Le format varie selon le subreddit : questions, comparatifs, retours d'expérience, recommendations. Chaque contenu est rédigé dans le ton exact de la communauté cible.",
            icon: MessageSquare,
          },
          {
            num: 4,
            title: "Publication & engagement stratégique",
            desc: "On publie aux heures optimales de chaque subreddit (fuseau horaire, jour de la semaine, activité des modérateurs). Nos comptes participent aux discussions générées, répondent aux commentaires, et amplifient la portée via des interactions organiques.",
            icon: Users,
          },
          {
            num: 5,
            title: "Tracking & optimisation continue",
            desc: "On mesure les upvotes, commentaires, trafic vers votre site, positions Google de vos threads, et citations IA de votre marque. Chaque mois, on ajuste la stratégie selon les données : nouveaux subreddits, formats qui convertissent, angles qui résonnent.",
            icon: TrendingUp,
          },
        ].map((step, i) => (
          <AnimatedSection key={i} delay={i * 100} animation="slide-up">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className={cn(
                "flex-shrink-0 w-14 h-14 rounded-2xl",
                "bg-gradient-to-br from-primary to-primary/80",
                "flex items-center justify-center",
                "shadow-lg shadow-primary/20"
              )}>
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Étape {step.num}</span>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={600} className="mt-12 text-center">
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
          Réserver un audit Reddit gratuit
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

/* ============================================================
   ORGANIC VS ADS
   ============================================================ */
const OrganicVsAds = () => {
  const comparisons = [
    { dimension: "Coût par lead", organic: "15-40€ (compound dans le temps)", ads: "80-200€ (augmente avec la concurrence)" },
    { dimension: "Durée de vie", organic: "Un post Reddit reste visible des mois/années", ads: "Visibilité s'arrête quand le budget stop" },
    { dimension: "Confiance utilisateur", organic: "Recommandation perçue comme authentique", ads: "Identifié comme publicité, taux de clic faible" },
    { dimension: "Impact IA (GEO)", organic: "Les IA citent le contenu organique Reddit", ads: "Les ads Reddit ne sont jamais citées par les IA" },
    { dimension: "Visibilité Google", organic: "Les threads organiques rankent dans les SERPs", ads: "Aucun impact SEO" },
    { dimension: "Scalabilité", organic: "Chaque post compound la visibilité", ads: "Linéaire : plus de budget = plus de reach, pas de compound" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Target className="w-4 h-4" />
            Comparatif
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Reddit organique vs <span className="text-gradient">Reddit Ads</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre agence Reddit se spécialise dans le marketing organique, pas les publicités. Voici pourquoi c'est plus rentable pour les startups B2B :
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="overflow-x-auto mt-12">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground border-b border-border/50 w-1/5"></th>
                  <th className="text-left p-4 text-sm font-bold text-primary border-b border-primary/30 w-2/5 bg-primary/5 rounded-t-xl">
                    Reddit organique (notre approche)
                  </th>
                  <th className="text-left p-4 text-sm font-bold text-foreground border-b border-border/50 w-2/5">
                    Reddit Ads
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-0">
                    <td className="p-4 text-sm font-semibold text-foreground">{row.dimension}</td>
                    <td className="p-4 text-sm text-foreground font-medium bg-primary/5">{row.organic}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border/50">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">L'avantage compound du Reddit organique :</strong> chaque thread que nous publions continue de générer du trafic, des leads, et des citations IA pendant des mois après sa publication. Au bout de 6 mois de campagne, vous avez construit un asset marketing permanent qui travaille pour vous 24h/24, sans coût publicitaire récurrent.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ============================================================
   REDDIT + GEO SECTION
   ============================================================ */
const RedditGEOLink = () => (
  <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Eye className="w-4 h-4" />
          Reddit + IA
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Notre agence Reddit vous rend <span className="text-gradient">visible dans les IA</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ce qui rend UpvotePartners unique par rapport aux autres agences Reddit : nous ne faisons pas juste du marketing Reddit, nous exploitons Reddit comme <strong className="text-foreground">levier de visibilité IA</strong>. Chaque post est optimisé pour être indexé par les moteurs de recherche IA (ChatGPT, Perplexity, Claude).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            C'est ce qu'on appelle le <a href="/agence-geo" className="text-primary hover:underline font-medium">GEO (Generative Engine Optimization)</a> : faire en sorte que votre marque soit citée quand un prospect demande à une IA « quel est le meilleur outil de [votre catégorie] ? ». Reddit est le canal n°1 pour y parvenir car les LLMs sur-indexent les discussions Reddit dans leurs sources.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Résultat : en travaillant avec notre agence Reddit, vous obtenez une <strong className="text-foreground">triple visibilité</strong> : leads directs via Reddit, positionnement Google des threads, et citations dans les réponses IA. Trois canaux, un seul investissement.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={300} className="mt-10 text-center">
        <a href="/agence-geo" className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-lg">
          En savoir plus sur notre offre GEO <ArrowRight className="w-4 h-4" />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

/* ============================================================
   CASE STUDIES
   ============================================================ */
const CaseStudiesReddit = () => {
  const cases = [
    {
      industry: "SaaS, Outil de productivité",
      timeline: "4 mois",
      results: [
        { metric: "Leads générés via Reddit", before: "2/mois", after: "23/mois" },
        { metric: "Threads positionnés sur Google", before: "0", after: "14 threads dans le top 5" },
        { metric: "Coût par lead", before: "150€ (paid social)", after: "28€ (Reddit organique)" },
      ],
    },
    {
      industry: "Fintech, Paiement en ligne",
      timeline: "3 mois",
      results: [
        { metric: "Trafic Reddit → site", before: "0", after: "+3 200 visiteurs qualifiés/mois" },
        { metric: "Mentions organiques de marque", before: "0/mois", after: "45+/mois dans des discussions Reddit" },
        { metric: "Posts encore actifs après 3 mois", before: "—", after: "87% génèrent encore du trafic" },
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
            Résultats anonymisés de startups accompagnées par notre agence Reddit. Métriques mesurées via notre dashboard de tracking Reddit + citations IA.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((cs, idx) => (
            <AnimatedSection key={idx} delay={idx * 200}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cs.industry}</h3>
                    <p className="text-sm text-muted-foreground">Durée : {cs.timeline}</p>
                  </div>
                </div>
                <div className="space-y-4">
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

/* ============================================================
   PRICING
   ============================================================ */
const PricingReddit = () => {
  const plans = [
    { medal: "🥉", name: "Reddit Foundation", price: "3 000€", posts: "5 posts / mois", comments: "25 commentaires ciblés / mois", highlighted: false },
    { medal: "🥈", name: "Reddit Engine", price: "5 000€", posts: "7 posts / mois", comments: "50 commentaires ciblés / mois", highlighted: true, badge: "Le plus populaire" },
    { medal: "🥇", name: "Reddit Dominance", price: "10 000€", posts: "9 posts / mois", comments: "100 commentaires ciblés / mois", highlighted: false },
  ];

  const shared = [
    "Audit et sélection des subreddits cibles",
    "Warm-up et gestion multi-comptes",
    "Tracking des positions Google + citations IA",
    "Rapport de performance mensuel détaillé",
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
            Tarifs de notre <span className="text-primary">agence Reddit</span>
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
                      onClick={() => window.open(CALENDLY_URL, "_blank")}
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
                      Réserver une consultation
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
            ⚡ Places très limitées. Nous n'acceptons que quelques clients à la fois pour garantir la qualité.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ============================================================
   FAQ
   ============================================================ */
const FAQReddit = () => {
  const faqs = faqReddit;

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-gradient-section">
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Questions fréquentes sur notre agence Reddit
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

/* ============================================================
   MAIN PAGE
   ============================================================ */
const IndexContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroReddit />
        <WhyReddit2026 />
        <ProblemReddit />
        <MethodologyReddit />
        <OrganicVsAds />
        <RedditGEOLink />
        <CaseStudiesReddit />
        <PricingReddit />
        <FAQReddit />
      </div>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="UpvotePartners" className="h-7 w-7 rounded-lg" loading="lazy" />
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
                  <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    Notre méthode
                  </a>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    Tarifs
                  </a>
                  <a href="/agence-geo" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    Agence GEO
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    FAQ
                  </a>
                  <a href="/partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                    Partenaires
                  </a>
                </div>
              </nav>
            </div>

            <div className="h-px bg-border/50" />
            <p className="text-xs text-muted-foreground">
              Copyright ©UpvotePartners. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;

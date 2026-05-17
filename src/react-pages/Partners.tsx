import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Check, X, Handshake, DollarSign, Eye, FileText, TrendingUp } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";
import logoAsset from "@/assets/logo_reddit_agence.png";
const logo = typeof logoAsset === 'string' ? logoAsset : logoAsset.src;

const TWITTER_URL = "https://x.com/mateodr_";
const EMAIL = "contact@upvotepartners.com";
const AVG_BASKET = 5000;
const COMMISSION_RATE = 0.10;
const PER_CLIENT_MONTHLY = AVG_BASKET * COMMISSION_RATE;

const PartnersContent = () => {
  const [clientCount, setClientCount] = useState(3);
  const monthlyEarnings = clientCount * PER_CLIENT_MONTHLY;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">

        {/* Hero */}
        <section className="pt-24 pb-12 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(16_100%_50%/0.06),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                <Handshake className="w-4 h-4" />
                Programme partenaires
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                Devenons <span className="text-primary">partenaires</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Tu as du réseau dans l'univers des startups ? On s'occupe de leur acquisition sur Reddit. Si tu penses que ça peut les intéresser, mets-nous en relation ! Tu touches 10% à vie, chaque mois, sur chacun des clients que tu nous apportes.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Earnings Simulator */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Simulateur de gains</span>
                </div>

                <div className="mb-6 p-4 rounded-2xl animate-pulse-glow">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Clients référés
                    </label>
                    <span className="text-2xl font-bold text-foreground">{clientCount}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={clientCount}
                    onChange={(e) => setClientCount(Number(e.target.value))}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-primary/30 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, hsl(16 100% 50%) ${((clientCount - 1) / 19) * 100}%, hsl(0 0% 90%) ${((clientCount - 1) / 19) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Par mois</p>
                    <p className="text-4xl font-bold text-primary">
                      {monthlyEarnings.toLocaleString("fr-FR")} €
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Par an</p>
                    <p className="text-4xl font-bold text-foreground">
                      {(monthlyEarnings * 12).toLocaleString("fr-FR")} €
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Commission versée après encaissement client.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  * Basé sur notre panier moyen de 5 000 €/mois, soit 500 € de commission par client référé, tous les mois, tant qu'il reste client.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Pour qui ?
              </h2>
              <p className="text-muted-foreground">Un réseau de confiance, pas un programme d'affiliation ouvert à tous.</p>
            </AnimatedSection>

            <div className="grid gap-3 mb-6">
              {[
                "Agences dev / design qui travaillent avec des fondateurs early-stage",
                "Consultants GTM et CMOs fractionnels",
                "VCs early-stage avec un programme d'accompagnement portfolio",
                "Opérateurs avec un réseau chaleureux de fondateurs de startups",
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 70}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card/80 border border-border/50 hover:border-primary/20 transition-colors duration-300">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Pas compatible :</span> freelances sans réseau qualifié, cold callers, ou quiconque cherche un revenu passif sans apporter de vraie valeur.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The deal */}
        <section className="py-12 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Le deal
              </h2>
              <p className="text-muted-foreground">Simple, transparent, sans ambiguïté.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: DollarSign,
                  title: "10% à vie",
                  desc: "Sur chaque client signé, versé chaque mois tant qu'il reste chez nous. Pas de limite dans le temps.",
                },
                {
                  icon: Eye,
                  title: "Reporting clair",
                  desc: "Tu sais exactement ce que chaque introduction génère. Zéro zone grise.",
                },
                {
                  icon: FileText,
                  title: "Matériel de vente",
                  desc: "One-pager, case studies, brief de positionnement. Tout ce qu'il faut pour nous présenter bien.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} delay={i * 100} animation="slide-up">
                    <div className={cn(
                      "h-full p-6 rounded-2xl",
                      "bg-card/80 backdrop-blur-sm",
                      "border border-primary/20",
                      "hover:border-primary/40 hover:bg-card",
                      "transition-all duration-300 group"
                    )}>
                      <div className={cn(
                        "w-10 h-10 rounded-xl mb-4",
                        "bg-gradient-to-br from-primary to-primary/80",
                        "flex items-center justify-center",
                        "shadow-md shadow-primary/20",
                        "group-hover:scale-110 transition-transform duration-300"
                      )}>
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* What we expect */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ce qu'on attend
              </h2>
              <p className="text-muted-foreground">On protège tes relations comme les nôtres.</p>
            </AnimatedSection>

            <div className="grid gap-3">
              {[
                "Introductions chaleureuses uniquement, jamais de cold outreach en notre nom",
                "Qualification minimale : startup post-seed avec un produit live",
                "Respect mutuel des relations, on ne brûle pas les contacts des deux côtés",
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card/80 border border-border/50 hover:border-primary/20 transition-colors duration-300">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Comment ça démarre
              </h2>
              <p className="text-muted-foreground">4 étapes, moins d'une semaine.</p>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="grid gap-5">
                {[
                  {
                    num: 1,
                    title: "Tu nous contactes",
                    desc: "Par email ou Twitter. Dis-nous avec qui tu travailles et pourquoi tu penses qu'il y a un fit.",
                  },
                  {
                    num: 2,
                    title: "Appel de 20 min",
                    desc: "On vérifie l'alignement, on explique notre process, on répond à tes questions.",
                  },
                  {
                    num: 3,
                    title: "Accord signé",
                    desc: "Un document simple. Rien de complexe.",
                  },
                  {
                    num: 4,
                    title: "Tu réfères, on close, tu touches ta commission",
                    desc: "Versée dès qu'on a encaissé le paiement du client. Pas d'avance de notre part.",
                  },
                ].map((step, i) => (
                  <AnimatedSection key={i} delay={i * 100} animation="slide-up">
                    <div className="flex items-start gap-5 pl-2">
                      <div className={cn(
                        "relative flex-shrink-0 w-10 h-10 rounded-full",
                        "bg-gradient-to-br from-primary to-primary/80",
                        "flex items-center justify-center",
                        "shadow-md shadow-primary/20 z-10"
                      )}>
                        <span className="text-sm font-bold text-primary-foreground">{step.num}</span>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className={cn(
                "p-10 rounded-3xl",
                "bg-card/80 backdrop-blur-sm",
                "border border-primary/20",
                "shadow-xl shadow-primary/5"
              )}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Tu veux en parler ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                  Envoie-moi un message. Présente-toi et dis-moi avec qui tu travailles. Je réponds à chaque message.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                  <a
                    href={`mailto:${EMAIL}`}
                    className={cn(
                      "flex items-center gap-2.5 px-6 py-3 rounded-xl",
                      "bg-primary text-primary-foreground font-semibold text-sm",
                      "hover:opacity-90 hover:scale-105 transition-all duration-300",
                      "shadow-lg shadow-primary/30 w-full sm:w-auto justify-center"
                    )}
                  >
                    <Mail className="w-4 h-4" />
                    {EMAIL}
                  </a>
                  <a
                    href={TWITTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2.5 px-6 py-3 rounded-xl",
                      "bg-foreground text-background font-semibold text-sm",
                      "hover:opacity-90 hover:scale-105 transition-all duration-300",
                      "shadow-lg w-full sm:w-auto justify-center"
                    )}
                  >
                    <XIcon className="w-4 h-4" />
                    @mateodr_
                  </a>
                </div>

                <p className="text-sm text-muted-foreground font-medium">
                  Matéo, Fondateur d'UpvotePartners
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex flex-col gap-4">
                <a href="/" className="flex items-center gap-2">
                  <img src={logo} alt="UpvotePartners" className="h-7 w-7 rounded-lg" />
                  <span className="text-foreground font-semibold text-lg">UpvotePartners</span>
                </a>
                <div className="flex items-center gap-3">
                  <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/mateodrouillard/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {EMAIL}
                </a>
              </div>
              <nav className="flex gap-16">
                <div className="flex flex-col gap-3">
                  <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Accueil
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

const Partners = () => (
  <LanguageProvider>
    <PartnersContent />
  </LanguageProvider>
);

export default Partners;

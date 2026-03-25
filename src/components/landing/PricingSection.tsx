import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/i18n";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const plans = [
  {
    medal: "🥉",
    nameKey: "pricing.plan1.name" as TranslationKey,
    priceKey: "pricing.plan1.price" as TranslationKey,
    postsKey: "pricing.plan1.posts" as TranslationKey,
    commentsKey: "pricing.plan1.comments" as TranslationKey,
    highlighted: false,
  },
  {
    medal: "🥈",
    nameKey: "pricing.plan2.name" as TranslationKey,
    priceKey: "pricing.plan2.price" as TranslationKey,
    postsKey: "pricing.plan2.posts" as TranslationKey,
    commentsKey: "pricing.plan2.comments" as TranslationKey,
    highlighted: true,
    badgeKey: "pricing.plan2.badge" as TranslationKey,
  },
  {
    medal: "🥇",
    nameKey: "pricing.plan3.name" as TranslationKey,
    priceKey: "pricing.plan3.price" as TranslationKey,
    postsKey: "pricing.plan3.posts" as TranslationKey,
    commentsKey: "pricing.plan3.comments" as TranslationKey,
    highlighted: false,
  },
];

export const PricingSection = () => {
  const { t } = useLanguage();

  const sharedFeatures = [
    t("pricing.shared1"),
    t("pricing.shared2"),
    t("pricing.shared3"),
    t("pricing.shared4"),
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("pricing.title1")}
            <span className="text-primary">{t("pricing.title2")}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className={cn("relative group h-full", plan.highlighted && "md:scale-105 md:z-10")}>
                {/* Glow for highlighted */}
                {plan.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />
                )}

                <div
                  className={cn(
                    "relative bg-card rounded-2xl p-6 md:p-8 overflow-hidden h-full flex flex-col",
                    plan.highlighted
                      ? "border border-primary/20"
                      : "border border-border"
                  )}
                >
                  {/* Badge for highlighted */}
                  {plan.highlighted && plan.badgeKey && (
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                        {t(plan.badgeKey)}
                      </span>
                    </div>
                  )}

                  {/* Medal + Name */}
                  <div className="text-center mb-1">
                    <span className="text-2xl">{plan.medal}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-4">
                    {t(plan.nameKey)}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">
                      {t(plan.priceKey)}
                    </span>
                    <span className="text-base text-muted-foreground ml-1">
                      {t("pricing.period")}
                    </span>
                  </div>
                  <p className="text-center text-xs text-muted-foreground italic mb-6">
                    {t("pricing.commitment")}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {/* Variable features */}
                    {[plan.postsKey, plan.commentsKey].map((key, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-semibold">{t(key)}</span>
                      </li>
                    ))}
                    {/* Shared features */}
                    {sharedFeatures.map((feature, i) => (
                      <li key={`s-${i}`} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
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
                      {t("pricing.cta")}
                    </Button>
                  </div>

                  {/* Bottom accent for highlighted */}
                  {plan.highlighted && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Limited spots */}
        <AnimatedSection delay={500}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            {t("pricing.limitedSpots")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

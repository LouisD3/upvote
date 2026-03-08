import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/posthog";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-redditpartners/audit";

export const PricingSection = () => {
  const { t } = useLanguage();

  const features = [
    t("pricing.feature1"),
    t("pricing.feature2"),
    t("pricing.feature3"),
    t("pricing.feature4"),
    t("pricing.feature5"),
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("pricing.title1")}
            <span className="text-primary">{t("pricing.title2")}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />

            <div className="relative bg-card border border-primary/20 rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* Badge Founders' choice */}
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-foreground text-sm font-semibold border border-primary/10">
                  {t("pricing.foundersChoice")}
                  <Crown className="w-4 h-4 text-primary fill-primary/20" />
                </span>
              </div>

              {/* Plan name */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-1">
                {t("pricing.planName")}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-6 max-w-sm mx-auto">
                {t("pricing.planDesc")}
              </p>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl md:text-5xl font-bold text-foreground">
                  {t("pricing.price")}
                </span>
                <span className="text-lg text-muted-foreground ml-1">
                  {t("pricing.period")}
                </span>
                <p className="mt-1.5 text-sm text-muted-foreground italic">
                  {t("pricing.commitment")}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 max-w-sm mx-auto">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="text-center">
                <Button
                  onClick={() => { trackCTAClick("pricing"); window.open(CALENDLY_URL, "_blank"); }}
                  size="lg"
                  className={cn(
                    "h-12 px-8 text-sm font-bold rounded-xl",
                    "shadow-lg shadow-primary/30",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    "transition-all duration-300"
                  )}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t("pricing.cta")}
                </Button>
              </div>

              {/* Limited spots */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                {t("pricing.limitedSpots")}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WaitlistForm } from "./WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <AnimatedSection className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Transforme Reddit en canal d'acquisition récurrent pour ton{" "}
          <span className="text-primary">SaaS B2B</span>.
        </h1>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="mt-6 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          On transforme Reddit en machine à leads inbound pour les SaaS B2B qui font{" "}
          <span className="font-semibold text-foreground">+10k€ de MRR</span> — avec un{" "}
          <span className="font-semibold text-primary">CAC proche de 0€</span>.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={400} className="mt-10 w-full max-w-md mx-auto">
        <WaitlistForm variant="hero" />
      </AnimatedSection>
    </section>
  );
};

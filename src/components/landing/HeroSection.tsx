import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WaitlistForm } from "./WaitlistForm";
import logo from "@/assets/logo_reddit_agence.png";
const FloatingRedditLogo = ({
  className
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>;
export const HeroSection = () => {
  return <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      {/* Floating Reddit logos background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingRedditLogo className="absolute top-[10%] left-[5%] w-12 h-12 text-primary/10 animate-[float1_8s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[20%] right-[10%] w-8 h-8 text-primary/8 animate-[float2_10s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[50%] left-[8%] w-16 h-16 text-primary/5 animate-[float3_12s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute top-[30%] right-[5%] w-20 h-20 text-primary/7 animate-[float1_9s_ease-in-out_infinite_1s]" />
        <FloatingRedditLogo className="absolute bottom-[20%] left-[15%] w-10 h-10 text-primary/10 animate-[float2_11s_ease-in-out_infinite]" />
        <FloatingRedditLogo className="absolute bottom-[30%] right-[15%] w-14 h-14 text-primary/6 animate-[float3_8s_ease-in-out_infinite_0.5s]" />
        <FloatingRedditLogo className="absolute top-[60%] right-[25%] w-6 h-6 text-primary/8 animate-[float1_7s_ease-in-out_infinite_2s]" />
        
      </div>

      {/* Surtitre */}

      <AnimatedSection delay={100} className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Transforme <span className="text-primary">Reddit</span> en machine à leads pour ton{" "}
          <span className="text-primary">SaaS</span>.
        </h1>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="mt-6 max-w-2xl mx-auto relative z-10">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Reddit devient un canal d'acquisition inbound cumulatif pour les SaaS générant plus de 10k de MRR.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={350} className="mt-6 max-w-xl mx-auto relative z-10">
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="font-semibold text-primary">Bonus:</span> Le contenu Reddit est de plus en plus utilisé comme source par les LLMs (ChatGPT, Perplexity, Claude).
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={500} className="mt-10 w-full max-w-md mx-auto relative z-10">
        <WaitlistForm variant="hero" />
      </AnimatedSection>
    </section>;
};
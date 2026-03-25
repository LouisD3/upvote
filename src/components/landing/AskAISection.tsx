import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import claudeLogo from "@/assets/claude-logo.png";
import perplexityLogo from "@/assets/perplexity-logo.png";

const PROMPT = "Pourquoi Reddit peut être un puissant canal d'acquisition pour ma startup ?";
const encodedPrompt = encodeURIComponent(PROMPT);

const aiPlatforms = [
  {
    nameKey: "askAI.askChatGPT" as const,
    url: `https://chatgpt.com/?q=${encodedPrompt}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    nameKey: "askAI.askClaude" as const,
    url: `https://claude.ai/new?q=${encodedPrompt}`,
    icon: (
      <img src={claudeLogo} alt="Claude" className="w-5 h-5 brightness-0 invert" />
    ),
  },
  {
    nameKey: "askAI.askPerplexity" as const,
    url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    icon: (
      <img src={perplexityLogo} alt="Perplexity" className="w-5 h-5 invert" />
    ),
  },
];

export const AskAISection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Wireframe planet arc — inspired by polygonal globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%] pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="planetClip">
              <circle cx="400" cy="400" r="380" />
            </clipPath>
            <radialGradient id="planetGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="atmosphereGlow" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Atmosphere glow */}
          <circle cx="400" cy="400" r="395" fill="url(#atmosphereGlow)" />

          {/* Planet body */}
          <circle cx="400" cy="400" r="380" fill="url(#planetGlow)" />
          
          {/* Main planet outline with glow animation */}
          <circle cx="400" cy="400" r="380" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" filter="url(#glowFilter)" className="animate-[planetPulse_3s_ease-in-out_infinite]" />
          
          {/* Inner ring */}
          <circle cx="400" cy="400" r="376" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

          <g clipPath="url(#planetClip)">
            {/* Latitude lines — brighter */}
            <ellipse cx="400" cy="140" rx="420" ry="22" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <ellipse cx="400" cy="200" rx="440" ry="28" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.3" fill="none" />
            <ellipse cx="400" cy="260" rx="450" ry="22" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
            <ellipse cx="400" cy="320" rx="440" ry="32" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
            <ellipse cx="400" cy="370" rx="430" ry="18" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <ellipse cx="400" cy="420" rx="460" ry="28" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeOpacity="0.5" fill="none" />
            <ellipse cx="400" cy="470" rx="440" ry="22" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.35" fill="none" />
            <ellipse cx="400" cy="530" rx="420" ry="26" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
            <ellipse cx="400" cy="590" rx="440" ry="20" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.35" fill="none" />
            <ellipse cx="400" cy="650" rx="410" ry="24" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <ellipse cx="400" cy="720" rx="430" ry="18" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" fill="none" />

            {/* Longitude / meridian lines */}
            <ellipse cx="400" cy="400" rx="90" ry="380" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            <ellipse cx="400" cy="400" rx="190" ry="380" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeOpacity="0.15" fill="none" />
            <ellipse cx="400" cy="400" rx="290" ry="380" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.12" fill="none" />
            <ellipse cx="400" cy="400" rx="360" ry="380" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.1" fill="none" />

            {/* Diagonal wireframe */}
            <line x1="80" y1="160" x2="520" y2="660" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.1" />
            <line x1="220" y1="80" x2="660" y2="600" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.08" />
            <line x1="280" y1="660" x2="720" y2="160" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.1" />
            <line x1="140" y1="600" x2="580" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.08" />

            {/* Bright accent nodes */}
            <circle cx="260" cy="250" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.5" />
            <circle cx="500" cy="320" r="3" fill="hsl(var(--primary))" fillOpacity="0.6" />
            <circle cx="340" cy="400" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.4" />
            <circle cx="450" cy="460" r="3.5" fill="hsl(var(--primary))" fillOpacity="0.55" />
            <circle cx="380" cy="530" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.35" />
            <circle cx="520" cy="550" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
            <circle cx="300" cy="600" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.3" />
            <circle cx="400" cy="320" r="3.5" fill="hsl(var(--primary))" fillOpacity="0.7" />
            <circle cx="560" cy="420" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.45" />

            {/* Connection lines between nodes */}
            <line x1="260" y1="250" x2="400" y2="320" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.2" />
            <line x1="400" y1="320" x2="500" y2="320" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.18" />
            <line x1="340" y1="400" x2="450" y2="460" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.18" />
            <line x1="450" y1="460" x2="520" y2="550" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.15" />
            <line x1="500" y1="320" x2="560" y2="420" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.18" />
            <line x1="260" y1="250" x2="340" y2="400" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.15" />
          </g>

          {/* Top atmosphere arc highlight */}
          <path
            d="M 100 400 A 300 300 0 0 1 700 400"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.3"
            fill="none"
            filter="url(#glowFilter)"
          />
        </svg>
      </div>

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          {/* Small orange badge */}
          <div className="flex justify-center mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("askAI.title")}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              {t("askAI.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {aiPlatforms.map((platform) => (
                <a
                  key={platform.nameKey}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-foreground text-background px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  {platform.icon}
                  {t(platform.nameKey)}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

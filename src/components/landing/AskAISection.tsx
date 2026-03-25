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
      <img src={claudeLogo} alt="Claude" className="w-5 h-5 invert" />
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
        <svg width="1100" height="1100" viewBox="0 0 1100 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="planetClip">
              <circle cx="550" cy="550" r="520" />
            </clipPath>
            <radialGradient id="planetGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
              <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="atmosphereGlow" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Atmosphere glow */}
          <circle cx="550" cy="550" r="540" fill="url(#atmosphereGlow)" />

          {/* Planet body with inner glow */}
          <circle cx="550" cy="550" r="520" fill="url(#planetGlow)" />
          
          {/* Main planet outline — bright edge */}
          <circle cx="550" cy="550" r="520" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.4" fill="none" />
          
          {/* Inner thin ring for depth */}
          <circle cx="550" cy="550" r="516" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />

          <g clipPath="url(#planetClip)">
            {/* Latitude lines — curved bands across the planet */}
            <ellipse cx="550" cy="180" rx="580" ry="30" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.08" fill="none" />
            <ellipse cx="550" cy="250" rx="600" ry="35" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.12" fill="none" />
            <ellipse cx="550" cy="330" rx="620" ry="28" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.1" fill="none" />
            <ellipse cx="550" cy="400" rx="610" ry="40" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.2" fill="none" />
            <ellipse cx="550" cy="460" rx="590" ry="22" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.08" fill="none" />
            <ellipse cx="550" cy="520" rx="630" ry="35" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.25" fill="none" />
            <ellipse cx="550" cy="580" rx="600" ry="28" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
            <ellipse cx="550" cy="650" rx="580" ry="32" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.12" fill="none" />
            <ellipse cx="550" cy="720" rx="610" ry="26" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
            <ellipse cx="550" cy="800" rx="570" ry="30" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.1" fill="none" />
            <ellipse cx="550" cy="880" rx="590" ry="24" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.06" fill="none" />

            {/* Longitude / meridian lines for wireframe globe feel */}
            <ellipse cx="550" cy="550" rx="520" ry="520" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
            <ellipse cx="550" cy="550" rx="120" ry="520" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.1" fill="none" />
            <ellipse cx="550" cy="550" rx="250" ry="520" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.08" fill="none" />
            <ellipse cx="550" cy="550" rx="380" ry="520" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.07" fill="none" />
            <ellipse cx="550" cy="550" rx="480" ry="520" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />

            {/* Diagonal wireframe lines for polygonal effect */}
            <line x1="100" y1="200" x2="700" y2="900" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.06" />
            <line x1="300" y1="100" x2="900" y2="800" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.05" />
            <line x1="400" y1="900" x2="1000" y2="200" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.06" />
            <line x1="200" y1="800" x2="800" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.05" />

            {/* Bright accent nodes — small dots at intersections */}
            <circle cx="350" cy="320" r="2" fill="hsl(var(--primary))" fillOpacity="0.3" />
            <circle cx="680" cy="400" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.4" />
            <circle cx="450" cy="500" r="2" fill="hsl(var(--primary))" fillOpacity="0.25" />
            <circle cx="600" cy="580" r="3" fill="hsl(var(--primary))" fillOpacity="0.35" />
            <circle cx="500" cy="650" r="2" fill="hsl(var(--primary))" fillOpacity="0.2" />
            <circle cx="700" cy="700" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.3" />
            <circle cx="380" cy="750" r="2" fill="hsl(var(--primary))" fillOpacity="0.15" />
            <circle cx="550" cy="400" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
            <circle cx="420" cy="440" r="1.5" fill="hsl(var(--primary))" fillOpacity="0.2" />
            <circle cx="650" cy="520" r="2" fill="hsl(var(--primary))" fillOpacity="0.3" />
            <circle cx="300" cy="600" r="2.5" fill="hsl(var(--primary))" fillOpacity="0.2" />
            <circle cx="780" cy="620" r="2" fill="hsl(var(--primary))" fillOpacity="0.25" />

            {/* Connection lines between nodes */}
            <line x1="350" y1="320" x2="550" y2="400" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.12" />
            <line x1="550" y1="400" x2="680" y2="400" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="450" y1="500" x2="600" y2="580" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="600" y1="580" x2="700" y2="700" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.08" />
            <line x1="420" y1="440" x2="450" y2="500" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="650" y1="520" x2="780" y2="620" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.08" />
            <line x1="300" y1="600" x2="380" y2="750" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.08" />
            <line x1="350" y1="320" x2="420" y2="440" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="680" y1="400" x2="650" y2="520" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
          </g>

          {/* Top atmosphere edge highlight */}
          <path
            d="M 150 550 A 400 400 0 0 1 950 550"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            fill="none"
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

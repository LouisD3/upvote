import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PROMPT = "Pourquoi Reddit peut être un puissant canal d'acquisition pour ma startup ?";
const encodedPrompt = encodeURIComponent(PROMPT);

const aiPlatforms = [
  {
    nameKey: "askAI.askChatGPT" as const,
    url: `https://chatgpt.com/?hints=search&q=${encodedPrompt}`,
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
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.325 5.091L12.7 13.26l-1.61-2.89L15.09 3h2.235zM8.91 3l4.012 7.09L8.91 3zm0 0l4.012 7.09 2.018 3.567L8.91 21H6.675l6.035-10.65L8.91 3zm6.03 10.657L12.922 17.1 8.91 21h2.235l5.413-9.565-1.618-2.778v5z" />
      </svg>
    ),
  },
  {
    nameKey: "askAI.askPerplexity" as const,
    url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.38 3v5.69L3 5.44v7.76l4.38-2.25V18H3v3h18v-3h-4.38V10.93L21 13.18V5.44l-4.38 3.25V3h-3.24v6.31L12 7.5l-1.38 1.81V3H7.38zM12 11.24l2.62 3.45V18H9.38v-3.31L12 11.24z" />
      </svg>
    ),
  },
];

export const AskAISection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative orange arc */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full border-[3px] border-primary/20"
          style={{ transform: "translateY(55%)" }}
        />
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

import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PROMPT = "Pourquoi Reddit peut être un puissant canal d'acquisition pour ma startup ?";
const encodedPrompt = encodeURIComponent(PROMPT);

const aiPlatforms = [
  {
    name: "ChatGPT",
    url: `https://chatgpt.com/?q=${encodedPrompt}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    url: `https://claude.ai/new?q=${encodedPrompt}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4.709 15.955l4.72-2.756.08-.046 2.698-1.575c.092-.054.15-.122.15-.222 0-.1-.058-.168-.15-.222L9.51 9.56l-.08-.046-4.72-2.756c-.185-.108-.347-.014-.347.197v8.803c0 .211.162.305.347.197zm6.58-3.834L8.025 13.96v-3.68l3.265-1.839v3.68zM19.291 8.045l-4.72 2.756-.08.046-2.698 1.575c-.092.054-.15.122-.15.222 0 .1.058.168.15.222l2.697 1.575.08.046 4.72 2.756c.186.108.348.014.348-.197V8.243c0-.211-.162-.305-.348-.197zm-6.58 3.834l3.264-1.839v3.68l-3.265 1.839v-3.68z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 1.5L4.5 7.5V16.5L12 22.5L19.5 16.5V7.5L12 1.5ZM12 4.5L16.5 8.25V12L12 15.75L7.5 12V8.25L12 4.5ZM6 9V15L12 19.5L18 15V9L12 4.5L6 9Z" />
      </svg>
    ),
  },
];

export const AskAISection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="bg-muted/30 border border-border/50 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("askAI.title")}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              {t("askAI.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {aiPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-foreground text-background px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  {platform.icon}
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

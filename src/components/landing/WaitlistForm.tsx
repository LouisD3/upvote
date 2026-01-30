import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "@/components/icons/XIcon";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

export const WaitlistForm = ({ variant = "section" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Merci d'entrer un email valide.");
      return;
    }

    setIsLoading(true);
    
    try {
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({
          email: email.trim(),
          company_name: companyName.trim() || null,
          phone: phone.trim() || null,
          twitter_handle: twitter.trim() || null,
        });

      if (insertError) {
        if (insertError.code === '23505') {
          setError("Cet email est déjà inscrit sur la waitlist.");
        } else {
          setError("Une erreur est survenue. Réessaie plus tard.");
          console.error("Waitlist error:", insertError);
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Une erreur est survenue. Réessaie plus tard.");
      console.error("Waitlist error:", err);
    }
    
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className={cn(
        "text-center",
        variant === "section" && "py-20 px-6 bg-secondary/50"
      )}>
        <div className={cn(
          "p-8 rounded-2xl bg-background border border-primary/20",
          variant === "hero" && "max-w-md mx-auto"
        )}>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Tu es sur la liste ! 🎉
          </h3>
          <p className="text-muted-foreground">
            Je te contacterai personnellement dans les prochains jours.
          </p>
        </div>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-3" id="waitlist-form">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-11 text-base bg-background border-border focus:border-primary",
              error && "border-destructive"
            )}
            required
          />
          {error && (
            <p className="mt-1 text-sm text-destructive">{error}</p>
          )}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Nom de l'entreprise"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="h-11 text-base bg-background border-border focus:border-primary"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Téléphone (optionnel)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 text-base bg-background border-border focus:border-primary pl-11"
          />
        </div>

        <div className="relative">
          <XIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="@tonhandle (optionnel)"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="h-11 text-base bg-background border-border focus:border-primary pl-11"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className={cn(
          "w-full h-12 text-base font-semibold",
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "transition-all duration-300",
          "hover:scale-[1.02] active:scale-[0.98]",
          !isLoading && "animate-pulse-glow"
        )}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Inscription...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>Rejoindre la waitlist</span>
            <span className="bg-background/20 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              🔥 Plus que 7 places
            </span>
          </span>
        )}
      </Button>
    </form>
  );

  if (variant === "hero") {
    return formContent;
  }

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-xl mx-auto">
        <AnimatedSection>
          <p className="text-center text-lg text-muted-foreground mb-8 leading-relaxed">
            Rejoins la waitlist privée. Je te contacterai personnellement pour comprendre si
            Reddit a du sens pour ton SaaS.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          {formContent}
        </AnimatedSection>
      </div>
    </section>
  );
};

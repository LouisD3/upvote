import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "@/components/icons/XIcon";
import { Phone, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";


// Zod validation schema for waitlist form
const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "L'email est requis")
    .max(255, "L'email ne peut pas dépasser 255 caractères")
    .email("Merci d'entrer un email valide"),
  company_name: z
    .string()
    .trim()
    .max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères")
    .optional()
    .transform(val => val || null),
  phone: z
    .string()
    .trim()
    .max(20, "Le numéro de téléphone ne peut pas dépasser 20 caractères")
    .regex(/^(\+?[\d\s\-()]*)?$/, "Format de téléphone invalide")
    .optional()
    .transform(val => val || null),
  twitter_handle: z
    .string()
    .trim()
    .max(50, "Le handle Twitter ne peut pas dépasser 50 caractères")
    .regex(/^(@?[a-zA-Z0-9_]*)?$/, "Format de handle Twitter invalide (lettres, chiffres et _ uniquement)")
    .optional()
    .transform(val => val || null),
});

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

    // Validate form data with Zod
    const validationResult = waitlistSchema.safeParse({
      email: email,
      company_name: companyName,
      phone: phone,
      twitter_handle: twitter,
    });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      setError(firstError.message);
      return;
    }

    const validatedData = validationResult.data;
    setIsLoading(true);
    
    try {
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({
          email: validatedData.email,
          company_name: validatedData.company_name,
          phone: validatedData.phone,
          twitter_handle: validatedData.twitter_handle,
        });

      if (insertError) {
        if (insertError.code === '23505') {
          setError("Cet email est déjà inscrit sur la waitlist.");
        } else {
          setError("Une erreur est survenue. Réessaie plus tard.");
        }
        setIsLoading(false);
        return;
      }

      trackWaitlistSubmit(validatedData.email);
      setIsSubmitted(true);
    } catch (err) {
      setError("Une erreur est survenue. Réessaie plus tard.");
    }
    
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className={cn(
        "text-center",
        variant === "section" && "py-20 px-6 bg-gradient-section"
      )}>
        <div className={cn(
          "relative p-8 rounded-2xl bg-card shadow-card border border-primary/20 overflow-hidden",
          variant === "hero" && "max-w-md mx-auto"
        )}>
          {/* Success glow */}
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Tu es sur la liste ! 🎉
            </h3>
            <p className="text-muted-foreground">
              Je te contacterai personnellement dans les prochains jours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4" id="waitlist-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-12 text-base bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300",
              error && "border-destructive focus:border-destructive focus:ring-destructive/20"
            )}
            required
          />
          {error && (
            <p className="mt-2 text-sm text-destructive flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-destructive" />
              {error}
            </p>
          )}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Nom de l'entreprise"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="h-12 text-base bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="relative group">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
          <Input
            type="tel"
            placeholder="Téléphone (optionnel)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12 text-base bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 pl-11 transition-all duration-300"
          />
        </div>

        <div className="relative group">
          <XIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
          <Input
            type="text"
            placeholder="@tonhandle (optionnel)"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="h-12 text-base bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 pl-11 transition-all duration-300"
          />
        </div>
      </div>

      <div className="relative group pt-1">
        {/* Button glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
        
        <Button
          type="submit"
          disabled={isLoading}
          className={cn(
            "relative w-full h-14 text-base font-bold rounded-xl",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90",
            "transition-all duration-300",
            "hover:scale-[1.02] active:scale-[0.98]",
            !isLoading && "shadow-lg shadow-primary/30 animate-wiggle-glow"
          )}
        >
          {isLoading ? (
            <span className="flex items-center gap-3">
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
              <span>Inscription en cours...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5" />
              <span>Rejoindre la waitlist</span>
              <span className="bg-background/20 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
                🔥 7 places
              </span>
            </span>
          )}
        </Button>
      </div>
    </form>
  );

  if (variant === "hero") {
    return formContent;
  }

  return (
    <section className="py-20 px-6 bg-gradient-section">
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

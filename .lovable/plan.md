

## Setup PostHog Analytics

### Ce qu'on va faire
Intégrer PostHog dans l'application pour tracker le trafic, les événements (clics CTA, soumission formulaire waitlist), et avoir accès aux session replays.

### Étapes

1. **Installer le package `posthog-js`**

2. **Créer un provider PostHog** (`src/components/PostHogProvider.tsx`)
   - Initialiser PostHog avec la clé API publique
   - Wrapper l'app avec le provider

3. **Intégrer le provider dans `src/App.tsx`**

4. **Ajouter des événements custom** sur les actions clés :
   - Clic sur les CTA Calendly (dans Header, HeroSection, PricingSection, ProcessSection)
   - Soumission du formulaire waitlist (WaitlistForm)
   - Changement de langue (LanguageContext)

### Ce dont tu auras besoin
- Un compte PostHog (gratuit jusqu'à 1M events/mois) sur [posthog.com](https://posthog.com)
- Ta **clé API publique** PostHog (c'est une clé publique, donc on peut la mettre directement dans le code)

### Note
La clé API PostHog est **publique** (elle est exposée côté client de toute façon), donc pas besoin de la stocker en secret. On la mettra directement dans le code.


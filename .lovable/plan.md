

# Refonte complète de la Landing Page

## Modifications globales

### 1. Supprimer des composants/sections
- Supprimer `WaitlistForm` du Hero et de toute la page
- Supprimer `TestimonialsSection` (avis client)
- Supprimer la mention "10k de MRR" dans la subline du Hero
- Nettoyer le CTA du `ProcessSection` (remplacer par "Book free Audit")

### 2. Système de traduction (i18n)
- Creer un fichier `src/lib/i18n.ts` contenant toutes les traductions FR/EN en objet simple
- Creer un context React `src/contexts/LanguageContext.tsx` avec `useLanguage()` hook
- Langue par defaut : anglais
- Drapeau dans le Header pour toggle (emoji drapeaux 🇬🇧/🇫🇷)
- Wrapper l'app avec le `LanguageProvider`

### 3. Header refondu
- Ajouter les liens de navigation : **How it works** (scroll vers ProcessSection), **Pricing** (scroll vers PricingSection), **FAQ** (scroll vers FAQSection)
- Remplacer le bouton CTA waitlist par **"Book free Audit"** qui ouvre le Calendly
- Ajouter le toggle drapeau FR/EN
- Smooth scroll via `document.getElementById().scrollIntoView()`

### 4. Hero refondu
- Ajouter badge **"Trusted by YC startups"** avec logo YC + lien vers ycombinator.com au-dessus du h1
- Supprimer la subline "10k de MRR"
- Réécrire la subline en anglais (par defaut)
- Remplacer le formulaire waitlist par un bouton **"Book free Audit"** avec animation wiggle-glow + confetti au clic (via canvas-confetti ou implementation CSS legere)
- Le bouton ouvre `https://calendly.com/drouillard-mateo/audit-reddit` dans un nouvel onglet
- Mention "Limited spots available" quelque part pres du CTA
- Garder le `LogoBanner`

### 5. ProcessSection
- Remplacer le CTA du bas par "Book free Audit" avec lien Calendly
- Traduire le contenu via i18n

### 6. Nouvelle section Pricing (`src/components/landing/PricingSection.tsx`)
- Style inspire de la capture : fond clair, carte avec bordure subtile, badge "Founders' choice"
- Nom du plan : **Reddit Growth Organic**
- Prix : **3,000€/mo**
- Description : "The system that turns Reddit into your top funnel."
- Inclus (avec check icons dorées/orange) :
  - Account creation & management
  - 5 posts / month
  - Strategic social listening setup
  - SEO & GEO optimization
  - Full monthly reporting
- CTA : "Book a Free Consultation" qui ouvre le Calendly
- Section id="pricing" pour le scroll

### 7. Nouvelle section FAQ (`src/components/landing/FAQSection.tsx`)
- Style copie de la capture : fond clair, titre "Everything you need to know.", accordion items
- Utiliser le composant Accordion de shadcn/ui deja installe
- 4 questions adaptees pour Reddit :
  1. "Should I commit for a long period of time to work with you?"
  2. "How long do you need to launch a first campaign?"
  3. "How can you write content that resonates with my Ideal Customer Profile (ICP)?"
  4. "How many posts should I expect every month?"
- Reponses pertinentes pour le service Reddit
- Section id="faq" pour le scroll

### 8. Confetti effect
- Installer `canvas-confetti` ou implementer un confetti CSS leger
- Declencher au clic sur "Book free Audit" dans le Hero avant d'ouvrir le Calendly

## Fichiers concernes

| Fichier | Action |
|---------|--------|
| `src/lib/i18n.ts` | Creer - traductions EN/FR |
| `src/contexts/LanguageContext.tsx` | Creer - context + hook |
| `src/components/landing/Header.tsx` | Modifier - nav, CTA, drapeau |
| `src/components/landing/HeroSection.tsx` | Modifier - badge YC, CTA Calendly, suppr form |
| `src/components/landing/PricingSection.tsx` | Creer |
| `src/components/landing/FAQSection.tsx` | Creer |
| `src/components/landing/ProcessSection.tsx` | Modifier - CTA + traductions |
| `src/components/landing/ProblemSection.tsx` | Modifier - traductions |
| `src/pages/Index.tsx` | Modifier - suppr Testimonials, ajouter Pricing + FAQ |
| `src/App.tsx` | Modifier - wrapper LanguageProvider |
| `src/components/landing/LogoBanner.tsx` | Modifier - traductions |


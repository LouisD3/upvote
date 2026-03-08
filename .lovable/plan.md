

# Plan d'implémentation

## 1. Footer enrichi
Remplacer le footer minimaliste dans `Index.tsx` par un footer avec :
- Email : contact@redditpartners.com (lien mailto)
- Icone X/Twitter vers https://x.com/mateodr_
- Icone LinkedIn vers https://www.linkedin.com/in/mateodrouillard/
- Copyright "© 2026 RedditPartners. All rights reserved." avec le coeur existant

Utiliser les composants `XIcon` et `LinkedInIcon` déjà présents dans `src/components/icons/`.

## 2. Mention "3 mois minimum" dans le pricing
Ajouter sous le prix (`3 000€/mois`) une ligne élégante type badge ou texte subtil :
- Nouvelle clé i18n `pricing.commitment` : EN "3-month minimum commitment" / FR "Engagement minimum de 3 mois"
- Affichée avec une icône (ex: `Shield` ou `Clock`) dans un style discret sous le prix

## 3. SEO meta tags cleanup dans `index.html`
- Supprimer les doublons `og:title`, `og:description`, `twitter:title`, `twitter:description` (lignes 58-61)
- Remonter ces valeurs dans le bloc OG/Twitter existant (lignes 17-30)
- Ajouter les balises `hreflang` pour FR/EN
- Harmoniser title/description EN et FR

## 4. Lien YC non cliquable
Dans `HeroSection.tsx`, remplacer le `<a>` (lignes 55-67) par un `<div>` avec le même style, sans lien.

## Fichiers modifiés
- `src/pages/Index.tsx` — footer
- `src/lib/i18n.ts` — nouvelles clés footer + pricing.commitment
- `src/components/landing/PricingSection.tsx` — mention engagement
- `src/components/landing/HeroSection.tsx` — YC non cliquable
- `index.html` — SEO meta cleanup




# Rebranding RedditPartners → UpvotePartners + changements techniques

## Résumé des changements

### 1. Domaine & URLs
Remplacer `redditpartners.com` → `upvotepartners.com` partout :
- **`index.html`** : canonical, hreflang, OG, Twitter, JSON-LD (`url`, `name`, `og:site_name`, `og:title`, `twitter:title`, `<title>`)

### 2. Calendly
Remplacer `https://calendly.com/mateo-drouillard-redditpartners/audit` → `https://calendly.com/mateo-drouillard-upvotepartners/audit` dans :
- `src/components/landing/Header.tsx` (ligne 8)
- `src/components/landing/HeroSection.tsx` (ligne 10)
- `src/components/landing/ProcessSection.tsx` (ligne 9)
- `src/components/landing/PricingSection.tsx` (ligne 8)

### 3. Analytics : PostHog → Hotjar (Contentsquare)
- **`index.html`** : ajouter `<script src="https://t.contentsquare.net/uxa/fe3725e302c65.js"></script>` dans le `<head>`
- **Supprimer** `src/lib/posthog.ts`
- **Supprimer** `src/components/PostHogProvider.tsx`
- **Mettre à jour** tous les imports de `trackCTAClick` dans Header, HeroSection, ProcessSection, PricingSection → retirer les appels PostHog (ou les remplacer par des no-op)
- **`src/main.tsx`** ou **`src/App.tsx`** : retirer le `PostHogProvider` s'il y est
- Note : la dépendance `posthog-js` peut rester dans package.json sans impact

### 4. Email de contact
`contact@redditpartners.com` → `contact@upvotepartners.com` dans :
- `src/pages/Index.tsx` (lignes 50-52)

### 5. Nom de marque dans le front
`RedditPartners` → `UpvotePartners` dans :
- `src/components/landing/Header.tsx` (alt + texte, lignes 27, 31)
- `src/pages/Index.tsx` (alt, texte, copyright — lignes 39, 40, 79)
- `index.html` (title, meta author, og:site_name, JSON-LD name)

### Fichiers impactés
1. `index.html`
2. `src/components/landing/Header.tsx`
3. `src/components/landing/HeroSection.tsx`
4. `src/components/landing/ProcessSection.tsx`
5. `src/components/landing/PricingSection.tsx`
6. `src/pages/Index.tsx`
7. `src/lib/posthog.ts` (suppression)
8. `src/components/PostHogProvider.tsx` (suppression ou vidage)
9. `src/App.tsx` (retirer PostHogProvider si utilisé)


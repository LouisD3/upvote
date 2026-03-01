

## Modifications dans `src/lib/i18n.ts`

### 1. Supprimer tous les tirets longs (—) dans les textes
Remplacer les "—" par des "." ou reformuler les phrases pour les rendre fluides sans tiret. Concerne : `hero.subline`, `hero.bonus`, `pricing.limitedSpots`, `faq.a1`, `faq.a3`, `faq.a4`.

### 2. Corriger le titre pricing FR
`"pricing.title2"` FR passe de `"et sans engagement"` à `"tarifs"` (pour correspondre à l'EN "pricing").

### 3. Corriger le badge YC en FR
`"hero.trustedBy"` FR : garder en anglais `"Trusted by YC startups"` (au lieu de "Fait confiance par des startups YC").

### 4. Mettre à jour la FAQ Q1/A1 pour mentionner l'engagement de 3 mois minimum
Réécrire Q1/A1 en EN et FR pour préciser qu'il y a un engagement minimum de 3 mois.

### 5. Supprimer la section "Bonus" du Hero et intégrer la mention LLMs dans la subline
- Dans `src/components/landing/HeroSection.tsx` : supprimer le bloc AnimatedSection du bonus (lignes 84-94).
- Dans `src/lib/i18n.ts` : enrichir `hero.subline` pour inclure la mention que le contenu Reddit est utilisé comme source par ChatGPT, Perplexity, Claude, etc. Supprimer les clés `hero.bonus` et `hero.bonusLabel`.


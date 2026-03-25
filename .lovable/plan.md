

# Corrections section Ask AI

## 3 changements demandés

### 1. Logo Claude — Remplacer par l'image uploadée
- Copier `user-uploads://claude-ai.png` vers `src/assets/claude-ai.png`
- Dans `AskAISection.tsx`, remplacer le SVG inline de Claude par un `<img>` importé depuis `@/assets/claude-ai.png`
- Appliquer un filtre CSS `invert` pour que le logo blanc soit visible sur fond noir du bouton (ou inversement selon le thème)

### 2. Liens — Corriger ChatGPT
- Le lien fourni par l'utilisateur est en fait pour Claude (`claude.ai/new?q=...`) et fonctionne déjà.
- Le vrai problème est le lien **ChatGPT**. L'URL `chatgpt.com/?hints=search&q=` ne fonctionne pas de manière fiable. Remplacer par `https://chatgpt.com/?q=${encodedPrompt}` sans le `hints=search`, ou utiliser `https://chat.openai.com/?q=${encodedPrompt}`.
- Vérifier que l'encodage du prompt est correct (le `encodeURIComponent` actuel devrait suffire).

### 3. Arc décoratif — Effet "planète" avec traits orange
- Remplacer le simple cercle CSS par un SVG plus élaboré simulant une planète :
  - Un grand demi-cercle (la planète) en bas de la section
  - Plusieurs lignes courbes horizontales (les "traits") traversant le cercle en orange avec différentes opacités
  - Effet similaire à une planète gazeuse avec des bandes
- Utiliser des `<ellipse>` et `<path>` SVG avec `stroke` en `hsl(var(--primary))` et opacités variées (0.1 à 0.3)

### Fichiers impactés
- `src/assets/claude-ai.png` (nouveau — copie)
- `src/components/landing/AskAISection.tsx` (logo Claude, lien ChatGPT, arc planète)


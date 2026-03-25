

# Refonte section "Ask AI" pour copier le design de référence

## Problemes identifiés
1. **Design** : ne correspond pas à l'image de référence (manque l'arc décoratif, le badge logo en haut)
2. **Logos Claude et Perplexity** : SVG incorrects, ne correspondent pas aux vrais logos
3. **Liens ChatGPT et Claude** : les URLs `chatgpt.com/?q=` et `claude.ai/new?q=` sont valides selon la doc, le problème vient peut-être de l'encodage des caractères spéciaux français (apostrophes). A investiguer et corriger.
4. **Labels boutons** : l'image montre "Demander à ChatGPT" / "Demander à Claude" / "Demander à Perplexity", pas juste le nom

## Changements

### 1. `src/components/landing/AskAISection.tsx` — Refonte complète
- Ajouter un **grand arc décoratif** en arrière-plan (SVG ou CSS border-radius) en **orange** (couleur brand) au lieu du vert de l'image de référence
- Ajouter un **petit badge logo** UpvotePartners centré en haut de la section
- Fond avec un léger pattern de grille (dots ou grid subtil) comme sur l'image
- Labels boutons : "Demander à ChatGPT", "Demander à Claude", "Demander à Perplexity" (FR) / "Ask ChatGPT", "Ask Claude", "Ask Perplexity" (EN)
- **Remplacer les SVG** de Claude et Perplexity par leurs vrais logos officiels
- Vérifier l'encodage du prompt dans les URLs (tester avec `encodeURIComponent` sur les caractères spéciaux français)

### 2. `src/lib/i18n.ts` — Ajout clés boutons
- `askAI.askChatGPT` : "Demander à ChatGPT" / "Ask ChatGPT"
- `askAI.askClaude` : "Demander à Claude" / "Ask Claude"  
- `askAI.askPerplexity` : "Demander à Perplexity" / "Ask Perplexity"

### Fichiers impactés
- `src/components/landing/AskAISection.tsx` (refonte)
- `src/lib/i18n.ts` (ajout clés)


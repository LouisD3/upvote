

# Section "Ask AI" — Implémentation

## Fichiers à créer / modifier

### 1. `src/components/landing/AskAISection.tsx` (nouveau)
- Section avec fond `bg-muted/30`, coins arrondis, padding généreux
- Titre : `t("askAI.title")` + sous-titre : `t("askAI.subtitle")`
- 3 boutons noirs (`bg-foreground text-background`) : ChatGPT, Claude, Perplexity
- Chaque bouton ouvre un nouvel onglet avec le prompt encodé en URL :
  - ChatGPT : `https://chatgpt.com/?q={prompt}`
  - Claude : `https://claude.ai/new?q={prompt}`
  - Perplexity : `https://www.perplexity.ai/search?q={prompt}`
- Prompt : *"Pourquoi Reddit peut être un puissant canal d'acquisition pour ma startup ?"*
- Logos SVG inline simplifiés pour chaque IA
- Wrappé dans `AnimatedSection`

### 2. `src/lib/i18n.ts` — Ajout clés
| Clé | FR | EN |
|-----|----|----|
| `askAI.title` | Toujours pas sûr que Reddit soit fait pour vous ? | Still not sure Reddit is right for you? |
| `askAI.subtitle` | Cliquez sur un bouton et découvrez pourquoi Reddit peut (ou non) être un bon canal d'acquisition pour votre startup. | Click a button and find out why Reddit can (or can't) be a great acquisition channel for your startup. |

### 3. `src/pages/Index.tsx` — Placement
Ajouter `<AskAISection />` entre `<PricingSection />` et `<FAQSection />`.


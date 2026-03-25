

# Refonte de la section Pricing : 3 offres

## Résumé
Passer d'une carte unique à 3 cartes côte à côte avec les plans Foundation (3 000€), Engine (5 000€, mis en avant), et Market Dominance (10 000€).

## Changements

### 1. `src/lib/i18n.ts` — Nouvelles clés de traduction
Remplacer les clés `pricing.*` existantes par des clés pour 3 plans :

| Clé | EN | FR |
|-----|----|----|
| `pricing.plan1.name` | Reddit Growth Foundation | Reddit Growth Foundation |
| `pricing.plan1.price` | 3,000€ | 3 000€ |
| `pricing.plan1.posts` | 4–5 posts / month | 4–5 posts / mois |
| `pricing.plan1.comments` | 25 targeted comments / month | 25 commentaires ciblés / mois |
| `pricing.plan2.name` | Reddit Growth Engine | Reddit Growth Engine |
| `pricing.plan2.price` | 5,000€ | 5 000€ |
| `pricing.plan2.posts` | 6–7 posts / month | 6–7 posts / mois |
| `pricing.plan2.comments` | 50 targeted comments / month | 50 commentaires ciblés / mois |
| `pricing.plan2.badge` | Most popular | Le plus populaire |
| `pricing.plan3.name` | Reddit Market Dominance | Reddit Market Dominance |
| `pricing.plan3.price` | 10,000€ | 10 000€ |
| `pricing.plan3.posts` | 7–8 posts / month | 7–8 posts / mois |
| `pricing.plan3.comments` | 100 targeted comments / month | 100 commentaires ciblés / mois |

Features communes (partagées par les 3 plans) :
- Multi-account setup & management
- Social listening & monitoring tools setup
- SEO & LLM visibility optimization (GEO)
- Monthly reporting

Conserver `pricing.badge`, `pricing.title1`, `pricing.title2`, `pricing.period`, `pricing.commitment`, `pricing.cta`, `pricing.limitedSpots`.
Supprimer les anciennes clés devenues inutiles (`pricing.planName`, `pricing.planDesc`, `pricing.foundersChoice`, `pricing.feature1`–`5`, `pricing.price`).

### 2. `src/components/landing/PricingSection.tsx` — Layout 3 colonnes
- Passer le container de `max-w-lg` à `max-w-6xl`
- Créer un array de 3 plans avec : nom, prix, posts, comments, highlighted (boolean)
- Afficher en grille `grid grid-cols-1 md:grid-cols-3 gap-6`
- Le plan du milieu (Engine) aura le glow effect + badge "Most popular" + légèrement plus grand (`scale-105` sur md)
- Les 2 autres plans : bordure `border-border` standard, pas de glow
- Chaque carte affiche : nom, prix/mois, commitment, les 2 features variables (posts + comments), puis les 4 features communes, puis le CTA Calendly
- Icônes médailles : 🥉🥈🥇 en emoji ou via les icônes existantes

### Structure visuelle
```text
┌─────────────┐  ┌─────────────────┐  ┌─────────────┐
│  Foundation  │  │  ★ Engine ★     │  │  Dominance  │
│   3 000€/mo  │  │   5 000€/mo     │  │  10 000€/mo │
│              │  │  (highlighted)   │  │             │
│  4-5 posts   │  │  6-7 posts      │  │  7-8 posts  │
│  25 comments │  │  50 comments    │  │  100 comment│
│  + 4 shared  │  │  + 4 shared     │  │  + 4 shared │
│   [Book CTA] │  │   [Book CTA]    │  │  [Book CTA] │
└─────────────┘  └─────────────────┘  └─────────────┘
```

### Fichiers impactés
1. `src/lib/i18n.ts`
2. `src/components/landing/PricingSection.tsx`




# Animation CTA + Section Process "Serpent" Ultra Visuelle

## 1. Animation "Wiggle-Glow" sur le CTA Hero

### Objectif
Ajouter une animation qui attire l'oeil sur le bouton CTA pour augmenter les clics.

### Animation prévue
Une combinaison subtile de :
- Légère oscillation (wiggle) de -1deg à 1deg
- Pulsation du glow orange
- Boucle infinie, active seulement quand pas en loading

### Modifications techniques

**Fichier : `tailwind.config.ts`**
```javascript
// Nouvelle keyframe
"wiggle-glow": {
  "0%, 100%": { 
    transform: "rotate(-0.5deg)",
    boxShadow: "0 0 20px 0 hsl(16 100% 50% / 0.3)"
  },
  "50%": { 
    transform: "rotate(0.5deg)",
    boxShadow: "0 0 30px 5px hsl(16 100% 50% / 0.5)"
  },
}

// Nouvelle animation
"wiggle-glow": "wiggle-glow 2s ease-in-out infinite"
```

**Fichier : `src/components/landing/WaitlistForm.tsx`**
- Ajouter la classe `animate-wiggle-glow` au bouton quand `!isLoading`

---

## 2. Section Process "Serpent" Descendant

### Concept visuel
Un layout en zigzag qui descend comme un serpent, alternant gauche-droite pour chaque etape. Chaque etape est connectee par une ligne courbe/diagonale animee.

### Les 5 etapes

| # | Titre | Description | Icone |
|---|-------|-------------|-------|
| 1 | Audit | Analyse de ton SaaS, funnel et ICP | ClipboardCheck |
| 2 | Strategie | Definition de la strategie Reddit sur-mesure | Target |
| 3 | Setup | Creation des comptes + warm-up | UserPlus |
| 4 | Execution | Deploiement de la strat + reporting mensuel | Rocket |
| 5 | Scaling | Scaling du canal pour maximiser les resultats | TrendingUp |

### Design du serpent descendant

```text
Desktop View (zigzag horizontal):

        ┌─────────────────────────────────────────────────────────────┐
        │                    Notre process                            │
        │            5 etapes pour exploser sur Reddit                │
        │                                                             │
        │   ┌─────────┐                                               │
        │   │    1    │  Audit                                        │
        │   │   📋    │  Analyse de ton SaaS, funnel et ICP           │
        │   └────┬────┘                                               │
        │        │                                                    │
        │        └──────────────────┐                                 │
        │                           │                                 │
        │                     ┌─────┴─────┐                           │
        │                     │     2     │  Strategie                │
        │                     │    🎯     │  Definition sur-mesure    │
        │                     └─────┬─────┘                           │
        │                           │                                 │
        │        ┌──────────────────┘                                 │
        │        │                                                    │
        │   ┌────┴────┐                                               │
        │   │    3    │  Setup                                        │
        │   │   👤    │  Creation comptes + warm-up                   │
        │   └────┬────┘                                               │
        │        │                                                    │
        │        └──────────────────┐                                 │
        │                           │                                 │
        │                     ┌─────┴─────┐                           │
        │                     │     4     │  Execution                │
        │                     │    🚀     │  Deploiement + reporting  │
        │                     └─────┬─────┘                           │
        │                           │                                 │
        │        ┌──────────────────┘                                 │
        │        │                                                    │
        │   ┌────┴────┐                                               │
        │   │    5    │  Scaling                                      │
        │   │   📈    │  Maximiser les resultats                      │
        │   └─────────┘                                               │
        │                                                             │
        └─────────────────────────────────────────────────────────────┘

Mobile View (vertical stack avec ligne):

        ┌─────────────────────┐
        │   ┌─────────────┐   │
        │   │  1  Audit   │   │
        │   └──────┬──────┘   │
        │          │          │
        │   ┌──────┴──────┐   │
        │   │ 2 Strategie │   │
        │   └──────┬──────┘   │
        │          │          │
        │   ┌──────┴──────┐   │
        │   │  3  Setup   │   │
        │   └──────┬──────┘   │
        │          │          │
        │   ┌──────┴──────┐   │
        │   │ 4 Execution │   │
        │   └──────┬──────┘   │
        │          │          │
        │   ┌──────┴──────┐   │
        │   │  5 Scaling  │   │
        │   └─────────────┘   │
        └─────────────────────┘
```

### Elements de design

| Element | Style |
|---------|-------|
| Cartes | `bg-card/80 backdrop-blur-sm border border-primary/20` avec hover effects |
| Numero | Cercle orange `w-12 h-12 bg-primary text-primary-foreground font-bold` |
| Icones | `w-8 h-8 text-primary` dans le cercle |
| Lignes de connexion | SVG avec `stroke-primary/30` et animation au scroll |
| Alternance | `justify-start` / `justify-end` selon index pair/impair |

### Animations
- Chaque carte apparait avec un delai croissant (animation slide-up)
- Les lignes de connexion se dessinent au scroll (stroke-dasharray)
- Effet glow au hover sur les cercles numerotes

### Structure technique

**Nouveau fichier : `src/components/landing/ProcessSection.tsx`**
- Import AnimatedSection et icones Lucide
- Array des 5 etapes avec titre, description, icone
- Layout responsive :
  - Desktop : alternance gauche/droite avec lignes diagonales SVG
  - Mobile : stack vertical avec ligne centrale
- Utilisation de CSS Grid pour l'alternance

**Modification : `src/pages/Index.tsx`**
- Importer ProcessSection
- L'ajouter entre ApproachSection et TestimonialsSection

---

## Resume des fichiers

| Fichier | Action |
|---------|--------|
| `tailwind.config.ts` | Ajouter keyframe + animation `wiggle-glow` |
| `src/components/landing/WaitlistForm.tsx` | Appliquer animation au CTA |
| `src/components/landing/ProcessSection.tsx` | Creer (nouveau) |
| `src/pages/Index.tsx` | Importer et positionner ProcessSection |


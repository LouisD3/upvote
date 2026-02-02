

# Transformation en témoignage unique "star" de Matéo

## Objectif
Transformer la section témoignages (actuellement 3 avis en grille) en un seul témoignage mis en valeur de Matéo, avec un commentaire enrichi incluant les nouvelles métriques.

---

## Le nouveau témoignage

**Texte enrichi avec CAC 0€ et taux de closing 70% :**

> "Avant RedditPartners, on dépensait des milliers d'euros en ads avec des leads tièdes. En 3 mois de collaboration, Reddit est devenu notre 2ème source d'acquisition. Les leads sont ultra qualifiés car ils viennent à nous après avoir vu notre expertise sur les discussions. Résultat : un CAC à 0€ sur ces leads et un taux de closing de 70%."

---

## Design prévu

```text
┌─────────────────────────────────────────────────────────────┐
│                  💬 Témoignage client                       │
│                                                             │
│   ┌───────────────────────────────────────────────────────┐ │
│   │                                                       │ │
│   │                      ❝                                │ │
│   │                                                       │ │
│   │    "Avant RedditPartners, on dépensait des            │ │
│   │    milliers d'euros en ads avec des leads tièdes.     │ │
│   │    En 3 mois de collaboration, Reddit est devenu      │ │
│   │    notre 2ème source d'acquisition. Les leads sont    │ │
│   │    ultra qualifiés car ils viennent à nous après      │ │
│   │    avoir vu notre expertise sur les discussions.      │ │
│   │    Résultat : un CAC à 0€ sur ces leads et un         │ │
│   │    taux de closing de 70%."                           │ │
│   │                                                       │ │
│   │                    ★★★★★                               │ │
│   │                                                       │ │
│   │              [Photo Matéo]                            │ │
│   │                 Matéo                                 │ │
│   │            CEO @ StagingEasy                          │ │
│   │                                                       │ │
│   └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Changements techniques

### Fichier : `src/components/landing/TestimonialsSection.tsx`

1. **Supprimer le tableau `testimonials`** et la logique de mapping

2. **Simplifier la structure** :
   - Carte unique centrée (max-width ~800px)
   - Grande icône Quote decorative en haut
   - Texte du témoignage en plus grand (text-lg md:text-xl)
   - 5 étoiles centrées
   - Photo de Matéo plus grande (w-16 h-16) et centrée
   - Nom et rôle centrés sous la photo

3. **Mettre à jour le header** :
   - Badge : "Témoignage client" (singulier)
   - Supprimer le titre et sous-titre (le témoignage parle de lui-même)

4. **Conserver** : L'import de `mateoAvatar`

---

## Éléments de style

| Element | Style |
|---------|-------|
| Carte | `bg-card/50 backdrop-blur-sm border-primary/20 max-w-3xl mx-auto` |
| Icône Quote | `w-12 h-12 text-primary/30` centré |
| Texte | `text-lg md:text-xl text-foreground leading-relaxed text-center` |
| Étoiles | 5 étoiles `fill-primary text-primary` centrées |
| Photo | `w-16 h-16 rounded-full` centrée |
| Auteur | Texte centré sous la photo |


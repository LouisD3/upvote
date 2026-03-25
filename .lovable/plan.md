

# Corrections Ask AI — Planète + Logo Claude

## Changements

### 1. Réduire la taille de la planète
- Passer le SVG de `width="1100" height="1100"` à `width="800" height="800"` et ajuster le viewBox proportionnellement
- Garder le `translate-y-[55%]` pour que seul le haut de l'arc soit visible

### 2. Traits plus lumineux + glow animé
- Augmenter les `strokeOpacity` des ellipses latitude (passer de 0.08-0.25 à 0.15-0.5)
- Augmenter les `strokeWidth` des traits principaux
- Ajouter une animation CSS `@keyframes` de pulsation (glow) sur le contour principal du cercle (opacity oscillant entre 0.3 et 0.7)
- Ajouter un filtre SVG `feGaussianBlur` pour un effet de lueur sur le bord

### 3. Logo Claude blanc
- Le filtre `invert` devrait déjà rendre le logo blanc sur fond noir. Le problème vient probablement du fait que l'image uploadée est déjà blanche/claire. Retirer le `invert` si le logo est déjà blanc, ou ajuster avec `brightness(0) invert(1)` pour forcer le blanc quel que soit la couleur d'origine.

### Fichier impacté
- `src/components/landing/AskAISection.tsx`


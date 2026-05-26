# Design — Blog SEO UpvotePartners

> **Date** : 2026-05-26 · **Auteur** : Louis (assistant SEO) · **Statut** : validé (revue Louis, 2026-05-26) — hardening sitemap/Layout/OG intégré · prêt pour `/goal`
> **Périmètre de ce spec** : « Moteur de blog + 1 article phare ». Le reste du cluster est du backlog.

---

## 1. Contexte & objectif

UpvotePartners (agence marketing Reddit + GEO) n'a **aucune infrastructure de blog**. L'audit SEO (mai 2026) liste *« No blog »* comme un manque E-E-A-T direct.

**Contrainte structurante** : autorité de domaine ~0 (domaine absent de Common Crawl). Un blog ne fera donc **pas** ranker en frontal le head term commercial. Son levier réel, vérifié sur le SERP :

1. **Autorité topique** « marketing Reddit » qui soulève la page commerciale (la home).
2. **Citabilité IA** (dogfooding : l'agence vend du GEO → autant le pratiquer).
3. **Captation de la longue traîne** informationnelle Reddit (forte intention, faible concurrence).

Le ranking direct des head terms et la notoriété/branding **compostent par-dessus** une fois l'autorité + quelques backlinks accumulés (horizon 3-6 mois).

**Priorité métier confirmée** (notes d'appel Mateo, 24/05/2026) : **ranker « agence reddit » d'abord**, puis « agence geo ». Le blog v1 sert donc en priorité la **home** (`/`).

### Vérification SERP (grounding `seo-cluster`, données estimées)

`agence reddit` (FR) → SERP **commercial et faible** : top 10 = 7 listicles (« top agences reddit »), 2-3 pages d'agence, **0 contenu informationnel**.

- ✅ La **home reste le pilier** sur le head term. On **ne crée pas** `/agence-reddit` (déjà redirigé 301 → `/` dans `vercel.json`).
- ⚠️ Comme 7/10 résultats sont des **listicles tiers**, la home ne gagnera pas le head term *seule* → nécessite du **digital PR** (entrer dans ces listicles). **Hors-scope du blog** (géré par Mateo : backlinks payants à vélocité croissante, guest posts).
- Couloir contenu **ouvert** : les concurrents (Redd Influence, Redd Agency, Norry…) n'ont quasi pas de blog.

> ⚠️ Volumes/difficultés du cluster = **estimations** (pas de DataForSEO ; proxy DuckDuckGo FR). **À valider sur un vrai outil (Ahrefs/SEMrush) avant de produire en masse.**

---

## 2. Décisions cadrées

| Sujet | Décision |
|---|---|
| Objectif v1 | Autorité topique + citabilité IA au service du ranking de la **home** sur « agence reddit » |
| Territoire | Cluster « marketing Reddit » (hub commercial = home `/`) |
| Périmètre build | **Moteur de blog + 1 article phare** |
| Techno | **Astro Content Collections (Content Layer) + MDX** |
| Langue | **FR-only** en v1 (EN réservé à `/en/blog/` pour plus tard) |
| Auteur | **Matéo Drouillard** (auteur nommé réel + bio + schema Person) |
| Article phare | Adaptation on-site du draft Mateo **« Reddit = SEO indirect (5 signaux) »** (alt : « Reddit baisse vos coûts Google Ads ») |
| Cadence cible (post-v1) | **2 articles/semaine** puis accélération (notes d'appel) |

---

## 3. Périmètre

### Dans le scope (v1)
- Infrastructure de blog complète (collection, hub, template article, schema, RSS, sitemap, maillage→home, lien nav).
- Ajustements ciblés de `Layout.astro` (voir §6.3) — petites améliorations du code qu'on touche, alignées sur l'audit.
- **1 article phare** rédigé de bout en bout.
- **1 image OG 1200×630 par défaut** pour le blog (statique, réutilisable) — pour que les dimensions OG déclarées correspondent à l'image **réellement servie** (sinon preview social cassée).

### Hors scope (assumé)
- **Digital PR / backlinks / guest posts** → géré par Mateo, en parallèle. **Nécessaire** pour le head term mais pas un livrable du blog.
- **Mini-tools** (calculateurs, checkers…) → chantier séparé de Mateo.
- **Les 12 autres articles du cluster + les 5 drafts Mateo** → backlog (§9).
- **Version EN** du blog → itération ultérieure (`/en/blog/`).
- Validation des volumes sur outil payant → étape pré-production recommandée, hors build.
- **Images OG personnalisées par article** → follow-up (via `seo-image-gen` ou design). v1 sert l'OG 1200×630 **par défaut** du blog pour tous les articles.

---

## 4. Architecture technique

### Stack & dépendances
- **Astro 6** Content Collections via **Content Layer API** (`glob` loader).
- **`@astrojs/mdx`** à ajouter (`npx astro add mdx`) — permet des composants dans les articles (CTA, callouts).
- **`@astrojs/rss`** à ajouter (`npm i @astrojs/rss`) — flux RSS.
- **`@tailwindcss/typography`** : **déjà installé** → classes `prose` pour le corps d'article.
- Aucune dépendance React nouvelle. Le `Header` reste l'island existant.

### Arborescence
```
src/
  content.config.ts                       # collection `blog` (schema Zod)
  content/blog/
    reddit-seo.mdx                         # article phare (slug = reddit-seo)
  data/
    authors.ts                             # registre auteurs (Mateo)
  layouts/
    BlogPost.astro                         # layout article (compose Layout.astro)
  components/blog/
    BlogCard.astro                         # carte article (hub)
    AuthorBio.astro                        # bloc auteur (E-E-A-T)
    ArticleCTA.astro                       # CTA contextuel → home/audit
    PostMeta.astro                         # fil d'ariane + date + temps de lecture
    Prose.astro                            # wrapper `prose` (styles + overrides liens)
  pages/blog/
    index.astro                            # hub /blog (listing)
    [...slug].astro                        # route article (getStaticPaths)
  pages/
    rss.xml.ts                             # flux RSS
```
Fichiers modifiés (existants) : `src/layouts/Layout.astro` (§6.3), `astro.config.mjs` (intégration mdx + serialize sitemap §7.3), `src/components/landing/Header.*` (lien nav §7.4).

---

## 5. Collection `blog` (`src/content.config.ts`)

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),                 // <title> SEO
      description: z.string().min(110).max(165), // meta description
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('mateo'),       // clé dans authors.ts
      heroImage: image().optional(),
      ogImage: z.string().optional(),            // chemin 1200×630
      tags: z.array(z.string()).default([]),
      cluster: z
        .enum(['organique', 'ads', 'subreddits', 'b2b-saas', 'reputation-geo'])
        .optional(),
      hub: z.enum(['home', 'agence-geo']).default('home'), // page commerciale supportée
      targetKeyword: z.string(),
      secondaryKeywords: z.array(z.string()).default([]),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      draft: z.boolean().default(false),         // exclu du build si true
    }),
});

export const collections = { blog };
```

- **`hub`** pilote la cible du maillage interne (CTA + ancres) : `home` pour les spokes Reddit, `agence-geo` pour les spokes GEO.
- **`faq`** alimente une section FAQ **visible** ET le schema `FAQPage` (jamais l'un sans l'autre — cf. garde-fou audit).
- La validation Zod au build = garde-fou contre les articles mal formés. `draft: true` → exclu via filtre `getCollection`.

### `src/data/authors.ts`
```ts
export const authors = {
  mateo: {
    name: 'Matéo Drouillard',
    role: "Fondateur d'UpvotePartners",
    bio: '…(2-3 phrases : expérience Reddit/GEO, ce qu'il a construit, pourquoi crédible)…',
    avatar: '/* réutiliser src/assets/mateo-avatar.webp */',
    sameAs: ['https://x.com/mateodr_', 'https://www.linkedin.com/in/mateodrouillard/'],
  },
} as const;
```
Réutilise l'avatar existant (`@/assets/mateo-avatar.webp`, déjà importé dans `agence-geo.astro`).

---

## 6. Layout, composants & SEO par article

### 6.1 `BlogPost.astro`
Compose `Layout.astro` et structure l'article :
- `Header client:load` (island existant) + fil d'ariane (`PostMeta`).
- `<h1>` = titre article — **sans** l'animation `opacity:0` d'`AnimatedSection` (préserve le LCP, cf. audit).
- Corps : `<slot />` dans `Prose.astro` (`prose` typography).
- Section **FAQ visible** (si `faq` non vide).
- `AuthorBio` (Mateo) → signal E-E-A-T.
- `ArticleCTA` → audit gratuit / page commerciale selon `hub`.
- Articles liés (même `cluster`).
- `Footer`.

Props passées à `Layout` : `title`, `description`, `canonical = https://upvotepartners.com/blog/<slug>`, `lang="fr"` (**pas** d'`alternateUrl` → aucun hreflang `/en` fantôme), `ogImage` (1200×630), `ogType="article"`, `orgSchema={false}`.

### 6.2 Schema (via `<slot name="head">`)
Pattern identique aux pages existantes (`<script type="application/ld+json" set:html={JSON.stringify(...)}>`).
- **`BlogPosting`** : `headline`, `description`, `author` (Person = Mateo + `sameAs`), `publisher` (Organization UpvotePartners + logo), `datePublished`/`dateModified`, `image`, `mainEntityOfPage`.
- **`BreadcrumbList`** : Accueil › Blog › Article.
- **`FAQPage`** : **uniquement si** la FAQ est rendue visible (sinon on rejoue l'erreur « schema sans contenu » de l'audit).

### 6.3 Ajustements `Layout.astro` (rétro-compatibles)
Le `Layout` émet aujourd'hui `ProfessionalService` + `aggregateRating` 5/5 **globalement** (problème #8 de l'audit). Un article ne doit pas porter cette note. On ajoute 3 props, **défauts = comportement actuel** (rien ne casse ailleurs) :

| Prop | Défaut | Blog passe |
|---|---|---|
| `orgSchema` | `true` | `false` (l'article n'émet plus `ProfessionalService`/`aggregateRating`) |
| `ogType` | `'website'` | `'article'` |
| `ogImageWidth` / `ogImageHeight` | `'512'` / `'512'` | `'1200'` / `'630'` |

→ Le bloc JSON-LD global est wrappé dans `{orgSchema && (…)}` ; les meta `og:type` et `og:image:width/height` deviennent paramétrées.

> ⚠️ **Cohérence dimensions OG** : ne déclarer 1200×630 que si l'image **réellement servie** l'est. v1 sert l'OG 1200×630 par défaut du blog (§3) → cohérent. Ne **jamais** déclarer 1200×630 en servant le logo 512 (preview sociale cassée).

### 6.4 Maillage interne (matrice cluster)
- **Spoke → home** : *obligatoire*, in-body, ancre = variante de « agence reddit » / « marketing reddit » (jamais « cliquez ici »). Garanti par `ArticleCTA` + au moins 1 lien dans le corps.
- **Spoke → /agence-geo** : si pertinent (passage SEO/IA).
- **Intra-cluster** : 2-3 liens vers articles frères (section « articles liés » + in-body quand publiés).
- **Hub → spokes** : la page `/blog` liste tous les articles (≥1 lien entrant chacun → pas d'orphelin).

---

## 7. Pages, routing, RSS, sitemap, nav

### 7.1 Hub `/blog` (`pages/blog/index.astro`)
Listing des articles (cartes `BlogCard`, tri par `pubDate` desc, exclut `draft`). Schema `CollectionPage` + `BreadcrumbList`. **Volontairement non optimisé sur « marketing reddit »** : le sous-agent recommande de garder ce head sur la home → évite l'auto-cannibalisation. Rôle = hub de navigation + maillage.

### 7.2 Article `/blog/[...slug]` (`pages/blog/[...slug].astro`)
`getStaticPaths` depuis `getCollection('blog')` (filtre `draft` hors prod). Rendu via `<Content />` dans `BlogPost.astro`. `trailingSlash: 'never'` (config existante).

### 7.3 RSS + sitemap
- `pages/rss.xml.ts` via `@astrojs/rss` + `getCollection('blog')` → `/rss.xml`. Lien `<link rel="alternate" type="application/rss+xml">` dans le `<head>`.
- Sitemap : `/blog/*` déjà inclus (le filtre `astro.config.mjs` n'exclut que `/social` et `/partners`).
- 🔴 **`serialize` — modif critique d'un fichier partagé.** Le `serialize` actuel (`astro.config.mjs`) fabrique **inconditionnellement** des alternates `fr/en/x-default` pour CHAQUE URL. Sans garde, `/blog/reddit-seo` émettrait un hreflang vers `https://upvotepartners.com/en/blog/reddit-seo` **inexistant** → hreflang cassé sur tout le blog. **Insérer un court-circuit AVANT le bloc existant**, juste après le calcul du `url` normalisé :
  ```js
  // blog = FR-only : pas d'alternate /en
  if (url.includes('/blog')) {
    item.links = [{ lang: 'fr', url }]; // (ou ne pas définir item.links du tout)
    return item;
  }
  ```
  Ne pas toucher au reste du `serialize` (les pages bilingues gardent leurs paires). **Test dédié obligatoire** (§11) — pas juste « le build passe ».

### 7.4 Navigation
Ajouter un lien **« Blog »** (→ `/blog`) dans le `Header` (`src/components/landing/Header`) + la string i18n correspondante (FR/EN = « Blog »).

---

## 8. Article phare — « Reddit = SEO indirect »

- **Source** : adaptation on-site du draft Mateo *« Tout le monde pense que Reddit sert juste à générer du traffic / Reddit = une des meilleures stratégies SEO indirectes »* (`Doc partagé avec Mateo`, Article 5).
- **Slug** : `/blog/reddit-seo` · **Template** : explainer/guide · **Longueur** : ~1800-2200 mots.
- **Mot-clé primaire** : `reddit seo` / `reddit pour le seo`. **Secondaires** : liens nofollow Reddit, brand mentions, domain authority, trafic comportemental, ranking par association.
- **`hub: home`** → maille vers `/` (ancres « agence reddit »/« marketing reddit ») + 1 lien vers `/agence-geo` (passage citabilité IA).
- **Structure** (reprend les 5 signaux de Mateo) : intro (mythe du nofollow) → Signal 1 trafic comportemental → Signal 2 brand mentions/entity authority → Signal 3 Domain Authority → Signal 4 crawl rate → Signal 5 ranking par association → erreurs à éviter → conclusion + `ArticleCTA`.
- **GEO/citabilité** (dogfooding) : H2/H3 en questions, réponses définitionnelles concises en tête de section, listes/tableaux, **section FAQ visible** (+ `FAQPage`).
- **E-E-A-T** : `AuthorBio` Mateo + ton first-hand (expérience agence).

### Garde-fou stats (s'applique à TOUT le blog)
Plusieurs drafts Mateo contiennent des chiffres **invérifiables/inventés** (« données OpenAI leakées », case study chiffré, « DA 28→38 client anonyme »). Pour le blog : **uniquement des chiffres réels, sourcés, ou explicitement présentés comme illustratifs**. **Aucun case study fictif présenté comme réel** (risque E-E-A-T + pub mensongère, déjà épinglé par l'audit).
Dans l'article phare : garder les sources **réelles** (DA Reddit ≈ 91, brevets Bill Slawski sur les *unlinked mentions*, Google *Page Experience* 2021, doc *crawl budget*) ; **reformuler** la progression « DA 28→38 » en exemple **illustratif** explicitement étiqueté (ou la retirer).

---

## 9. Backlog & cadence (post-v1)

Backlog initial = **cluster Reddit (13 spokes, `docs/seo/cluster-plan.json`)** + **5 drafts Mateo** (`Doc partagé avec Mateo`).

| Source | Hub cible | Note |
|---|---|---|
| Cluster A-D (organique, ads, subreddits, B2B/SaaS) | `home` | Priorité (sert « agence reddit ») |
| Cluster E (réputation, SEO-GEO) | `home`/`agence-geo` | Mixte |
| Draft Mateo #4 (Reddit ↓ Google Ads), #5 (Reddit SEO indirect) | `home` | Orientés Reddit |
| Draft Mateo #1, #2, #3 (piliers GEO, 50% trafic LLM, SEO≠GEO) | `agence-geo` | Excellents pour citabilité IA ; s'intercalent après le démarrage Reddit |

Cadence cible : **2 articles/semaine**, puis accélérer. Chaque nouvel article = 1 `.mdx` (le moteur ne change plus). Le maillage frère se complète au fil des publications.

> ⚠️ **Gate avant montée en cadence** : ne **pas** lancer la production de masse du cluster (rythme 2/sem) sans avoir **validé les volumes/KD sur un vrai outil** (Ahrefs/SEMrush) — les chiffres actuels sont des estimations DuckDuckGo. Pour la v1 (moteur + 1 article), le risque est nul.

---

## 10. Garde-fous / anti-régressions audit

- Auteur nommé **réel** (≠ témoignage « Mateo » anonyme épinglé par l'audit).
- **Pas de note 5/5** sur les articles (`orgSchema={false}`).
- `FAQPage` schema **⇔** FAQ visible rendue.
- H1 d'article **sans** animation `opacity:0` (préserve le LCP).
- OG **1200×630** (et non 512×512).
- Stats : voir §8 (réel / sourcé / illustratif).
- Crawlabilité : vérifier que `/blog` n'est pas bloqué dans `robots.txt` (et idéalement crawlers IA autorisés — recoupe un item d'audit séparé).

---

## 11. Critères de validation

> Les points 🔴 portent sur des **fichiers partagés** (`Layout.astro`, sitemap) : ils exigent un **test dédié**, pas seulement « `npm run build` passe ».

1. `npm run build` passe ; `/blog` **et** `/blog/reddit-seo` sont générés (HTML statique, visible aux crawlers).
2. Schema article (Rich Results Test) : `BlogPosting`, `BreadcrumbList`, `FAQPage` présents ; **absence** de `ProfessionalService`/`aggregateRating` sur l'article.
3. 🔴 **Non-régression `Layout.astro`** : après ajout des props, vérifier dans le HTML buildé que `/`, `/agence-geo`, `/social`, `/partners`, `/404` **buildent toujours** ET **émettent toujours** `ProfessionalService` (+ `aggregateRating` là où c'était le cas). Les défauts de props doivent reproduire le comportement actuel à l'identique.
4. 🔴 **Test sitemap dédié** : dans le `sitemap-*.xml` généré, les entrées `/blog/*` n'ont **aucun** `<xhtml:link hreflang="en">` vers `/en/blog/...` ; les pages bilingues existantes (`/`, `/agence-geo`) gardent **intactes** leurs paires `fr/en/x-default`.
5. Pas de régression CWV (Lighthouse) — en particulier LCP de l'article (H1 sans `opacity:0`).
6. `npm run lint` passe.
7. RSS `/rss.xml` valide (XML bien formé ; items = articles non-`draft`).
8. Test vitest **léger** : `getCollection('blog')` charge et l'entrée `reddit-seo` a ses champs requis (le **build** reste la validation principale).

---

## 12. Références

- Cluster & maillage : `docs/seo/cluster-plan.json` + `docs/seo/cluster-plan.md`
- Matière first-hand : `~/Desktop/Obsidian/reddit/` (`Doc partagé avec Mateo`, `Appel avec Mateo`, `Strategie SEO`)
- Audit SEO : `MEMORY.md`, `seo-audit-details.md`
- Conventions code : `CLAUDE.md`, `src/layouts/Layout.astro`, `src/pages/agence-geo.astro`

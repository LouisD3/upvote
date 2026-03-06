

## Mise à jour des URLs canonical et meta dans index.html

Le fichier `index.html` contient actuellement plusieurs références à `https://redditpartners.lovable.app`. Il faut les remplacer par `https://redditpartners.com`.

### Changements dans `index.html`

Lignes à modifier :
- `<link rel="canonical">` → `https://redditpartners.com`
- `<meta property="og:url">` → `https://redditpartners.com`
- `<meta name="twitter:url">` → `https://redditpartners.com`
- JSON-LD `"url"` → `https://redditpartners.com`

Aucun autre fichier n'est concerné. Après publication, Google Search Console indexera le bon domaine.


// On importe le zod d'Astro (`astro/zod`) — la MÊME instance que `astro:content`, sinon le
// `.extend({ heroImage: image() })` côté collection mélange deux instances Zod et casse le build.
// `astro/zod` est un sous-chemin public résoluble hors runtime Astro → utilisable aussi en vitest.
import { z } from 'astro/zod';

// Schema des champs frontmatter d'un article de blog, réutilisé par content.config.ts (collection)
// ET par les tests vitest. `heroImage` (qui requiert le helper `image()`) est ajouté dans content.config.ts.
export const blogFrontmatterSchema = z.object({
  title: z.string().max(70), // <title> SEO
  description: z.string().min(110).max(165), // meta description
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('mateo'), // clé dans authors.ts
  ogImage: z.string().optional(), // chemin 1200×630 servi statiquement
  tags: z.array(z.string()).default([]),
  cluster: z
    .enum(['organique', 'ads', 'subreddits', 'b2b-saas', 'reputation-geo'])
    .optional(),
  // page commerciale supportée : pilote la cible du maillage interne
  hub: z.enum(['home', 'agence-geo']).default('home'),
  targetKeyword: z.string(),
  secondaryKeywords: z.array(z.string()).default([]),
  // FAQ : alimente une section visible ET le schema FAQPage (jamais l'un sans l'autre)
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  draft: z.boolean().default(false), // exclu du build si true
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

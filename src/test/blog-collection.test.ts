import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { blogFrontmatterSchema } from "@/lib/blog-schema";

// Valide la collection `blog` via son vrai schema Zod (content.config.ts réutilise ce même
// `blogFrontmatterSchema`). Le getCollection() runtime d'Astro est exercé par `npm run build`
// (les pages /blog l'appellent) — incompatible avec Vitest, donc on teste ici la source de vérité.
const BLOG_DIR = resolve(process.cwd(), "src/content/blog");

function frontmatter(file: string): unknown {
  const raw = readFileSync(resolve(BLOG_DIR, file), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`Pas de frontmatter dans ${file}`);
  return parseYaml(m[1]);
}

describe("collection 'blog'", () => {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  it("contient au moins un article", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  it("tous les articles respectent le schema de la collection", () => {
    for (const file of files) {
      const res = blogFrontmatterSchema.safeParse(frontmatter(file));
      expect(res.success, `${file} doit valider le schema blog`).toBe(true);
    }
  });

  it("l'article reddit-seo a tous ses champs requis", () => {
    expect(files).toContain("reddit-seo.mdx");
    const data = blogFrontmatterSchema.parse(frontmatter("reddit-seo.mdx"));
    expect(data.title.length).toBeGreaterThan(0);
    expect(data.title.length).toBeLessThanOrEqual(70);
    expect(data.description.length).toBeGreaterThanOrEqual(110);
    expect(data.description.length).toBeLessThanOrEqual(165);
    expect(data.pubDate).toBeInstanceOf(Date);
    expect(data.targetKeyword.length).toBeGreaterThan(0);
    expect(data.hub).toBe("home");
    expect(data.draft).toBe(false);
    expect(data.faq.length).toBeGreaterThan(0);
  });
});

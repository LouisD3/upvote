import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogFrontmatterSchema } from '@/lib/blog-schema';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  // Le schema partagé (zod pur) + heroImage qui requiert le helper `image()` d'Astro.
  // La validation Zod au build = garde-fou contre les articles mal formés.
  schema: ({ image }) => blogFrontmatterSchema.extend({ heroImage: image().optional() }),
});

export const collections = { blog };

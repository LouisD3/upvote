import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://upvotepartners.com',
  trailingSlash: 'never',
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/social') && !page.includes('/partners'),
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          en: 'en',
        },
      },
      serialize(item) {
        // Normalize: strip trailing slash for consistency with trailingSlash: 'never'
        const url = item.url.replace(/\/$/, '') || 'https://upvotepartners.com';
        item.url = url;

        // Blog = FR-only (v1) : aucun alternate hreflang. On NE définit pas item.links
        // et on neutralise tout lien auto-généré par l'option i18n (sinon le sitemap
        // pointerait vers https://upvotepartners.com/en/blog/... qui n'existe pas → hreflang cassé).
        if (url.includes('/blog')) {
          delete item.links;
          return item;
        }

        const isEn = url.includes('/en');
        const frUrl = isEn ? (url.replace('/en', '') || 'https://upvotepartners.com') : url;
        const enUrl = isEn ? url : url.replace('https://upvotepartners.com', 'https://upvotepartners.com/en');

        item.links = [
          { lang: 'fr', url: frUrl },
          { lang: 'en', url: enUrl },
          { lang: 'x-default', url: enUrl },
        ];
        return item;
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});

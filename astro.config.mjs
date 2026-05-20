import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://upvotepartners.com',
  trailingSlash: 'never',
  integrations: [
    react(),
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

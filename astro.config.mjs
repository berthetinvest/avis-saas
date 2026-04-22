// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Remplacer par le vrai domaine une fois acquis.
// Puis lancer : npm run build && vérifier sitemap.xml et robots.txt.
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://avis-saas.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: {
    format: 'directory',
    assets: '_assets',
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-light' },
      remarkPlugins: [],
      rehypePlugins: [],
      gfm: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
    }),
    tailwind({
      applyBaseStyles: false, // on gère les styles de base dans globals.css
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['reading-time'],
    },
  },
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteUrl = import.meta.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || 'https://gibraltarforsale.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

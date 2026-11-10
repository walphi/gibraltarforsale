import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// The custom .com domain was not resolving during the 2026-11-09 live review.
// Switch this constant only after the custom domain is verified in Netlify/DNS.
const siteUrl = 'https://gibraltarforsale.netlify.app';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
});

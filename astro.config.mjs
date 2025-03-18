import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://8wada.github.io/portfolio',
  base: '/portfolio/',
  outDir: 'dist',
});
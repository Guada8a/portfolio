import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://guada8a.github.io/portfolio', // Reemplaza con la URL de tu GitHub Pages
  base: '/portfolio/', // Reemplaza con el nombre de tu repositorio
  outDir: 'dist', // Directorio de salida (puede ser cambiado según tu preferencia)
});
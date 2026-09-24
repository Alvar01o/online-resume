import { defineConfig } from 'astro/config';

// Sitio 100% estático. Cambia `site` por tu dominio final (para sitemap/OG).
export default defineConfig({
  site: 'https://alvaro-mercado.vercel.app',
  output: 'static',
  trailingSlash: 'always',
});

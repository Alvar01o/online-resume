# Alvaro Mercado — Portfolio

Sitio estático bilingüe (`/es/` y `/en/`) hecho con [Astro](https://astro.build). Sin backend.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
```

## Editar contenido
Todo el texto (ES/EN) está en `src/i18n/content.ts`. Estilos en `src/styles/global.css`.
La foto está en `public/img/alvaro.jpg` y los CV en `public/cv/`.

## Deploy en Vercel
1. Sube el repo a GitHub.
2. En Vercel: *Add New → Project* → importa el repo (detecta Astro solo; build `npm run build`, output `dist`).
3. Actualiza `site` en `astro.config.mjs` con tu dominio final (canonical/hreflang/OG).

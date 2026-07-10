# computerscience.mn

Static Vue 3 + Vite rebuild of the Codercub / computerscience.mn site (previously WordPress).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Outputs a static site to `dist/`, deployable to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Structure

- `src/views/` — one component per route (About, Admissions, Programs, Hour of Code, course pages)
- `src/components/` — shared layout (header, footer) and content blocks (testimonials, curriculum tables)
- `src/data/` — editable content: contact info, form links, testimonials
- `src/assets/` — images, downloaded from the original WordPress media library

Only pages reachable from the live site's navigation were ported. The old install also carried a lot of
unused WooCommerce/demo-theme content (shop, orphaned blog posts, filler pages) that was intentionally
left behind — see the site rebuild discussion for details.

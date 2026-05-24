# UI foundation

## Tailwind CSS v4

- `tailwindcss@4` + `@tailwindcss/postcss` in PostCSS ([`postcss.config.js`](../postcss.config.js))
- Removed `tailwind.config.js` and `autoprefixer`
- Theme tokens in [`src/index.css`](../src/index.css): `@theme inline` maps shadcn CSS variables to utilities
- `html` uses `class="dark"` for dark-first (violet primary on zinc background)

## shadcn/ui

- Initialized via `npx shadcn@latest init` ([`components.json`](../components.json), style `base-nova`)
- Components: `button`, `input`, `label`, `textarea` in [`src/components/ui/`](../src/components/ui/)
- Utilities: [`src/lib/utils.ts`](../src/lib/utils.ts) (`cn()`)
- `shadcn` CLI package is a **devDependency** (theme tooling only; no runtime `tw-animate-css`)

## Layout & typography classes

Defined in `src/index.css` `@layer components`:

| Class | Use |
|-------|-----|
| `page-container` | Horizontal padding + max width |
| `text-lead` | Hero intro line |
| `heading-display` / `heading-display-accent` | Home name block |
| `text-role` | Job title |
| `heading-page` | Page / section titles |
| `text-body` | Muted body copy |
| `nav-link-active` / `nav-link-inactive` | Header navigation |

## Removed duplicates

Deleted legacy form wrappers; contact form uses shadcn primitives with stacked labels (`htmlFor` + `id`).

## Fonts

Mulish via `next/font/google` in [`src/app/layout.tsx`](../src/app/layout.tsx).

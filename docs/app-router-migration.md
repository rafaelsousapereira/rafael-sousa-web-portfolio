# App Router migration

## Routes

| Path | File | Rendering |
|------|------|-----------|
| `/` | `src/app/page.tsx` | Server |
| `/about` | `src/app/about/page.tsx` | Server |
| `/contact` | `src/app/contact/page.tsx` | Server wrapper → `contact-form.tsx` (client) |
| 404 | `src/app/not-found.tsx` | Server |

Shared shell: `src/app/layout.tsx` (Header + children).

## Client boundaries (`"use client"`)

- `components/header` — mobile menu state
- `components/nav-link` — active route styles (`usePathname`)
- `components/contact-form` — form + EmailJS

## Removed

- `react-router-dom`
- `src/app.tsx`, `src/app/[[...slug]]/*`, `src/app/pages/*`
- `vercel.json` SPA rewrites (real static HTML per route)

## Path aliases

`@/*` → `src/*` in `tsconfig.json`.

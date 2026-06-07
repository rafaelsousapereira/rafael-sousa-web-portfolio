# Phase 1 — Migration Report

Audit date: 2026-06-07

References: [01-product.md](./01-product.md), [02-architecture.md](./02-architecture.md), [03-execution-plan.md](./03-execution-plan.md)

---

## Current State

| Area | Current | Target (SDD) |
|------|---------|--------------|
| Framework | Next.js 15 App Router, `output: 'export'` | Next.js 15 (SDD and engineering-guidelines) |
| Routing | Multi-page: `/`, `/about`, `/contact` | Single-page sections (Hero → Footer) |
| Styling | Tailwind CSS v4, shadcn/ui primitives | Tailwind v4 + custom design system |
| i18n | pt-BR only (hardcoded) | pt-BR + en-US via i18next |
| Contact | EmailJS, no Subject field | Resend via ContactService |
| Analytics | Google Analytics (`@next/third-parties`) | Plausible (abstracted) |
| Architecture | Flat `src/components`, `src/data` | Clean Architecture layers |
| Content | Full-stack positioning | Backend Engineer focus |
| Sections | Hero (home), About, Contact | + Experience timeline, Projects, Articles |
| Tests | None | Vitest |

### Existing file map

```
src/
├── app/                    # Next.js routes (page, about, contact, layout, not-found)
├── components/             # header, footer, nav, ui/*, contact-form, list-experience
├── data/infoPages.ts       # Static content (person, about, experience, social)
├── index.css               # Tailwind v4 @theme + component classes
└── lib/utils.ts            # cn() helper
```

---

## Stack Decision Required

[02-architecture.md](./02-architecture.md) specifies Next.js 15 (App Router). [engineering-guidelines.md](../engineering-guidelines.md) and the current codebase use Next.js 15 static export.

**Decision:** Continue with Next.js 15 App Router and perform an in-place refactor toward Clean Architecture folder layout under `src/`.

---

## Reusable Assets

| Asset | Path | Reuse strategy |
|-------|------|----------------|
| Theme tokens (partial) | `src/index.css` | Map shadcn vars → SDD tokens (background, foreground, surface, border, primary, secondary, muted) in Phase 2 |
| Layout utility classes | `src/index.css` (`page-container`, `heading-*`, `text-*`) | Migrate to design system Section/Container in Phase 2–3 |
| `cn()` helper | `src/lib/utils.ts` | Move to `src/shared/lib/utils.ts` |
| shadcn Button | `src/components/ui/button.tsx` | Adapt as base for design system Button in Phase 2 |
| shadcn Input, Label, Textarea | `src/components/ui/*` | Reuse in contact form until Phase 6 redesign |
| Form validation pattern | `src/components/contact-form.tsx` | RHF + Zod patterns reusable; swap EmailJS → Resend in Phase 6 |
| Social links + copyright | `src/components/footer/index.tsx` | Content/logic reusable; restyle in Phase 3 |
| Mobile menu pattern | `src/components/header/index.tsx` | Behavior reusable; simplify to `<details>` or keep client boundary in Phase 3 |
| Social URLs | `src/data/infoPages.ts` | Extract to domain entities / content facade |
| Lucide icons | Used across components | Keep |
| PostCSS + Tailwind v4 | `postcss.config.js`, `src/index.css` | Keep config; extend tokens in Phase 2 |

---

## Obsolete / Replace

| Item | Path / package | Reason | Phase |
|------|----------------|--------|-------|
| Multi-page routing | `src/app/about/`, `src/app/contact/` | Single-page section layout per product spec | 3–4 |
| Google Analytics | `@next/third-parties`, `layout.tsx` GA | Plausible per SDD | 7 |
| EmailJS | `@emailjs/browser`, env vars in `.env.example` | Resend per SDD | 6 |
| react-toastify | `contact-form.tsx` | Inline status per engineering guidelines | 6 |
| Full-stack copy | `src/data/infoPages.ts` | Backend Engineer positioning per product spec | 4 |
| Experience data model | `infoPages.ts` + `list-experience.tsx` | Buggy nested maps; needs Timeline + Capgemini/Mobiis entries | 4 |
| Missing Subject field | `contact-form.tsx` | Required per product spec | 6 |
| Missing sections | — | Projects, Articles not implemented | 4 |
| Flat folder structure | `src/components`, `src/data` | Clean Architecture layers per SDD | 2+ |
| shadcn init artifacts | `components.json` | Custom design system replaces shadcn scope | 2 |
| Legacy migration docs | `docs/app-router-migration.md`, `docs/runtime-migration-notes.md` | Historical; superseded by SDD | — |

---

## Content Gaps (Product vs Current)

| Requirement | Status |
|-------------|--------|
| Hero: Rafael Sousa Pereira, Backend Engineer | Partial — name OK; role is "Desenvolvedor Full-stack" |
| Hero actions: View Projects, Contact Me | Partial — only "Saiba Mais" → /about |
| Experience: keep existing + Capgemini + Mobiis | Missing new entries; list component broken |
| Article: DTOs with Java Records (LinkedIn) | Not implemented |
| Contact: Name, Email, Subject, Message | Missing Subject |
| pt-BR + en-US | pt-BR only |
| Plausible analytics | GA instead |
| Bento grid layout | Standard two-column hero only |

---

## Target Folder Structure (Phases 2+)

```
src/
├── app/                         # Next.js shell (keep)
├── domain/                      # entities, value objects
├── application/                 # use cases (ContactService interface)
├── infrastructure/              # ResendEmailProvider, PlausibleProvider
├── presentation/                # sections, design system components
│   └── components/
│       ├── ui/                  # Button, Card, Badge, Container, Section, Timeline, etc.
│       └── sections/            # Hero, About, Experience, Projects, Articles, Contact
├── shared/                      # utils, types, constants
└── locales/                     # pt-BR, en-US (Phase 5)
```

---

## Phase-by-Phase File Inventory

### Phase 2 — Design System

**Create**

- `src/presentation/components/ui/button.tsx`
- `src/presentation/components/ui/card.tsx`
- `src/presentation/components/ui/badge.tsx`
- `src/presentation/components/ui/container.tsx`
- `src/presentation/components/ui/section.tsx`
- `src/shared/lib/utils.ts` (relocate from `src/lib/utils.ts`)

**Modify**

- `src/index.css` — SDD theme tokens
- `tsconfig.json` — path aliases for new layers

**Delete**

- `src/components/ui/button.tsx` (after migration)
- `components.json` (optional, after design system stable)

### Phase 3 — Layout

**Create**

- `src/presentation/components/layout/site-header.tsx`
- `src/presentation/components/layout/site-footer.tsx`
- `src/presentation/components/sections/hero.tsx`
- `src/app/page.tsx` (single-page shell with section grid)

**Modify**

- `src/app/layout.tsx` — import new layout components
- `src/index.css` — bento grid utilities

**Delete**

- `src/components/header/index.tsx`
- `src/components/footer/index.tsx`
- `src/components/navbar-routes.tsx`
- `src/components/nav-link.tsx`
- `src/components/image-home.tsx`

### Phase 4 — Content Sections

**Create**

- `src/domain/entities/experience.ts`
- `src/domain/entities/project.ts`
- `src/domain/entities/article.ts`
- `src/shared/content/site-content.ts`
- `src/presentation/components/ui/timeline.tsx`
- `src/presentation/components/ui/project-card.tsx`
- `src/presentation/components/ui/article-card.tsx`
- `src/presentation/components/sections/about.tsx`
- `src/presentation/components/sections/experience.tsx`
- `src/presentation/components/sections/projects.tsx`
- `src/presentation/components/sections/articles.tsx`
- `src/presentation/components/sections/contact.tsx`

**Modify**

- `src/app/page.tsx` — compose all sections
- `src/data/infoPages.ts` — migrate to `site-content.ts` with updated copy

**Delete**

- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/list-experience.tsx`
- `src/data/infoPages.ts` (after migration)

### Phase 5 — Internationalization

**Create**

- `src/locales/pt-BR/common.json`
- `src/locales/en-US/common.json`
- `src/shared/i18n/config.ts`
- `src/presentation/components/ui/language-switcher.tsx`

**Modify**

- `src/app/layout.tsx` — i18n provider
- All section components — replace hardcoded strings

### Phase 6 — Contact Form

**Create**

- `src/domain/entities/contact-message.ts`
- `src/application/services/contact-service.ts`
- `src/infrastructure/email/resend-email-provider.ts`
- `src/presentation/components/sections/contact-form.tsx`

**Modify**

- `.env.example` — Resend keys, remove EmailJS
- `next.config.mjs` — remove EmailJS env mapping

**Delete**

- `src/components/contact-form.tsx`
- `@emailjs/browser` dependency
- `react-toastify` dependency

### Phase 7 — Analytics

**Create**

- `src/application/ports/analytics-provider.ts`
- `src/infrastructure/analytics/plausible-provider.ts`

**Modify**

- `src/app/layout.tsx` — replace GA with Plausible abstraction

**Delete**

- `@next/third-parties` GA usage
- `NEXT_PUBLIC_GA_TRACKING` from `.env.example`

### Phase 8 — SEO

**Create**

- `public/robots.txt`
- `public/sitemap.xml` (or generate at build)
- `src/shared/seo/schema.ts`

**Modify**

- `src/app/layout.tsx` — Open Graph, meta tags
- `src/app/page.tsx` — JSON-LD Person schema

### Phase 9 — Polish

**Create**

- `vitest.config.ts`
- `src/**/*.test.ts` (targeted tests for domain/application)

**Modify**

- `src/index.css` — `prefers-reduced-motion`
- Section components — Framer Motion (minimal, per SDD)
- `package.json` — add framer-motion, vitest

---

## Risks

| Risk | Mitigation |
|------|------------|
| Vite vs Next.js conflict | Resolve before Phase 2 scaffold |
| Static export + Resend | Use API route or serverless function; may require dropping `output: 'export'` for contact |
| shadcn → custom design system | Migrate incrementally in Phase 2; keep old ui/ until parity |
| i18n + static export | Use build-time locale bundles or client i18next |
| Experience data migration | Define typed entities first; single source in `site-content.ts` |

---

## Phase 1 Outcome

Audit complete. No application code changed. Proceed to Phase 2 after stack decision (Next.js in-place vs Vite greenfield).

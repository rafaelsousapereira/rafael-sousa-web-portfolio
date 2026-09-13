# Architecture Specification

This document describes the **implemented** architecture. Historical SDD drafts
that mention i18next, Resend or Google Analytics are not the source of truth.

## Technology Stack

- React 19
- TypeScript
- Next.js 15 (App Router, `output: 'export'`)
- Tailwind CSS v4
- shadcn/ui (Base UI)
- Custom i18n (`src/shared/content`)
- React Hook Form
- Zod
- EmailJS (client contact, isolated in infrastructure)
- Plausible (optional)
- Vitest + Testing Library

---

## Architectural Style

Clean Architecture, kept pragmatic for a static portfolio.

Layers:

- Domain
- Application
- Infrastructure
- Presentation
- Shared

Dependency direction:

```text
presentation → application → domain
infrastructure → application/domain
shared → cross-cutting utilities
```

---

## Folder Structure

```text
src/
├── app
├── domain
├── application
├── infrastructure
├── presentation
├── shared
└── components
```

---

## Internationalization

Custom dictionaries in `src/shared/content/locales.ts`.
Locales: `pt-BR` (default) and `en-US`.
Resolver: `src/shared/content/locale-resolver.ts`.

---

## Analytics

Provider: Plausible, behind `AnalyticsService`.
Script loads only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.

---

## Contact Architecture

```text
ContactForm
  → sendContactMessage (application)
  → ContactService
  → EmailJsContactService (infrastructure)
```

Static export has no backend. EmailJS public identifiers stay in `NEXT_PUBLIC_*`
variables. Private secrets must not be added to the frontend.

---

## Validation

React Hook Form + Zod. Fields: name, email, subject, message.

---

## Testing

Vitest + Testing Library. Coverage via `npm run test:coverage`.
CI: `.github/workflows/ci.yml`.

---

## Performance

Goals:

- Lighthouse > 95
- Accessibility > 95
- SEO > 95

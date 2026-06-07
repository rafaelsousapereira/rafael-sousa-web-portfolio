# Architecture Specification

## Technology Stack

- React 19
- TypeScript
 - Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion
- i18next
- React Hook Form
- Zod
- Resend
- Plausible

---

## Architectural Style

Clean Architecture

Layers:

- Domain
- Application
- Infrastructure
- Presentation
- Shared

---

## Folder Structure

src/

├── app
├── domain
├── application
├── infrastructure
├── presentation
├── shared

---

## Design System

Components:

- Button
- Card
- Badge
- Container
- Section
- Timeline
- ProjectCard
- ArticleCard

---

## Theme System

Tokens:

- background
- foreground
- surface
- border
- primary
- secondary
- muted

---

## Internationalization

Provider:
i18next

Structure:

locales/

├── pt-BR
└── en-US

---

## Analytics

Provider:
Plausible

Must be isolated through abstraction.

---

## Contact Architecture

Use:

ContactService

Implementation:

ResendEmailProvider

---

## Validation

React Hook Form

Zod

---

## Testing

Vitest

Optional:
Playwright

---

## Performance

Goals:

Lighthouse > 95

Accessibility > 95

SEO > 95
# Engineering Guidelines

## Objective

Refactor the current portfolio into a modern minimalist professional portfolio.

The focus is:
- simplicity
- performance
- accessibility
- maintainability
- mobile-first design

Avoid:
- overengineering
- unnecessary abstractions
- excessive animations
- complex state management
- premature optimization

## Tech Stack

Mandatory:
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui

Do NOT add:
- Redux
- Zustand
- GraphQL
- Microfrontends
- Complex backend
- Authentication
- Database
- CMS
- Heavy animation libraries
- i18next (the project uses a custom locale dictionary)
- Resend (incompatible with the current static export without a backend)
- Google Analytics

## Design Principles

- Minimalist
- Typography-first
- Clean spacing
- Subtle motion
- Dark mode first
- Mobile-first

## Accessibility

Mandatory:
- semantic HTML
- keyboard navigation
- aria-labels
- contrast accessibility
- prefers-reduced-motion

## Performance

Targets:
- Lighthouse 95+
- minimal client-side JS
- lazy loading where appropriate
- optimized images/fonts

## Security

Mandatory:
- no secrets exposed
- no API keys in frontend
- sanitize external links
- rel="noopener noreferrer"
- strict environment variable handling

## Architecture

Keep architecture simple and scalable.

Prefer:
- composition
- reusable UI primitives
- isolated sections

Avoid:
- deeply nested abstractions
- generic builders
- excessive patterns

## Code Style

- readable naming
- small focused components
- avoid premature abstractions
- avoid duplicated logic
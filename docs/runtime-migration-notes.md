# Runtime modernization (Next.js 15 + React 19)

## Dependency changes

| Package | Before | After |
|---------|--------|-------|
| `next` | ^14.2.5 | **15.5.9** |
| `react` / `react-dom` | ^18.2.0 | **^19.0.0** |
| `@next/third-parties` | ^14.2.5 | **15.5.9** (aligned with `next`) |
| `eslint` | ^8.57.0 | **^9.0.0** |
| `eslint-config-next` | 14.2.35 | **15.5.9** |
| `@types/react` / `@types/react-dom` | ^18 | **^19** |
| `@types/node` | ^20 | **^22** |
| `typescript` | ^5.2 | **^5.7** |

### Removed (redundant or conflicting with `eslint-config-next@15`)

- `@eslint/compat`, `@eslint/eslintrc`, `@eslint/js`, `globals`
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` (provided via `eslint-config-next`)
- `eslint-config-prettier`, `eslint-plugin-prettier`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

Run Prettier separately (`npx prettier --write .`); lint via `npm run lint` only.

### Minor bumps (behavior unchanged)

- `lucide-react`, `react-hook-form`, `zod`

## Breaking changes considered

| Next 15 / React 19 change | This repo |
|---------------------------|-----------|
| Async `params` / `searchParams` in pages & layouts | **N/A** — catch-all page does not read `params`; no code changes |
| React 19 as default peer | Compatible with existing client components |
| ESLint 9 flat config optional | Kept **`.eslintrc.json`**; `eslint-config-next@15` supports ESLint 9 with legacy config |
| `next lint` stricter TypeScript rules | Enabled via `next/typescript` in ESLint extends |
| `@typescript-eslint/no-empty-object-type` | Fixed: empty `interface X extends Y {}` → `type X = Y` in 8 components |
| `@typescript-eslint/no-unused-expressions` | Fixed: ternary side-effect in `header/index.tsx` → `if/else` |

`next lint` is deprecated in favor of the ESLint CLI in Next.js 16; kept as-is for this phase.

No routing, UI, or Tailwind changes in this phase.

## Verification

```bash
npm install
npm run lint
npm run build
npm start   # after build; serves static export in build/
```

## Out of scope (later phases)

- App Router migration (remove React Router)
- Tailwind CSS v4
- UI / shadcn refresh

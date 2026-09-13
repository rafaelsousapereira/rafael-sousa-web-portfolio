# Environment variables

All client-facing variables use the `NEXT_PUBLIC_` prefix and are embedded in
the production bundle. Treat them as public identifiers, not private secrets.

Never put a private API key, SMTP credential, or EmailJS private key in this
frontend. Static export (`output: 'export'`) has no server-side secret store.

## Required for the contact form

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_EMAILJS_USER_ID` | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

These values identify the public EmailJS client. Restrict allowed origins and
rate limits in the EmailJS dashboard.

## Production SEO

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, robots and JSON-LD |

Preferred in production. Local development falls back to `http://localhost:3000`.
On Vercel, if this variable is unset, the build uses
`VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` so canonical URLs are not
localhost. A production build with none of those values fails.

## Optional

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible site domain. If empty, analytics is not loaded |

## Local development

1. Copy [`.env.example`](../.env.example) to `.env.local`.
2. Fill in EmailJS public identifiers from your EmailJS account.
3. Optionally set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your Plausible domain.
4. Restart the dev server after changing env files.

`.env`, `.env.local`, `.env.development`, and `.env.production` are gitignored.
Only `.env.example` is tracked.

## Vercel deployment

Set the `NEXT_PUBLIC_*` variables in the Vercel project **Environment Variables**
UI for Production (and Preview if needed). Next.js inlines them at build time.
Set `NEXT_PUBLIC_SITE_URL` to the live origin when you have a custom domain;
otherwise Vercel’s platform URLs are used at build time.

Do **not** declare them in `next.config.mjs`'s `env` block — that would override
auto-inlining and force empty values into the bundle.

### Verifying the bundle

```bash
grep -ro "NEXT_PUBLIC_EMAILJS" build/static | head
```

If the keys are present, Next.js is inlining them. If they appear as empty
strings, check the hosting environment and trigger a new build.

## Security notes

- Rotate keys if they were ever committed to git.
- In EmailJS, enable domain restrictions and rate limiting.
- Never log form submissions in production.

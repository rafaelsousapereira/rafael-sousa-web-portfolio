# Environment variables

All client-facing variables use the `NEXT_PUBLIC_` prefix and are embedded in the production bundle. Do not put private secrets in these variables.

## Required variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_EMAILJS_USER_ID` | EmailJS public key for the contact form |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_GA_TRACKING` | Google Analytics measurement ID (e.g. `G-XXXXXXXX`) |

## Local development

1. Copy [`.env.example`](../.env.example) to `.env.local` (or `.env.development`).
2. Fill in values from your [EmailJS](https://www.emailjs.com/) and [Google Analytics](https://analytics.google.com/) accounts.
3. Restart the dev server after changing env files.

`.env`, `.env.local`, `.env.development`, and `.env.production` are gitignored. Only `.env.example` is tracked.

## Vercel deployment

Set the four `NEXT_PUBLIC_*` variables above in the Vercel project **Environment Variables** UI for Production (and Preview if needed).

Alternatively, you may use these names; [`next.config.mjs`](../next.config.mjs) maps them at build time:

| Vercel variable | Maps to |
|-----------------|---------|
| `NEXT_PUBLIC_VERCEL_ENV_EMAILJS_USER_ID` | `NEXT_PUBLIC_EMAILJS_USER_ID` |
| `NEXT_PUBLIC_VERCEL_ENV_EMAILJS_SERVICE_ID` | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` |
| `NEXT_PUBLIC_VERCEL_ENV_EMAILJS_TEMPLATE_ID` | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` |

## Security notes

- Rotate keys if they were ever committed to git.
- In EmailJS, enable domain restrictions and rate limiting.
- Never log form submissions or API responses in the browser console in production.

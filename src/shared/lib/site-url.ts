const LOCAL_SITE_URL = 'http://localhost:3000'

function toAbsoluteUrl(value: string): URL {
  if (/^https?:\/\//i.test(value)) {
    return new URL(value)
  }

  return new URL(`https://${value}`)
}

/**
 * Canonical site origin for metadata, sitemap, robots and JSON-LD.
 *
 * Prefers `NEXT_PUBLIC_SITE_URL` (literal key so Next.js can inline it).
 * On Vercel, falls back to the platform deployment URLs so production
 * builds do not emit localhost when the public variable is unset.
 * Localhost is only used outside production.
 */
export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (configured) {
    return toAbsoluteUrl(configured)
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercelProduction) {
    return toAbsoluteUrl(vercelProduction)
  }

  const vercelDeployment = process.env.VERCEL_URL?.trim()
  if (vercelDeployment) {
    return toAbsoluteUrl(vercelDeployment)
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL must be set in production so metadata, sitemap and robots do not use localhost.',
    )
  }

  return new URL(LOCAL_SITE_URL)
}

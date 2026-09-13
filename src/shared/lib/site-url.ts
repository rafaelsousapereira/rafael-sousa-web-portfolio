const LOCAL_SITE_URL = 'http://localhost:3000'

/**
 * Canonical site origin for metadata, sitemap, robots and JSON-LD.
 *
 * Reads `NEXT_PUBLIC_SITE_URL` with a literal key so Next.js can inline it.
 * Localhost is only used outside production. A production build without the
 * variable fails instead of emitting localhost canonical URLs.
 */
export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (configured) {
    return new URL(configured)
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL must be set in production so metadata, sitemap and robots do not use localhost.',
    )
  }

  return new URL(LOCAL_SITE_URL)
}

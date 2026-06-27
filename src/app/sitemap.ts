import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: new URL('/', siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: new URL('/about', siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: new URL('/contact', siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
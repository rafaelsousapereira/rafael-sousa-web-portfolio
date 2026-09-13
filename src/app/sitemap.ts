import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/shared/lib/site-url'

const siteUrl = getSiteUrl()

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
  ]
}

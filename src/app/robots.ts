import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/shared/lib/site-url'

const siteUrl = getSiteUrl()

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
  }
}
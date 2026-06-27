/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Mulish } from 'next/font/google'
import SiteHeader from '@/presentation/components/layout/site-header'
import { cn } from '@/shared/lib/utils'
import AppProviders from '@/shared/providers/app-providers'
import ToastProvider from '@/shared/providers/toast-provider'
import './globals.css'
import { getSiteContent } from '@/shared/content/site-content'
import { defaultLocale } from '@/shared/content/locales'

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans',
})

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')

// SEO metadata is generated for the default locale because Next.js Metadata
// is static per route. The runtime locale toggle changes the visible content
// via client-side i18n but cannot affect server-emitted <title>, OG and
// Twitter tags.
const { seo } = getSiteContent(defaultLocale)

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/site-icon.svg',
    shortcut: '/site-icon.svg',
    apple: '/site-icon.svg',
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: metadataBase.toString(),
    siteName: seo.title,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: metadataBase.toString(),
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className={cn('font-sans', mulish.variable)}>
      <body className="min-h-screen bg-background selection:bg-primary/40 selection:text-primary-foreground">
        <AppProviders>
          <ToastProvider>
            <SiteHeader />
            {children}
          </ToastProvider>
        </AppProviders>
      </body>
    </html>
  )
}

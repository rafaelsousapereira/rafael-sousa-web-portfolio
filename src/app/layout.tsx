/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Mulish } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import '@/index.css'

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Rafael | DEV',
  description:
    'Bem-vindos, ao meu portfólio! Olá, eu sou Rafael Sousa um desenvolvedor full-stack apaixonado por tecnologia e soluções criativas.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={cn('dark font-sans', mulish.variable)}>
      <body className="min-h-screen selection:bg-primary/40 selection:text-primary-foreground">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING ?? ''} />
        <Header />
        {children}
      </body>
    </html>
  )
}

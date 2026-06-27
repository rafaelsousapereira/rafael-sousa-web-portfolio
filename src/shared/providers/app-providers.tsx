'use client'

import type { ReactNode } from 'react'
import { I18nProvider } from '@/shared/providers/i18n-provider'
import { ThemeProvider } from '@/shared/providers/theme-provider'

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
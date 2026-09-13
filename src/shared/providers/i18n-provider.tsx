'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  defaultLocale,
  translations,
  type Locale,
  type TranslationDictionary,
} from '@/shared/content/locales'
import { resolveLocale, localeStorageKey } from '@/shared/content/locale-resolver'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationDictionary
}

const storageKey = localeStorageKey

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setLocaleState(resolveLocale(window.localStorage.getItem(storageKey)))
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) {
      return
    }

    window.localStorage.setItem(storageKey, locale)
    document.documentElement.lang = locale
  }, [hydrated, locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: translations[locale],
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }

  return context
}
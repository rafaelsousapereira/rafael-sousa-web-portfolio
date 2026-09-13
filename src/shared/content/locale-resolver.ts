import { defaultLocale, locales, type Locale } from '@/shared/content/locales'

export const localeStorageKey = 'rafael-sousa-web-locale'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale)
}

export function resolveLocale(
  value: unknown,
  fallback: Locale = defaultLocale,
): Locale {
  return isLocale(value) ? value : fallback
}

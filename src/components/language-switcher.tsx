'use client'

import { Button } from '@/presentation/components/ui/button'
import { locales, type Locale } from '@/shared/content/locales'
import { useI18n } from '@/shared/providers/i18n-provider'

const languageLabels: Record<Locale, string> = {
  'pt-BR': 'PT',
  'en-US': 'EN',
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-background p-1">
      <span className="sr-only">{t.language.label}</span>
      {locales.map((currentLocale) => {
        const isActive = locale === currentLocale

        return (
          <Button
            key={currentLocale}
            type="button"
            variant={isActive ? 'default' : 'ghost'}
            size="sm"
            className="h-8 min-w-10 px-3 text-xs uppercase tracking-[0.2em]"
            aria-pressed={isActive}
            aria-label={
              currentLocale === 'pt-BR' ? t.language.portuguese : t.language.english
            }
            onClick={() => setLocale(currentLocale)}
          >
            {languageLabels[currentLocale]}
          </Button>
        )
      })}
    </div>
  )
}
'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/presentation/components/ui/button'
import { useI18n } from '@/shared/providers/i18n-provider'

const themeOptions = [
  { value: 'light', icon: Sun },
  { value: 'system', icon: Monitor },
  { value: 'dark', icon: Moon },
] as const

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-background p-1">
      <span className="sr-only">{t.theme.label}</span>
      {themeOptions.map(({ value, icon: Icon }) => {
        const isActive = theme === value

        return (
          <Button
            key={value}
            type="button"
            variant={isActive ? 'default' : 'ghost'}
            size="icon-sm"
            className="size-8"
            aria-pressed={isActive}
            aria-label={t.theme[value]}
            onClick={() => setTheme(value)}
          >
            <Icon className="size-4" />
          </Button>
        )
      })}
    </div>
  )
}
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import LanguageSwitcher from '@/components/language-switcher'
import { localeStorageKey } from '@/shared/content/locale-resolver'
import { I18nProvider } from '@/shared/providers/i18n-provider'

function renderSwitcher() {
  return render(
    <I18nProvider>
      <LanguageSwitcher />
    </I18nProvider>,
  )
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('starts on the default locale', () => {
    renderSwitcher()

    expect(screen.getByRole('button', { name: 'Português' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('switches language and persists the locale', async () => {
    const user = userEvent.setup()
    renderSwitcher()

    await user.click(screen.getByRole('button', { name: 'Inglês' }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute(
        'aria-pressed',
        'true',
      )
    })
    expect(window.localStorage.getItem(localeStorageKey)).toBe('en-US')
    expect(screen.getByRole('button', { name: 'Portuguese' })).toBeInTheDocument()
  })
})

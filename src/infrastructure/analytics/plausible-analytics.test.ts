import { describe, expect, it, vi } from 'vitest'
import { createPlausibleAnalytics } from '@/infrastructure/analytics/plausible-analytics'

describe('createPlausibleAnalytics', () => {
  it('no-ops when Plausible is not available', () => {
    const analytics = createPlausibleAnalytics()
    expect(() => analytics.track('contact_submit')).not.toThrow()
  })

  it('forwards events to window.plausible when present', () => {
    const plausible = vi.fn()
    window.plausible = plausible

    const analytics = createPlausibleAnalytics()
    analytics.track('contact_submit', { locale: 'pt-BR' })

    expect(plausible).toHaveBeenCalledWith('contact_submit', {
      props: { locale: 'pt-BR' },
    })

    delete window.plausible
  })
})

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, unknown> },
    ) => void
  }
}

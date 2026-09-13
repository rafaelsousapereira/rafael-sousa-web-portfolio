import type { AnalyticsService } from '@/application/analytics/analytics-service'

type PlausibleFn = (
  event: string,
  options?: { props?: Record<string, unknown> },
) => void

function getPlausible(): PlausibleFn | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  const plausible = (window as Window & { plausible?: PlausibleFn }).plausible
  return typeof plausible === 'function' ? plausible : undefined
}

export function createPlausibleAnalytics(): AnalyticsService {
  return {
    track(event, properties) {
      const plausible = getPlausible()

      if (!plausible) {
        return
      }

      if (properties) {
        plausible(event, { props: properties })
        return
      }

      plausible(event)
    },
  }
}

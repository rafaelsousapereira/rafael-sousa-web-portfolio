export type AnalyticsProperties = Record<string, unknown>

export interface AnalyticsService {
  track(event: string, properties?: AnalyticsProperties): void
}

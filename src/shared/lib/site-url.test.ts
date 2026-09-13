import { afterEach, describe, expect, it, vi } from 'vitest'
import { getSiteUrl } from '@/shared/lib/site-url'

describe('getSiteUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('uses NEXT_PUBLIC_SITE_URL when set', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://rafaelsousa.vercel.app')
    vi.stubEnv('NODE_ENV', 'production')

    expect(getSiteUrl().toString()).toBe('https://rafaelsousa.vercel.app/')
  })

  it('falls back to localhost outside production', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '')
    vi.stubEnv('NODE_ENV', 'development')

    expect(getSiteUrl().toString()).toBe('http://localhost:3000/')
  })

  it('throws in production when the site URL is missing', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '   ')
    vi.stubEnv('NODE_ENV', 'production')

    expect(() => getSiteUrl()).toThrow(/NEXT_PUBLIC_SITE_URL must be set in production/)
  })
})

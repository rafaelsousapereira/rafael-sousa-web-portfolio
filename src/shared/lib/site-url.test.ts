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

  it('prefers NEXT_PUBLIC_SITE_URL over Vercel platform URLs', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://example.com')
    vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', 'rafaelsousa.vercel.app')
    vi.stubEnv('VERCEL_URL', 'preview.vercel.app')
    vi.stubEnv('NODE_ENV', 'production')

    expect(getSiteUrl().toString()).toBe('https://example.com/')
  })

  it('uses VERCEL_PROJECT_PRODUCTION_URL when the public site URL is missing', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '')
    vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', 'rafaelsousa.vercel.app')
    vi.stubEnv('NODE_ENV', 'production')

    expect(getSiteUrl().toString()).toBe('https://rafaelsousa.vercel.app/')
  })

  it('uses VERCEL_URL when no production domain is configured', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '')
    vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', '')
    vi.stubEnv('VERCEL_URL', 'rafael-sousa-web-portfolio-abc.vercel.app')
    vi.stubEnv('NODE_ENV', 'production')

    expect(getSiteUrl().toString()).toBe(
      'https://rafael-sousa-web-portfolio-abc.vercel.app/',
    )
  })

  it('falls back to localhost outside production', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '')
    vi.stubEnv('NODE_ENV', 'development')

    expect(getSiteUrl().toString()).toBe('http://localhost:3000/')
  })

  it('throws in production when no site URL or Vercel URL is available', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '   ')
    vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', '')
    vi.stubEnv('VERCEL_URL', '')
    vi.stubEnv('NODE_ENV', 'production')

    expect(() => getSiteUrl()).toThrow(/NEXT_PUBLIC_SITE_URL must be set in production/)
  })
})

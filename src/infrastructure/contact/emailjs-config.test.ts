import { afterEach, describe, expect, it, vi } from 'vitest'
import { getEmailJsConfig } from '@/infrastructure/contact/emailjs-config'

describe('getEmailJsConfig', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('returns a valid configuration when public identifiers are present', () => {
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_USER_ID', 'public-key')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'service-id')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'template-id')

    expect(getEmailJsConfig()).toEqual({
      publicKey: 'public-key',
      serviceId: 'service-id',
      templateId: 'template-id',
      missingKeys: [],
    })
  })

  it('lists missing public identifiers', () => {
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_USER_ID', '')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', '')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', '')

    const config = getEmailJsConfig()

    expect(config.missingKeys).toEqual([
      'NEXT_PUBLIC_EMAILJS_USER_ID',
      'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
      'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
    ])
  })

  it('does not hardcode a private secret', () => {
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_USER_ID', '')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', '')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', '')

    const config = getEmailJsConfig()

    expect(config.publicKey).toBe('')
    expect(JSON.stringify(config)).not.toMatch(/private/i)
  })
})

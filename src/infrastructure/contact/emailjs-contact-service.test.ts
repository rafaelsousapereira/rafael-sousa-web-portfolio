import { afterEach, describe, expect, it, vi } from 'vitest'
import { EmailJsContactService } from '@/infrastructure/contact/emailjs-contact-service'

const input = {
  name: 'Rafael Sousa',
  email: 'rafael@example.com',
  subject: 'Hello',
  message: 'I would like to talk.',
}

describe('EmailJsContactService', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('does not call EmailJS when public identifiers are missing', async () => {
    const send = vi.fn()
    const service = new EmailJsContactService({
      recipientName: 'Rafael',
      getConfig: () => ({
        publicKey: '',
        serviceId: '',
        templateId: '',
        missingKeys: ['NEXT_PUBLIC_EMAILJS_USER_ID'],
      }),
      client: { send },
    })

    await expect(service.send(input)).resolves.toEqual({
      ok: false,
      reason: 'config_missing',
    })
    expect(send).not.toHaveBeenCalled()
  })

  it('sends the mapped payload through the EmailJS client', async () => {
    const send = vi.fn().mockResolvedValue({ status: 200 })
    const service = new EmailJsContactService({
      recipientName: 'Rafael Sousa Pereira | Support',
      getConfig: () => ({
        publicKey: 'public-key',
        serviceId: 'service-id',
        templateId: 'template-id',
        missingKeys: [],
      }),
      client: { send },
    })

    await expect(service.send(input)).resolves.toEqual({ ok: true })
    expect(send).toHaveBeenCalledWith(
      'service-id',
      'template-id',
      {
        from_name: input.name,
        reply_to: input.email,
        subject: input.subject,
        message: input.message,
        to_name: 'Rafael Sousa Pereira | Support',
      },
      { publicKey: 'public-key' },
    )
  })

  it('does not call EmailJS when the browser is offline', async () => {
    const send = vi.fn()
    vi.stubGlobal('navigator', { onLine: false })

    const service = new EmailJsContactService({
      recipientName: 'Rafael',
      getConfig: () => ({
        publicKey: 'public-key',
        serviceId: 'service-id',
        templateId: 'template-id',
        missingKeys: [],
      }),
      client: { send },
    })

    await expect(service.send(input)).resolves.toEqual({
      ok: false,
      reason: 'network',
    })
    expect(send).not.toHaveBeenCalled()
  })

  it('maps client failures to a send_failed result', async () => {
    const send = vi.fn().mockRejectedValue({ text: 'quota exceeded' })
    const service = new EmailJsContactService({
      recipientName: 'Rafael',
      getConfig: () => ({
        publicKey: 'public-key',
        serviceId: 'service-id',
        templateId: 'template-id',
        missingKeys: [],
      }),
      client: { send },
    })

    await expect(service.send(input)).resolves.toEqual({
      ok: false,
      reason: 'send_failed',
      message: 'quota exceeded',
    })
  })
})

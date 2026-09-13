import { describe, expect, it, vi } from 'vitest'
import { sendContactMessage } from '@/application/contact/send-contact-message'

describe('sendContactMessage', () => {
  it('delegates to the injected contact service', async () => {
    const send = vi.fn().mockResolvedValue({ ok: true })
    const input = {
      name: 'Rafael Sousa',
      email: 'rafael@example.com',
      subject: 'Hello',
      message: 'Message body here',
    }

    await expect(sendContactMessage({ send }, input)).resolves.toEqual({
      ok: true,
    })
    expect(send).toHaveBeenCalledWith(input)
  })
})

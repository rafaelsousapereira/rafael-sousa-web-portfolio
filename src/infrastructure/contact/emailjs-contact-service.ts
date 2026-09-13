import emailjs from '@emailjs/browser'
import type {
  ContactInput,
  ContactResult,
  ContactService,
} from '@/application/contact/contact-service'
import {
  getEmailJsConfig,
  type EmailJsConfig,
} from '@/infrastructure/contact/emailjs-config'

type EmailJsClient = {
  send: typeof emailjs.send
}

type EmailJsContactServiceOptions = {
  recipientName: string
  getConfig?: () => EmailJsConfig
  client?: EmailJsClient
}

export class EmailJsContactService implements ContactService {
  private readonly recipientName: string
  private readonly getConfig: () => EmailJsConfig
  private readonly client: EmailJsClient

  constructor(options: EmailJsContactServiceOptions) {
    this.recipientName = options.recipientName
    this.getConfig = options.getConfig ?? getEmailJsConfig
    this.client = options.client ?? emailjs
  }

  async send(input: ContactInput): Promise<ContactResult> {
    const { publicKey, serviceId, templateId, missingKeys } = this.getConfig()

    if (missingKeys.length > 0) {
      return { ok: false, reason: 'config_missing' }
    }

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return { ok: false, reason: 'network' }
    }

    try {
      await this.client.send(
        serviceId,
        templateId,
        {
          from_name: input.name,
          reply_to: input.email,
          subject: input.subject,
          message: input.message,
          to_name: this.recipientName,
        },
        { publicKey },
      )

      return { ok: true }
    } catch (error) {
      const emailJsError = error as { text?: string; message?: string } | null

      return {
        ok: false,
        reason: 'send_failed',
        message: emailJsError?.text || emailJsError?.message,
      }
    }
  }
}

export function createContactService(recipientName: string): ContactService {
  return new EmailJsContactService({ recipientName })
}

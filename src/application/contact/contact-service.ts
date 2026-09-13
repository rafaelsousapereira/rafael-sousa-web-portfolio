export interface ContactInput {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFailureReason = 'config_missing' | 'network' | 'send_failed'

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: ContactFailureReason; message?: string }

export interface ContactService {
  send(input: ContactInput): Promise<ContactResult>
}

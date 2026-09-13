import { z } from 'zod'
import type { ContactInput } from '@/application/contact/contact-service'

export type ContactValidationMessages = {
  nameMin: string
  nameMax: string
  email: string
  subjectMin: string
  messageMin: string
}

export function createContactSchema(validation: ContactValidationMessages) {
  return z.object({
    name: z.string().trim().min(5, validation.nameMin).max(50, validation.nameMax),
    email: z.string().trim().email(validation.email),
    subject: z.string().trim().min(3, validation.subjectMin).max(120),
    message: z.string().trim().min(5, validation.messageMin),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>

export function toContactInput(values: ContactFormValues): ContactInput {
  return {
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
  }
}

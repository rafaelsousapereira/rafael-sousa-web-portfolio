import type {
  ContactInput,
  ContactResult,
  ContactService,
} from '@/application/contact/contact-service'

export function sendContactMessage(
  service: ContactService,
  input: ContactInput,
): Promise<ContactResult> {
  return service.send(input)
}

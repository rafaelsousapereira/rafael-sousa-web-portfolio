'use client'

import { useMemo } from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import ContactForm from '@/components/contact-form'
import { createContactService } from '@/infrastructure/contact/emailjs-contact-service'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function ContactSection() {
  const { t } = useI18n()
  const contactService = useMemo(
    () => createContactService(t.contact.recipientName),
    [t.contact.recipientName],
  )

  return (
    <Section id="contact">
      <Container>
        <ContactForm contactService={contactService} />
      </Container>
    </Section>
  )
}

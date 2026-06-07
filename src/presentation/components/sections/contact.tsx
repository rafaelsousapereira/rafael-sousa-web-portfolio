import React from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import ContactForm from '@/components/contact-form'

export default function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <ContactForm />
      </Container>
    </Section>
  )
}

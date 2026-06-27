 'use client'

import Section from '../ui/section'
import Container from '../ui/container'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function AboutSection() {
  const { locale, t } = useI18n()
  const { about } = getSiteContent(locale)

  return (
    <Section id="about">
      <Container>
        <h2 className="heading-page mb-6">{t.about.pageTitle}</h2>
        <div className="prose max-w-none">
          <p>{about.description}</p>
        </div>
      </Container>
    </Section>
  )
}

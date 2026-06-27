 'use client'

import Section from '../ui/section'
import Container from '../ui/container'
import Timeline from '../ui/timeline'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function ExperienceSection() {
  const { locale, t } = useI18n()
  const { experiences } = getSiteContent(locale)

  return (
    <Section id="experience">
      <Container>
        <h2 className="heading-page mb-6">{t.sections.experience}</h2>
        <Timeline items={experiences} />
      </Container>
    </Section>
  )
}

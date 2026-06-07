import React from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import Timeline from '../ui/timeline'
import { experiences } from '@/shared/content/site-content'

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <h2 className="heading-page mb-6">Experiências</h2>
        <Timeline items={experiences} />
      </Container>
    </Section>
  )
}

import React from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import { about } from '@/shared/content/site-content'

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <h2 className="heading-page mb-6">{about.titles[0]}</h2>
        <div className="prose max-w-none">
          <p>{about.description}</p>
        </div>
      </Container>
    </Section>
  )
}

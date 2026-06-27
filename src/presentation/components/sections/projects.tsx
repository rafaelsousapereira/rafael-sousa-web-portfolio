 'use client'

import Section from '../ui/section'
import Container from '../ui/container'
import ProjectCard from '../ui/project-card'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function ProjectsSection() {
  const { locale, t } = useI18n()
  const { projects } = getSiteContent(locale)

  return (
    <Section id="projects">
      <Container>
        <h2 className="heading-page mb-6">{t.sections.projects}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.length ? (
            projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                techStack={p.techStack}
                businessImpact={p.businessImpact}
                repoUrl={p.repoUrl}
              />
            ))
          ) : (
            <p className="text-muted-foreground">{t.empty.projects}</p>
          )}
        </div>
      </Container>
    </Section>
  )
}

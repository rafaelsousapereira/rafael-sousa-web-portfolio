import React from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import ProjectCard from '../ui/project-card'
import { projects } from '@/shared/content/site-content'

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Container>
        <h2 className="heading-page mb-6">Projetos</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.length ? (
            projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                techStack={p.techStack}
                businessImpact={p.businessImpact}
              />
            ))
          ) : (
            <p className="text-muted-foreground">Nenhum projeto listado.</p>
          )}
        </div>
      </Container>
    </Section>
  )
}

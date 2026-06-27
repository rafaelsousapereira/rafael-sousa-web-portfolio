'use client'

import React from 'react'
import { Github } from 'lucide-react'
import { useI18n } from '@/shared/providers/i18n-provider'
import NavLink from '@/components/nav-link'

export function ProjectCard({
  title,
  description,
  techStack,
  businessImpact,
  repoUrl,
}: {
  title: string
  description: string
  techStack: string[]
  businessImpact: string
  repoUrl: string
}) {
  const { t } = useI18n()

  return (
    <article className="flex h-full flex-col rounded-lg border border-border p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm">
        <span className="font-semibold">{t.project.businessImpact}</span> {businessImpact}
      </p>

      <div className="mt-auto pt-4">
        <NavLink
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.project.viewOnGithub} — ${title}`}
          className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          <Github aria-hidden="true" className="size-4" />
          {t.project.viewOnGithub}
        </NavLink>
      </div>
    </article>
  )
}

export default ProjectCard

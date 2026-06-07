import React from 'react'

export function ProjectCard({
  title,
  description,
  techStack,
  businessImpact,
}: {
  title: string
  description: string
  techStack: string[]
  businessImpact: string
}) {
  return (
    <article className="rounded-lg border border-border p-4">
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
        <span className="font-semibold">Business impact:</span> {businessImpact}
      </p>
    </article>
  )
}

export default ProjectCard

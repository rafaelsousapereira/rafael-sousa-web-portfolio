'use client'

import React from 'react'
import type { Experience } from '@/domain/entities/experience'
import { formatEndYear } from '@/domain/services/format-end-year'
import { useI18n } from '@/shared/providers/i18n-provider'

export function Timeline({ items }: { items: Experience[] }) {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      {items.map((it) => (
        <article key={it.id} className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold">{it.company}</h3>
            <span className="text-sm text-muted-foreground">
              {it.startYear} — {formatEndYear(it.endYear, t.timeline.present)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{it.role}</p>
          {it.summary && <p className="text-body">{it.summary}</p>}
          {it.responsibilities && it.responsibilities.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {it.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default Timeline

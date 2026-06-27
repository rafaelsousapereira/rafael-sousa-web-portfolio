'use client'

import React from 'react'
import type { Experience } from '@/domain/entities/experience'
import { useI18n } from '@/shared/providers/i18n-provider'

export function Timeline({ items }: { items: Experience[] }) {
  const { t } = useI18n()

  const formatEndYear = (endYear: Experience['endYear']): string => {
    if (endYear === undefined) return ''
    if (/^\d+$/.test(endYear)) return endYear
    return t.timeline.present
  }

  return (
    <div className="space-y-6">
      {items.map((it) => (
        <div key={it.id} className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold">{it.company}</h3>
            <span className="text-sm text-muted-foreground">
              {it.startYear} — {formatEndYear(it.endYear)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{it.role}</p>
          {it.summary && <p className="text-body">{it.summary}</p>}
        </div>
      ))}
    </div>
  )
}

export default Timeline

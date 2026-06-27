'use client'

import React from 'react'
import { useI18n } from '@/shared/providers/i18n-provider'

export function ArticleCard({
  title,
  url,
  source,
}: {
  title: string
  url: string
  source: string
}) {
  const { t } = useI18n()

  return (
    <article className="rounded-2xl border border-border/80 bg-card/80 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{source}</p>
      <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex text-sm text-primary underline underline-offset-2"
      >
        {t.article.viewOnLinkedIn}
      </a>
    </article>
  )
}

export default ArticleCard

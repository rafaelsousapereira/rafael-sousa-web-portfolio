import React from 'react'

export function ArticleCard({ title, url }: { title: string; url: string }) {
  return (
    <article className="rounded-lg border border-border p-4">
      <h3 className="font-semibold">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex text-sm text-primary underline underline-offset-2"
      >
        Ver no LinkedIn
      </a>
    </article>
  )
}

export default ArticleCard

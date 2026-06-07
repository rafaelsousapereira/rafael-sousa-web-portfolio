import React from 'react'
import Section from '../ui/section'
import Container from '../ui/container'
import ArticleCard from '../ui/article-card'
import { articles } from '@/shared/content/site-content'

export default function ArticlesSection() {
  return (
    <Section id="articles">
      <Container>
        <h2 className="heading-page mb-6">Artigos</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.length ? (
            articles.map((a) => <ArticleCard key={a.id} title={a.title} url={a.url} />)
          ) : (
            <p className="text-muted-foreground">Nenhum artigo listado.</p>
          )}
        </div>
      </Container>
    </Section>
  )
}

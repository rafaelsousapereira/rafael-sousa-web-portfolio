 'use client'

import Section from '../ui/section'
import Container from '../ui/container'
import ArticleCard from '../ui/article-card'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function ArticlesSection() {
  const { locale, t } = useI18n()
  const { articles } = getSiteContent(locale)

  return (
    <Section id="articles">
      <Container>
        <h2 className="heading-page mb-6">{t.sections.articles}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.length ? (
            articles.map((a) => (
              <ArticleCard key={a.id} title={a.title} url={a.url} source={a.source} />
            ))
          ) : (
            <p className="text-muted-foreground">{t.empty.articles}</p>
          )}
        </div>
      </Container>
    </Section>
  )
}

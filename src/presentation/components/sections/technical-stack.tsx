'use client'

import Container from '../ui/container'
import Section from '../ui/section'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function TechnicalStackSection() {
  const { locale, t } = useI18n()
  const { technicalStack } = getSiteContent(locale)

  return (
    <Section id="technical-stack">
      <Container>
        <h2 className="heading-page mb-3">{t.sections.stack}</h2>
        <p className="text-body max-w-3xl">{t.stack.subtitle}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {technicalStack.map((group) => (
            <article key={group.id} className="rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
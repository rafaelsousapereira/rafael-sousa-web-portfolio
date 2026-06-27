'use client'

import Container from '../ui/container'
import Section from '../ui/section'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function CertificationsSection() {
  const { locale, t } = useI18n()
  const { certifications } = getSiteContent(locale)

  return (
    <Section id="certifications">
      <Container>
        <h2 className="heading-page mb-3">{t.sections.certifications}</h2>

        {certifications.length ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification) => (
              <article key={certification.id} className="rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {certification.issuer}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{certification.title}</h3>
                <p className="mt-2 text-body">{certification.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border/80 bg-card/50 p-5">
            <p className="text-body">{t.empty.certifications}</p>
          </div>
        )}
      </Container>
    </Section>
  )
}
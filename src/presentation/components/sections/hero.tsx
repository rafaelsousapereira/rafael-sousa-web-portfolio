 'use client'

import Link from 'next/link'
import { getSiteContent } from '@/shared/content/site-content'
import { useI18n } from '@/shared/providers/i18n-provider'
import Container from '../ui/container'
import Section from '../ui/section'
import { buttonVariants } from '@/presentation/components/ui/button'
import { cn } from '@/shared/lib/utils'

export default function Hero() {
  const { locale, t } = useI18n()
  const { hero } = getSiteContent(locale)

  const highlightCards = [
    {
      title: hero.currentCompany.name,
      description: hero.currentCompany.summary,
      eyebrow: hero.currentCompany.period,
    },
    {
      title: hero.previousCompany.name,
      description: hero.previousCompany.summary,
      eyebrow: hero.previousCompany.period,
    },
    {
      title: t.hero.mainStack,
      description: hero.focus.join(' • '),
      eyebrow: t.hero.technologies,
    },
    {
      title: t.hero.deliveryFocus,
      description: hero.summary,
      eyebrow: hero.subtitle,
    },
  ]

  return (
    <Section id="home" className="pt-10 sm:pt-14">
      <Container>
        <main className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <section className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {t.hero.staffLabel}
            </p>

            <h1 className="heading-display">
              {hero.name}
              <span className="heading-display-accent block">{hero.role}</span>
            </h1>

            <p className="text-role">{hero.subtitle}</p>

            <p className="text-body max-w-2xl">{hero.summary}</p>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-card/70 p-4 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t.hero.currentRole}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{hero.currentCompany.name}</p>
                <p className="text-sm text-primary">{hero.currentCompany.period}</p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card/70 p-4 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t.hero.previousRole}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{hero.previousCompany.name}</p>
                <p className="text-sm text-primary">{hero.previousCompany.period}</p>
              </div>
            </div>

            <div className="pt-4 flex gap-3 flex-col sm:flex-row sm:items-center">
              <Link href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}>
                {t.hero.ctaProjects}
              </Link>

              <Link href="#contact" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
                {t.hero.ctaContact}
              </Link>
            </div>
          </section>

          <div className="self-stretch pt-2 lg:pt-10">
            <div className="hero-highlights">
              {highlightCards.map((card, index) => (
                <article
                  key={card.title}
                  className={cn('hero-highlight-card', index === 0 && 'sm:col-span-2')}
                >
                  <p className="hero-highlight-title">{card.eyebrow}</p>
                  <p className="hero-highlight-title">{card.title}</p>
                  <p className="hero-highlight-description">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </main>
      </Container>
    </Section>
  )
}

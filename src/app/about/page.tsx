 'use client'

import { getSiteContent } from '@/shared/content/site-content'
import Timeline from '@/presentation/components/ui/timeline'
import { useI18n } from '@/shared/providers/i18n-provider'

export default function AboutPage() {
  const { locale, t } = useI18n()
  const { about, experiences } = getSiteContent(locale)

  return (
    <div className="page-container flex flex-col items-center gap-8 py-8 text-center">
      <h1 className="heading-page">{t.about.pageTitle}</h1>
      <p className="text-body max-w-3xl">{about.description}</p>

      <h2 className="heading-page">{t.about.experienceTitle}</h2>

      <div className="w-full max-w-3xl text-left">
        <Timeline items={experiences} />
      </div>
    </div>
  )
}

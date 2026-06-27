 'use client'

import { useI18n } from '@/shared/providers/i18n-provider'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="page-container py-16 text-center">
      <h1 className="heading-page">{t.notFound.title}</h1>
      <p className="text-body mt-4">{t.notFound.description}</p>
    </div>
  )
}

import { ImageResponse } from 'next/og'
import { getSiteContent } from '@/shared/content/site-content'
import { defaultLocale, translations } from '@/shared/content/locales'

export const dynamic = 'force-static'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// The OpenGraph image is a static, prerendered asset; we render it for the
// default locale only. Crawlers will pick this image regardless of the
// user's runtime language preference.
const { hero, seo, technicalStack } = getSiteContent(defaultLocale)
const stackItems = Array.from(new Set(technicalStack.flatMap((group) => group.items)))

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '64px',
          background:
            'radial-gradient(circle at top left, rgba(59, 130, 246, 0.28), transparent 35%), linear-gradient(135deg, #09101f 0%, #111827 50%, #0b1220 100%)',
          color: '#f8fafc',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '840px' }}>
          <span
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              borderRadius: '999px',
              border: '1px solid rgba(148, 163, 184, 0.28)',
              background: 'rgba(15, 23, 42, 0.55)',
              padding: '10px 18px',
              fontSize: '24px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#93c5fd',
            }}
          >
            {hero.role}
          </span>

          <h1 style={{ fontSize: '72px', lineHeight: 1.02, margin: 0, fontWeight: 800 }}>{hero.name}</h1>

          <p style={{ fontSize: '30px', lineHeight: 1.35, margin: 0, color: '#cbd5e1', maxWidth: '760px' }}>
            {hero.subtitle}
          </p>

          <p style={{ fontSize: '24px', lineHeight: 1.45, margin: 0, color: '#e2e8f0', maxWidth: '880px' }}>
            {seo.description}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1px solid rgba(148, 163, 184, 0.24)',
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '20px 24px',
                minWidth: '280px',
              }}
            >
              <div style={{ fontSize: '18px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
                {translations[defaultLocale].hero.currentRole}
              </div>
              <div style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px' }}>{hero.currentCompany.name}</div>
              <div style={{ fontSize: '22px', color: '#cbd5e1', marginTop: '6px' }}>{hero.currentCompany.period}</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                border: '1px solid rgba(148, 163, 184, 0.24)',
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '20px 24px',
                minWidth: '280px',
              }}
            >
              <div style={{ fontSize: '18px', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
                {translations[defaultLocale].hero.previousRole}
              </div>
              <div style={{ fontSize: '34px', fontWeight: 700, marginTop: '8px' }}>{hero.previousCompany.name}</div>
              <div style={{ fontSize: '22px', color: '#cbd5e1', marginTop: '6px' }}>{hero.previousCompany.period}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {stackItems.slice(0, 7).map((item) => (
              <span
                key={item}
                style={{
                  borderRadius: '999px',
                  border: '1px solid rgba(148, 163, 184, 0.24)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  padding: '12px 16px',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
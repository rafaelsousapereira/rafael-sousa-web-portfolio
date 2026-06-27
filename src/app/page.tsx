import Hero from '@/presentation/components/sections/hero'
import TechnicalStackSection from '@/presentation/components/sections/technical-stack'
import AboutSection from '@/presentation/components/sections/about'
import ExperienceSection from '@/presentation/components/sections/experience'
import CertificationsSection from '@/presentation/components/sections/certifications'
import ProjectsSection from '@/presentation/components/sections/projects'
import ArticlesSection from '@/presentation/components/sections/articles'
import ContactSection from '@/presentation/components/sections/contact'
import SiteFooter from '@/presentation/components/layout/site-footer'
import { getSiteContent } from '@/shared/content/site-content'
import { defaultLocale } from '@/shared/content/locales'

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')

// JSON-LD is rendered server-side for the default locale because schema.org
// metadata lives inside the static HTML payload.
const { person, seo, socialMedia } = getSiteContent(defaultLocale)

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl.toString()}#person`,
      name: person.name,
      jobTitle: person.position,
      description: person.description,
      url: siteUrl.toString(),
      sameAs: [socialMedia.url.linkedin, socialMedia.url.github],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl.toString()}#website`,
      name: seo.title,
      url: siteUrl.toString(),
      description: seo.description,
      publisher: {
        '@id': `${siteUrl.toString()}#person`,
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero />
        <TechnicalStackSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

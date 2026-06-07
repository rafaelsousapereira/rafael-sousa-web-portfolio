import Hero from '@/presentation/components/sections/hero'
import AboutSection from '@/presentation/components/sections/about'
import ExperienceSection from '@/presentation/components/sections/experience'
import ProjectsSection from '@/presentation/components/sections/projects'
import ArticlesSection from '@/presentation/components/sections/articles'
import ContactSection from '@/presentation/components/sections/contact'
import SiteFooter from '@/presentation/components/layout/site-footer'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

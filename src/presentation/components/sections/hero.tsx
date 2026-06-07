import Link from 'next/link'
import ImageHome from '@/components/image-home'
import { metadata } from '@/data/infoPages'
import Container from '../ui/container'
import Section from '../ui/section'
import { buttonVariants } from '@/presentation/components/ui/button'
import { cn } from '@/shared/lib/utils'

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <main className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <section className="flex flex-col gap-5">
            <p className="text-lead">{metadata.greeting.description}</p>

            <h1 className="heading-display">
              {metadata.person.name}{' '}
              <span className="heading-display-accent block">{metadata.person.sirName}</span>
            </h1>

            <p className="text-role">{metadata.person.position}</p>

            <p className="text-body">{metadata.person.description}</p>

            <div className="pt-4 flex gap-3 flex-col sm:flex-row sm:items-center">
              <Link href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}>
                Projects
              </Link>

              <Link href="#contact" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
                Contact
              </Link>
            </div>
          </section>

          <div className="flex items-start justify-center lg:justify-end">
            <ImageHome />
          </div>
        </main>
      </Container>
    </Section>
  )
}

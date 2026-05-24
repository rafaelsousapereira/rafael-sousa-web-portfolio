import Link from 'next/link'
import { metadata } from '@/data/infoPages'
import Footer from '@/components/footer'
import ImageHome from '@/components/image-home'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="page-container flex flex-col gap-2 py-6">
      <main className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <section className="flex flex-col gap-5">
          <p className="text-lead">{metadata.greeting.description}</p>

          <h1 className="heading-display">
            {metadata.person.name}{' '}
            <span className="heading-display-accent block">
              {metadata.person.sirName}
            </span>
          </h1>

          <p className="text-role">{metadata.person.position}</p>

          <p className="text-body">{metadata.person.description}</p>

          <div className="pt-4">
            <Link
              href="/about"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              Saiba Mais!
            </Link>
          </div>
        </section>

        <div className="flex items-start justify-center lg:justify-end">
          <ImageHome />
        </div>
      </main>

      <Footer />
    </div>
  )
}

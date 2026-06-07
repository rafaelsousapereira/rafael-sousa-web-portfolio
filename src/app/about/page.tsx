import { about, experiences } from '@/shared/content/site-content'
import Timeline from '@/presentation/components/ui/timeline'

export default function AboutPage() {
  return (
    <div className="page-container flex flex-col items-center gap-8 py-8 text-center">
      <h1 className="heading-page">{about.titles[0]}</h1>
      <p className="text-body max-w-3xl">{about.description}</p>

      <h2 className="heading-page">{about.titles[1]}</h2>

      <div className="w-full max-w-3xl text-left">
        <Timeline items={experiences} />
      </div>
    </div>
  )
}

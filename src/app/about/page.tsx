import { metadata } from '@/data/infoPages'
import ListExperience from '@/components/list-experience'

export default function AboutPage() {
  return (
    <div className="page-container flex flex-col items-center gap-8 py-8 text-center">
      <h1 className="heading-page">{metadata.about.titles[0]}</h1>
      <p className="text-body max-w-3xl">{metadata.about.description}</p>

      <h2 className="heading-page">{metadata.about.titles[1]}</h2>

      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-center md:gap-8">
        <ListExperience metadata={metadata} id={0} />
        <ListExperience metadata={metadata} id={1} />
        <ListExperience metadata={metadata} id={2} />
      </div>
    </div>
  )
}

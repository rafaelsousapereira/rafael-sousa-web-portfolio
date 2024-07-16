import { metadata } from '../../data/metadatas'
import { ListExperienceComponent } from './list-experience-component'

export const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 text-zinc-300 m-4">
        <p className="text-3xl text-violet-500 font-extrabold uppercase">
          {metadata.about.titles[0]}
        </p>
        <p className="text-2xl text-center max-[425px]:text-xl">
          {metadata.about.description}
        </p>

        <p className="text-center text-3xl text-violet-500 font-extrabold uppercase">
          {metadata.about.titles[1]}
        </p>

        <div className="flex items-center gap-4 text-center max-md:flex-col">
          <ListExperienceComponent metadata={metadata} id={0} />
          <ListExperienceComponent metadata={metadata} id={1} />
          <ListExperienceComponent metadata={metadata} id={2} />
        </div>
      </div>
    </>
  )
}

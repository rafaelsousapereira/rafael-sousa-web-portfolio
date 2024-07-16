import { metadata } from '../../data/data'
import { TableComponent } from './table/table-component'

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

        <TableComponent metadata={metadata} />
      </div>
    </>
  )
}

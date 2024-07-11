import { metadata } from "../../data/data"
import { TableExperience } from "./table/table-experience"

export const About = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 text-zinc-300 m-12">
        <p className="text-3xl font-extrabold uppercase">
          {metadata.about.titles[0]}
        </p>
        <p className="text-2xl text-center max-[425px]:text-xl">
          {metadata.about.description}
        </p>

        <TableExperience metadata={metadata} />
      </div>
    </>
  )
}
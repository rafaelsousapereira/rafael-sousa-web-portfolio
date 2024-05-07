import { metadata } from "../../data/data"

export const About = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 text-zinc-300 m-12"
      >
        <p className="text-3xl font-extrabold uppercase"
        >
          {metadata.about.titles[0]}
        </p>

        <p className="text-2xl text-center max-[425px]:text-xl">
          {metadata.about.description}
        </p>

        <p className="text-3xl text-center font-extrabold uppercase"
        >
          {metadata.about.titles[1]}
        </p>

        <ul>
          {metadata.about.experience.map((xp, index) => (
            <li key={index} className="text-2xl leading-10 max-[425px]:text-xl">
              <p>
                  {`${xp.substring(0, 29)}`}
                <span className="font-extralight">
                  {`${xp.substring(29)}`}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
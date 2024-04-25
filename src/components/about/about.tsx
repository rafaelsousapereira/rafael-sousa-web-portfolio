import { Link } from "react-router-dom"
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

        <p className="text-2xl text-center">
          {metadata.about.description}
        </p>

        <p className="text-3xl text-center font-extrabold uppercase"
        >
          {metadata.about.titles[1]}
        </p>

        <ul>
          {metadata.about.experience.map((xp, index) => (
            <li key={index} className="text-2xl leading-10">
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

      <Link to="/" className="fixed bottom-0 left-0 mx-10 my-5 text-sm font-extrabold text-zinc-600 hover:text-violet-600 underline"
        >
        Voltar
      </Link>
    </>
  )
}
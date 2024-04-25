import { Link } from "react-router-dom"

export const About = () => {
  return (
    <>
    <p className="flex justify-center m-12 text-lg font-extrabold text-zinc-300"

      >
        Sobre mim - Calma calabreso, estou trabalhando aqui ainda haha!!!
      </p>
      <Link to="/" className="mx-12 text-sm font-extrabold text-zinc-600 underline">
        Voltar
      </Link>
    </>
  )
}
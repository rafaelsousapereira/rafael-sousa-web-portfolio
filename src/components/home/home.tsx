import { metadata } from '../../data/data'
import { ImageHome } from "./image-home"
import { Footer } from "../footer/footer"
import { NavLink } from "../buttons/nav-link"

export const Home = () => {

  return (
    <div className="flex flex-col mx-12 gap-10 text-gray-300">
      <main className="grid lg:grid-cols-2">
        <section>
          <p className="flex gap-3 mt-9 mb-5 text-xl font-semibold">
            {metadata.greeting.description}
          </p>
          <p className="flex flex-col font-medium text-4xl uppercase">
            {metadata.person.name}
            <span className="font-black text-5xl">
              {metadata.person.sirName}
            </span>
          </p>
          <p className="text-left font-semibold text-lg">
            {metadata.person.position}
          </p>
        </section>

        <section>
          <ImageHome />
        </section>

        <nav className="flex gap-3 text-lg max-lg:flex-col max-lg:m-auto max-lg:mt-9">
        <NavLink to={"/about"} 
          className='text-center font-extrabold border-2 hover:text-violet-500 border-gray-300 hover:border-violet-500 p-2 rounded w-48 hover:bg-zinc-50/5 transition'
        >
          Saiba Mais
        </NavLink>
        </nav>
      </main>

      <Footer />
    </div>
  )
}
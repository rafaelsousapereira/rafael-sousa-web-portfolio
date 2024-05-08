import { metadata } from '../../data/data'
import { ImageHome } from "./image-home"
import { Footer } from "../footer/footer"
import { NavMenu } from "../buttons/nav-menu"

export const Home = () => {

  return (
    <div className="flex flex-col mx-12 gap-2 text-gray-300">
      <main className="grid lg:grid-cols-2">
        <section className='max-[425px]:m-auto'>
          <p className="flex mt-9 text-2xl font-semibold max-[425px]:text-sm">
            {metadata.greeting.description}
          </p>
          <p className="flex flex-col font-medium text-[3.2rem] leading-[3.8rem] uppercase max-[425px]:text-2xl">
            {metadata.person.name}
            <span className="font-black text-[4.2rem] leading-[3.8rem] max-[425px]:text-3xl">
              {metadata.person.sirName}
            </span>
          </p>
          <p className="text-left font-semibold text-[2.2rem] leading-[3.8rem] max-[425px]:text-lg">
            {metadata.person.position}
          </p>
        </section>

        <section>
          <ImageHome />
        </section>

        <nav className="flex gap-3 text-xl max-lg:flex-col max-lg:m-auto max-lg:mt-9">
        <NavMenu to={"/about"} 
          className='text-center font-extrabold border-2 hover:text-violet-500 border-gray-300 hover:border-violet-500 p-2 rounded w-48 hover:bg-zinc-50/5 transition'
        >
          Saiba Mais
        </NavMenu>
        </nav>
      </main>

      <Footer />
    </div>
  )
}
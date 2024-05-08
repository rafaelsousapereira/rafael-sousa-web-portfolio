import { metadata } from '../../data/data'
import { ImageHome } from "./image-home"
import { Footer } from "../footer/footer"
import { NavMenu } from "../buttons/nav-menu"

export const Home = () => {

  return (
    <div className="flex flex-col mx-16 gap-2 text-gray-300">
      <main className="grid lg:grid-cols-2">
        <section className='max-[425px]:m-auto'>

          <p className={`
            flex 
            mt-9 
            text-2xl 
            leading-[2.8rem]
            font-semibold 
            max-[425px]:text-sm
            max-[320px]:text-xs
          `}>
            {metadata.greeting.description}
          </p>

          <p className={`
            flex 
            flex-col 
            font-medium 
            text-4xl 
            leading-[2.8rem] 
            uppercase 
            max-[425px]:text-2xl
            max-[375px]:text-xl
            max-[320px]:text-lg
          `}>
            {metadata.person.name}
            <span className={`
              font-black 
              text-5xl 
              leading-[2.8rem] 
              max-[425px]:text-3xl
              max-[375px]:text-2xl
              max-[320px]:text-xl
            `}>
              {metadata.person.sirName}
            </span>
          </p>

          <p className={`
            text-left 
            font-semibold 
            text-2xl 
            leading-[2.8rem]
            max-[425px]:text-lg
            max-[375px]:text-base 
          `}>
            {metadata.person.position}
          </p>

        </section>

        <section>
          <ImageHome />
        </section>

        <nav className={`
          flex 
          gap-3 
          mt-4 
          text-xl 
          max-lg:flex-col 
          max-lg:m-auto 
          max-lg:mt-9
          `}>
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
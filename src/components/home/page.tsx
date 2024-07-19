import { metadata } from '../../data/infoPages'
import { ImageHome } from './image-home'
import { Footer } from '../footer/page'
import { Navbar } from '../header/navbar'

export const Home = () => {
  return (
    <div className="flex flex-col mx-8 gap-2 text-gray-300">
      <main className="grid lg:grid-cols-2">
        <section className="max-[425px]:m-auto">
          <p className="flex mt-9 mb-9 text-2xl font-extralight">
            {metadata.greeting.description}
          </p>

          <p className="flex flex-col font-light text-4xl uppercase max-sm:text-3xl">
            {metadata.person.name}{' '}
            <span className="font-extrabold text-5xl max-[425px]:text-3xl">
              {metadata.person.sirName}
            </span>
          </p>

          <p className="text-left font-semibold text-2xl text-violet-500 my-5  max-sm:text-lg">
            {' '}
            {metadata.person.position}
          </p>

          <span className="font-light">{metadata.person.description}</span>

          <nav className="flex gap-3 text-5xl mt-10">
            <Navbar
              className="flex text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-semibold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800  max-sm:justify-center"
              to={'about'}
              >
              Saiba Mais!
            </Navbar>
          </nav>
        </section>

        <div className='static'>
          <ImageHome />
        </div>
      </main>

      <Footer />
    </div>
  )
}

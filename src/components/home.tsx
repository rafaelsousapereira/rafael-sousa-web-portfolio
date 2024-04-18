import { ButtonGroup } from "./buttons/button-group"
import { metadata } from '../data/data'

export const Home = () => {
  return (
    <div className="flex flex-col mx-12 gap-10 text-violet-300">
      <div className="grid grid-cols-2">
        <section>
          <p className="flex gap-3 mt-9 mb-5 text-xl font-semibold">
            {metadata.description.greeting}
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
      </div>
      
      <nav className="flex gap-3 text-lg">
        <ButtonGroup>Baixe meu CV</ButtonGroup>
      </nav>
    </div>
  )
}
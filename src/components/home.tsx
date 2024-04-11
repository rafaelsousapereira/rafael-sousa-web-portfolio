import { ButtonGroup } from "./buttons/button-group"
import { SocialMediaLink } from "./buttons/social-media-links"

export const Home = () => {
  return (
    <>
      <div className="flex flex-col mx-12 gap-10 text-violet-300">
        <section>
          <p className="flex flex-col font-medium text-2xl mt-16 pt-9 uppercase">
            Rafael 
            <span className="font-black text-4xl">Sousa Pereira</span>
          </p>
          <p className="text-sm text-left">Desenvolvedor Full-Stack Freelancer</p>
        </section>

        <nav className="flex gap-3">
          <ButtonGroup>Baixe meu CV</ButtonGroup>
        </nav>
      </div>

      <div className="fixed bottom-0 right-0 mx-10 my-9">
        <SocialMediaLink />
      </div>
    </>
  )
}
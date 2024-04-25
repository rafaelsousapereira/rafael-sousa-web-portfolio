import { Github, Linkedin } from "lucide-react"
import { ComponentProps } from "react"
import { metadata } from "../../data/data"
import { NavLink } from "./nav-link"

interface SocialMediaLinkProps extends ComponentProps<"nav"> {}

export const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <nav {...props}>
      <div className="flex flex-col gap-3 bottom-0 justify-center mx-10 my-5">
        <div className="flex justify-center">
          <NavLink to={metadata.socialMedia.url.linkedin} target="_blank">
              <Linkedin />
          </NavLink>

          <NavLink to={metadata.socialMedia.url.github} target="_blank">
              <Github />
          </NavLink>
        </div>

        <p className="text-center">
          &copy; <span className="font-semibold">{new Date().getFullYear()}</span> - Desenvolvido por <span className="text-zinc-500 font-semibold underline hover:text-violet-500 cursor-pointer"> Rafael Sousa Pereira</span>. Todos os direitos reservados.
        </p>
      </div>
    </nav>
  )
}
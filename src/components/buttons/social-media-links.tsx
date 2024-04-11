import { Github, Linkedin } from "lucide-react"
import { NavLink } from "./nav-link"
import { ComponentProps } from "react"

interface SocialMediaLinkProps extends ComponentProps<"nav"> {}

export const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <nav {...props} 
      className="flex gap-3">
      <NavLink href="/linkedin">
        <Linkedin />
      </NavLink>
      <NavLink href="/github">
        <Github />
      </NavLink>
    </nav>
  )
}
import { Github, Linkedin } from "lucide-react"
import { ComponentProps } from "react"
import { metadata } from "../../data/data"
import { NavLink } from "./nav-link"

interface SocialMediaLinkProps extends ComponentProps<"nav"> {}

export const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <nav {...props} 
      className="flex gap-3">
      <NavLink to={metadata.socialMedia.url.linkedin} target="_blank">
          <Linkedin />
      </NavLink>
      <NavLink to={metadata.socialMedia.url.github} target="_blank">
          <Github />
      </NavLink>
    </nav>
  )
}
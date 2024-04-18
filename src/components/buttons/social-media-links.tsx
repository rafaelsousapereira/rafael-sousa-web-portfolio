import { Github, Linkedin } from "lucide-react"
import { NavLink } from "./nav-link"
import { ComponentProps } from "react"
import { metadata } from "../../data/data" 

interface SocialMediaLinkProps extends ComponentProps<"nav"> {}

export const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <nav {...props} 
      className="flex gap-3">
      <NavLink 
        href={metadata.socialMedia.url.linkedin} 
        target="_blank">
          <Linkedin />
      </NavLink>
      <NavLink 
        href={metadata.socialMedia.url.github} 
        target="_blank">
          <Github />
      </NavLink>
    </nav>
  )
}
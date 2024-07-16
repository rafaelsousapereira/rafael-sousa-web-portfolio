import { Github, Linkedin } from 'lucide-react'
import { metadata } from '../../data/data'
import { NavbarComponent } from '../header/navbar-component'
import { ComponentProps } from 'react'

interface FooterComponentProps extends ComponentProps<'nav'> { }

export const Footer = (props: FooterComponentProps) => {
  return (
    <footer>
      <nav {...props}>
        <div className="flex flex-col gap-3 bottom-0 justify-center m-5">
          <div className="flex justify-center">
            <NavbarComponent to={metadata.socialMedia.url.linkedin} target="_blank">
              <Linkedin size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </NavbarComponent>

            <NavbarComponent to={metadata.socialMedia.url.github} target="_blank">
              <Github size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </NavbarComponent>
          </div>

          <p className="text-center mt-8 max-[425px]:text-base max-[320px]:text-sm">
            &copy;{' '}
            <span className="font-semibold">{new Date().getFullYear()}</span> -
            Desenvolvido por{' '}
            <span className="text-zinc-500 font-semibold underline hover:text-violet-500 cursor-pointer">
              Rafael
            </span>
            . <br /> Todos os direitos reservados.
          </p>
        </div>
      </nav>
    </footer>
  )
}

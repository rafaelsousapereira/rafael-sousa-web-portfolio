"use client"

import { Github, Linkedin } from 'lucide-react'
import { metadata } from '../../data/infoPages'
import Navbar from '../navbar'
import { ComponentProps } from 'react'

interface FooterComponentProps extends ComponentProps<'nav'> { }

const Footer = (props: FooterComponentProps) => {
  return (
    <footer>
      <nav {...props}>
        <div className="flex flex-col gap-3 bottom-0 justify-center">
          <div className="flex justify-center">
            <Navbar to={metadata.socialMedia.url.linkedin} target='_blank'>
              <Linkedin size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </Navbar>

            <Navbar to={metadata.socialMedia.url.github} target='_blank'>
              <Github size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </Navbar>
          </div>

          <p className="text-center mt-2 max-[425px]:text-base max-[320px]:text-sm">
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

export default Footer
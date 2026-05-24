import { Github, Linkedin } from 'lucide-react'
import { metadata } from '@/data/infoPages'
import { ComponentProps } from 'react'

type FooterComponentProps = ComponentProps<'nav'>

const socialLinkClassName = 'nav-link-inactive p-2'

const Footer = (props: FooterComponentProps) => {
  return (
    <footer>
      <nav {...props}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <a
              href={metadata.socialMedia.url.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClassName}
              aria-label="LinkedIn"
            >
              <Linkedin size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </a>

            <a
              href={metadata.socialMedia.url.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClassName}
              aria-label="GitHub"
            >
              <Github size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground sm:text-base">
            &copy;{' '}
            <span className="font-semibold text-foreground">
              {new Date().getFullYear()}
            </span>{' '}
            - Desenvolvido por{' '}
            <span className="font-semibold text-foreground underline decoration-primary/50 underline-offset-2">
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

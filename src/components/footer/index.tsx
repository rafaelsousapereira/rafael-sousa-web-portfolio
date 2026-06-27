 'use client'

import { Github, Linkedin } from 'lucide-react'
import { getSiteContent } from '@/shared/content/site-content'
import { ComponentProps } from 'react'
import { useI18n } from '@/shared/providers/i18n-provider'

type FooterComponentProps = ComponentProps<'nav'>

const socialLinkClassName = 'nav-link-inactive p-2'

const Footer = (props: FooterComponentProps) => {
  const { locale, t } = useI18n()
  const { person, socialMedia } = getSiteContent(locale)

  return (
    <footer>
      <nav {...props}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <a
              href={socialMedia.url.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClassName}
              aria-label={t.social.linkedin}
            >
              <Linkedin size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </a>

            <a
              href={socialMedia.url.github}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClassName}
              aria-label={t.social.github}
            >
              <Github size={35} strokeWidth={1.5} absoluteStrokeWidth />
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground sm:text-base">
            &copy;{' '}
            <span className="font-semibold text-foreground">
              {new Date().getFullYear()}
            </span>{' '}
            - {t.footer.developedBy}{' '}
            <span className="font-semibold text-foreground underline decoration-primary/50 underline-offset-2">
              {person.shortName}
            </span>
            . <br /> {t.footer.rightsReserved}
          </p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer

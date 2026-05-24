'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavbarRoute from '@/components/navbar-routes'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('overflow-y-hidden')
    } else {
      document.documentElement.classList.remove('overflow-y-hidden')
    }

    return () => document.documentElement.classList.remove('overflow-y-hidden')
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
        <nav className="relative font-semibold text-foreground">
          <div className="page-container flex items-center justify-between gap-3 py-4">
            <NavbarRoute className="flex max-lg:hidden" />

            <button
              type="button"
              className="lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="size-9" />
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="fixed inset-0 z-40 bg-background/98 pt-16"
        >
          <button
            type="button"
            className="page-container absolute top-4 left-0"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="size-9" />
          </button>

          <NavbarRoute
            className="flex h-full flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          />
        </nav>
      )}
    </>
  )
}

export default Header

"use client"

import React, {  useEffect, useState,   } from 'react'
import { Menu, X } from 'lucide-react'
import NavbarRoute from '../navbar-routes'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    isMenuOpen
      ? document.documentElement.classList.add(
          'overflow-y-hidden',
          'max-h-0',
          'scrollbar-none',
        )
      : document.documentElement.classList.remove(
          'overflow-y-hidden',
          'max-h-0',
          'scrollbar-none',
        )

    return () =>
      document.documentElement.classList.remove(
        'overflow-y-hidden',
        'max-h-0',
        'scrollbar-none',
      )
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-10 bg-zinc-900/90">
        <nav className="relative text-gray-300 font-semibold">
          <div className="flex items-center justify-between gap-3 py-4 mx-4">
            <NavbarRoute className="flex max-lg:hidden" />

            <div className="hidden max-lg:block cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="text-4xl" />
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <nav className="absolute top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-slate-400 text-gray-900 font-extrabold z-[1]">
          <div className="hidden max-lg:block fixed top-0 cursor-pointer py-4 mx-4" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <X className="text-4xl mr-1" />
          </div>

          <NavbarRoute className="lg:hidden flex flex-col items-center justify-center h-full" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </nav>
      )}
    </>
  )
}

export default Header
import { Menu, X } from "lucide-react"
import logoIcon from "../assets/logo-site-icon.png"
import { NavLink } from "./buttons/nav-link"
import { useState } from "react"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLink = [
    { href: "#about-us", label: "Sobre" },
  ]

  return (
    <>
      <header className="bg-zinc-900/20">
        <nav 
          className="text-violet-300 font-semibold"
        >
          <div className="flex items-center justify-between py-3 mx-12">
            <img 
              className="w-8 h-8" 
              src={logoIcon} 
              alt="Logo letra R minúscula azul e fundo roxo" 
            />

            <ul className="flex max-lg:hidden">
              {navLink.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden max-lg:block cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-4xl" />
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <nav 
          className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-violet-300 text-violet-900 font-extrabold"
        >
          <div 
            className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="text-4xl mr-3" />
          </div>
            
          <ul className="lg:hidden flex flex-col items-center justify-center h-full">
            {navLink.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
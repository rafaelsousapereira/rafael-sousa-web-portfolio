import logoSiteIcon from "../assets/logo-site-icon.png"
import { NavLink } from "./nav-link"

export const Header = () => {
  return (
      <header className="flex justify-between items-center py-3 px-5 bg-zinc-900/20">
        <img src={logoSiteIcon} alt="Logo letra R minúscula azul e fundo roxo" />

        <nav className="flex gap-5 text-blue-200 font-semibold">
          <NavLink href="/about">Sobre</NavLink>
          <NavLink href="/project">Projetos</NavLink>
        </nav>
      </header>
  )
}
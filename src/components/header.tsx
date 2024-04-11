import logoSiteIcon from "../assets/logo-site-icon.png"
import { NavLink } from "./buttons/nav-link"

export const Header = () => {
  return (
    <header className="bg-zinc-900/20">
      <div className="flex justify-between items-center py-3 mx-12">
        <img className="w-8 h-8" src={logoSiteIcon} alt="Logo letra R minúscula azul e fundo roxo" />

        <nav className="flex gap-5 text-violet-300 font-semibold">
          <NavLink href="/about">Sobre</NavLink>
          <NavLink href="/project">Projetos</NavLink>
        </nav>
      </div>
    </header>
  )
}
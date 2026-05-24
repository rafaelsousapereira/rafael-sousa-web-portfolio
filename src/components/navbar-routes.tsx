import { ComponentProps } from 'react'
import { Contact, Home, User } from 'lucide-react'
import NavLink from '@/components/nav-link'

type NavbarRouteProps = ComponentProps<'ul'>

const NavbarRoute = (props: NavbarRouteProps) => {
  const routes = [
    { url: '/', label: 'Home', icon: <Home /> },
    { url: '/about', label: 'Sobre', icon: <User /> },
    { url: '/contact', label: 'Contato', icon: <Contact /> },
  ]

  return (
    <ul {...props}>
      {routes.map((route) => (
        <li key={route.url}>
          <NavLink href={route.url}>
            {route.icon} {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavbarRoute

import { ComponentProps } from 'react'
import { Navbar } from './navbar'
import { Contact, Home, User } from 'lucide-react'

interface NavBarProps extends ComponentProps<'ul'> {}

export const NavbarRoute = (props: NavBarProps) => {
  const routes = [
    { url: '/', label: 'Home', icon: <Home /> },
    { url: '/about', label: 'Sobre', icon: <User /> },
    { url: '/contact', label: 'Contato', icon: <Contact /> },
  ]

  return (
    <ul {...props}>
      {routes.map((route) => (
        <li key={route.url}>
          <Navbar to={route.url}>
            {route.icon} {route.label}
          </Navbar>
        </li>
      ))}
    </ul>
  )
}

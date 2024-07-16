import { ComponentProps } from 'react'
import { NavbarComponent } from './navbar-component'
import { Contact, Home, User } from 'lucide-react'

interface NavBarProps extends ComponentProps<'ul'> {}

export const NavbarRoutesComponent = (props: NavBarProps) => {
  const routes = [
    { url: '/', label: 'Home', icon: <Home /> },
    { url: '/about', label: 'Sobre', icon: <User /> },
    { url: '/contact', label: 'Contato', icon: <Contact /> },
  ]

  return (
    <ul {...props}>
      {routes.map((item) => (
        <li key={item.url}>
          <NavbarComponent to={item.url}>
            {item.icon} {item.label}
          </NavbarComponent>
        </li>
      ))}
    </ul>
  )
}

 'use client'

import { ComponentProps } from 'react'
import { Contact, Home, User } from 'lucide-react'
import NavLink from '@/components/nav-link'
import { useI18n } from '@/shared/providers/i18n-provider'

type NavbarRouteProps = ComponentProps<'ul'>

const NavbarRoute = (props: NavbarRouteProps) => {
  const { t } = useI18n()

  const routes = [
    { url: '/', label: t.nav.home, icon: <Home /> },
    { url: '/about', label: t.nav.about, icon: <User /> },
    { url: '/contact', label: t.nav.contact, icon: <Contact /> },
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

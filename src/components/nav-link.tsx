'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
}

const NavLink = ({
  href,
  className,
  target,
  rel,
  children,
  onClick,
  ...rest
}: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const secureRel =
    target === '_blank'
      ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ')
      : rel

  return (
    <Link
      href={href}
      className={cn(
        isActive ? 'nav-link-active' : 'nav-link-inactive',
        className,
      )}
      target={target}
      rel={secureRel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default NavLink

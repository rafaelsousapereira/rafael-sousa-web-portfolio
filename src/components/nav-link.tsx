'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
}

function normalizeHash(href: string): string | null {
  if (href.startsWith('/#')) {
    return href.slice(1)
  }

  if (href.startsWith('#')) {
    return href
  }

  return null
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
  const [hash, setHash] = useState('')
  const hrefHash = normalizeHash(href)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const isActive = hrefHash
    ? pathname === '/' && hash === hrefHash
    : pathname === href && hash === ''

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

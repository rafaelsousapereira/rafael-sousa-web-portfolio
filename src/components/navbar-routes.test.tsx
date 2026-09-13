import type { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import NavbarRoute from '@/components/navbar-routes'
import { I18nProvider } from '@/shared/providers/i18n-provider'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

vi.mock('next/link', () => ({
  default({
    href,
    children,
    ...props
  }: {
    href: string
    children: ReactNode
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  },
}))

describe('NavbarRoute', () => {
  it('points navigation to home section anchors', () => {
    render(
      <I18nProvider>
        <NavbarRoute />
      </I18nProvider>,
    )

    expect(screen.getByRole('link', { name: /Home/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /Sobre/ })).toHaveAttribute(
      'href',
      '/#about',
    )
    expect(screen.getByRole('link', { name: /Contato/ })).toHaveAttribute(
      'href',
      '/#contact',
    )
  })
})

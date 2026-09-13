import { describe, expect, it } from 'vitest'
import { defaultLocale, locales } from '@/shared/content/locales'
import { isLocale, resolveLocale } from '@/shared/content/locale-resolver'
import { getSiteContent } from '@/shared/content/site-content'

describe('locale resolver', () => {
  it('uses pt-BR as the default locale', () => {
    expect(defaultLocale).toBe('pt-BR')
    expect(locales).toEqual(['pt-BR', 'en-US'])
  })

  it('accepts supported locales', () => {
    expect(isLocale('pt-BR')).toBe(true)
    expect(isLocale('en-US')).toBe(true)
  })

  it('falls back when the value is missing or unknown', () => {
    expect(resolveLocale(null)).toBe('pt-BR')
    expect(resolveLocale('fr-FR')).toBe('pt-BR')
    expect(resolveLocale('en-US', 'pt-BR')).toBe('en-US')
  })
})

describe('site content resolution', () => {
  it('resolves important keys for the default locale', () => {
    const content = getSiteContent('pt-BR')

    expect(content.hero.name).toBe('Rafael Sousa Pereira')
    expect(content.experiences.length).toBeGreaterThan(0)
    expect(content.experiences[0]?.responsibilities?.length).toBeGreaterThan(1)
    expect(content.experiences[0]?.role).toContain('Desenvolvedor')
  })

  it('resolves the alternate locale without dropping experience data', () => {
    const content = getSiteContent('en-US')

    expect(content.experiences[0]?.role).toContain('Senior')
    expect(content.experiences[0]?.responsibilities?.length).toBeGreaterThan(1)
    expect(content.about.description).toMatch(/Software Engineer/)
  })
})

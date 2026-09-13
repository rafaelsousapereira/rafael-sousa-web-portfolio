import { describe, expect, it } from 'vitest'
import { formatEndYear } from '@/domain/services/format-end-year'

describe('formatEndYear', () => {
  it('returns an empty string when the year is missing', () => {
    expect(formatEndYear(undefined, 'Presente')).toBe('')
    expect(formatEndYear('   ', 'Presente')).toBe('')
  })

  it('keeps numeric years', () => {
    expect(formatEndYear('2025', 'Presente')).toBe('2025')
  })

  it('uses the localized present label for open-ended roles', () => {
    expect(formatEndYear('Presente', 'Presente')).toBe('Presente')
    expect(formatEndYear('Present', 'Present')).toBe('Present')
  })
})

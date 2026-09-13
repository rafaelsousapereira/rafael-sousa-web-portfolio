import { describe, expect, it } from 'vitest'
import type { Experience } from '@/domain/entities/experience'

describe('Experience entity', () => {
  it('accepts optional responsibilities', () => {
    const experience: Experience = {
      id: 'capgemini',
      company: 'Capgemini',
      role: 'Senior Backend Java Developer',
      startYear: 2025,
      endYear: 'Present',
      responsibilities: ['Design backend services'],
    }

    expect(experience.responsibilities).toHaveLength(1)
  })
})

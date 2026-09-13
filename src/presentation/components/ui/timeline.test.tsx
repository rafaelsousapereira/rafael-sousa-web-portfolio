import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Experience } from '@/domain/entities/experience'
import Timeline from '@/presentation/components/ui/timeline'
import { I18nProvider } from '@/shared/providers/i18n-provider'

const experiences: Experience[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: 'Desenvolvedor Backend Java Sênior',
    startYear: 2025,
    endYear: 'Presente',
    summary: 'Sistemas financeiros distribuídos',
    responsibilities: [
      'Projeto de serviços backend',
      'Integrações assíncronas',
    ],
  },
  {
    id: 'mobiis',
    company: 'Mobiis',
    role: 'Desenvolvedor Backend Java',
    startYear: 2024,
    endYear: '2025',
    summary: 'Logística e automação',
  },
]

function renderTimeline(items = experiences) {
  return render(
    <I18nProvider>
      <Timeline items={items} />
    </I18nProvider>,
  )
}

describe('Timeline', () => {
  it('renders company, role and years', () => {
    renderTimeline()

    expect(screen.getByText('Capgemini')).toBeInTheDocument()
    expect(screen.getByText('Desenvolvedor Backend Java Sênior')).toBeInTheDocument()
    expect(screen.getByText('2025 — Presente')).toBeInTheDocument()
    expect(screen.getByText('Mobiis')).toBeInTheDocument()
    expect(screen.getByText('2024 — 2025')).toBeInTheDocument()
  })

  it('renders multiple responsibilities', () => {
    renderTimeline()

    expect(screen.getByText('Projeto de serviços backend')).toBeInTheDocument()
    expect(screen.getByText('Integrações assíncronas')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('allows experiences without responsibilities', () => {
    renderTimeline([experiences[1]])

    expect(screen.getByText('Mobiis')).toBeInTheDocument()
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
  })
})

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ContactForm from '@/components/contact-form'
import type { ContactService } from '@/application/contact/contact-service'
import { I18nProvider } from '@/shared/providers/i18n-provider'

const toast = vi.hoisted(() => ({
  success: vi.fn(),
  error: vi.fn(),
  warning: vi.fn(),
}))

vi.mock('react-toastify', () => ({
  toast,
}))

function renderForm(contactService: ContactService) {
  return render(
    <I18nProvider>
      <ContactForm contactService={contactService} />
    </I18nProvider>,
  )
}

async function fillValidForm() {
  const user = userEvent.setup()

  await user.type(screen.getByLabelText('Digite seu nome'), 'Rafael Sousa')
  await user.type(screen.getByLabelText('Digite seu e-mail'), 'rafael@example.com')
  await user.type(screen.getByLabelText('Digite o assunto'), 'Oportunidade')
  await user.type(
    screen.getByLabelText('Digite sua mensagem'),
    'Olá, gostaria de conversar.',
  )

  return user
}

describe('ContactForm', () => {
  beforeEach(() => {
    toast.success.mockReset()
    toast.error.mockReset()
    toast.warning.mockReset()
  })

  it('renders name, email, subject and message fields', () => {
    renderForm({ send: vi.fn() })

    expect(screen.getByLabelText('Digite seu nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Digite seu e-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Digite o assunto')).toBeInTheDocument()
    expect(screen.getByLabelText('Digite sua mensagem')).toBeInTheDocument()
  })

  it('validates required fields and does not submit', async () => {
    const send = vi.fn()
    const user = userEvent.setup()
    renderForm({ send })

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    expect(await screen.findByText('Nome deve ter no mínimo 5 caracteres')).toBeInTheDocument()
    expect(screen.getByText('E-mail é obrigatório')).toBeInTheDocument()
    expect(screen.getByText('Assunto deve ter no mínimo 3 caracteres')).toBeInTheDocument()
    expect(screen.getByText('Mensagem deve conter no mínimo 5 caracteres')).toBeInTheDocument()
    expect(send).not.toHaveBeenCalled()
  })

  it('rejects an invalid email and requires a subject', async () => {
    const send = vi.fn()
    const user = userEvent.setup()
    renderForm({ send })

    await user.type(screen.getByLabelText('Digite seu nome'), 'Rafael Sousa')
    await user.type(screen.getByLabelText('Digite seu e-mail'), 'invalid')
    await user.type(screen.getByLabelText('Digite sua mensagem'), 'Mensagem válida aqui')
    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    expect(await screen.findByText('E-mail é obrigatório')).toBeInTheDocument()
    expect(screen.getByText('Assunto deve ter no mínimo 3 caracteres')).toBeInTheDocument()
    expect(send).not.toHaveBeenCalled()
  })

  it('sends the mapped payload and shows success', async () => {
    const send = vi.fn().mockResolvedValue({ ok: true })
    renderForm({ send })
    const user = await fillValidForm()

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    await waitFor(() => {
      expect(send).toHaveBeenCalledWith({
        name: 'Rafael Sousa',
        email: 'rafael@example.com',
        subject: 'Oportunidade',
        message: 'Olá, gostaria de conversar.',
      })
    })
    expect(toast.success).toHaveBeenCalled()
  })

  it('shows a loading state while the request is in flight', async () => {
    let resolveSend: (value: { ok: true }) => void = () => undefined
    const send = vi.fn(
      () =>
        new Promise<{ ok: true }>((resolve) => {
          resolveSend = resolve
        }),
    )
    renderForm({ send })
    const user = await fillValidForm()

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    expect(screen.getByRole('button', { name: 'Enviar mensagem' })).toHaveAttribute(
      'aria-busy',
      'true',
    )

    resolveSend({ ok: true })
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Enviar mensagem' })).toHaveAttribute(
        'aria-busy',
        'false',
      )
    })
  })

  it('shows an error when the service fails', async () => {
    const send = vi.fn().mockResolvedValue({
      ok: false,
      reason: 'send_failed',
      message: 'quota exceeded',
    })
    renderForm({ send })
    const user = await fillValidForm()

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('quota exceeded')
    })
  })

  it('handles missing configuration without calling a real provider', async () => {
    const send = vi.fn().mockResolvedValue({ ok: false, reason: 'config_missing' })
    renderForm({ send })
    const user = await fillValidForm()

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    await waitFor(() => {
      expect(toast.warning).toHaveBeenCalled()
    })
  })

  it('warns when the service reports a network failure', async () => {
    const send = vi.fn().mockResolvedValue({ ok: false, reason: 'network' })
    renderForm({ send })
    const user = await fillValidForm()

    await user.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    await waitFor(() => {
      expect(toast.warning).toHaveBeenCalled()
    })
    expect(toast.success).not.toHaveBeenCalled()
  })
})

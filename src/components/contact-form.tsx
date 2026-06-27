'use client'

import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { useTheme } from 'next-themes'
import { useI18n } from '@/shared/providers/i18n-provider'
import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import { Label } from '@/presentation/components/ui/label'
import { Textarea } from '@/presentation/components/ui/textarea'

const createContactFormSchema = (
  validation: {
    nameMin: string
    nameMax: string
    email: string
    messageMin: string
  },
) =>
  z.object({
    name: z.string().min(5, validation.nameMin).max(50, validation.nameMax),
    email: z.string().email(validation.email),
    message: z.string().min(5, validation.messageMin),
  })

type SubmitEmailFormSchema = z.infer<ReturnType<typeof createContactFormSchema>>

const readEmailJsConfig = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ''
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''

  const missingKeys = [
    !publicKey && 'NEXT_PUBLIC_EMAILJS_USER_ID',
    !serviceId && 'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    !templateId && 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
  ].filter((key): key is string => Boolean(key))

  return { publicKey, serviceId, templateId, missingKeys }
}

const ContactForm = () => {
  const { t } = useI18n()
  const { resolvedTheme } = useTheme()
  const submitEmailFormSchema = createContactFormSchema(t.contact.validation)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubmitEmailFormSchema>({
    resolver: zodResolver(submitEmailFormSchema),
    defaultValues: { email: '', name: '', message: '' },
  })

  const handleSendEmail = async (data: SubmitEmailFormSchema) => {
    const { publicKey, serviceId, templateId, missingKeys } = readEmailJsConfig()

    if (missingKeys.length > 0) {
      console.error(
        `[contact-form] EmailJS env vars ausentes: ${missingKeys.join(', ')}. ` +
          'Verifique .env.local ou as variáveis de ambiente da Vercel.',
      )
      toast.error(t.contact.error)
      return
    }

    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      to_name: t.contact.recipientName,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey })
      toast.success(t.contact.success)
      reset({ email: '', name: '', message: '' })
    } catch (error) {
      const emailJsError = error as { text?: string; message?: string } | null
      const message =
        emailJsError?.text || emailJsError?.message || t.contact.error
      console.error('[contact-form] EmailJS error:', error)
      toast.error(message)
    }
  }

  return (
    <div className="page-container py-8">
      <ToastContainer theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="mx-auto mt-4 max-w-md"
        noValidate
      >
        <fieldset disabled={isSubmitting}>
          <legend className="heading-page mb-2 w-full text-center">
            {t.contact.title}
          </legend>

          <p className="text-body mb-6 text-center">{t.contact.subtitle}</p>

          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name">{t.contact.nameLabel}</Label>
              <Input
                id="contact-name"
                type="text"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">{t.contact.emailLabel}</Label>
              <Input
                id="contact-email"
                type="email"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">{t.contact.messageLabel}</Label>
              <Textarea
                id="contact-message"
                rows={4}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? 'contact-message-error' : undefined
                }
                {...register('message')}
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              <Send className="size-5" strokeWidth={1.5} />
              {t.contact.submit}
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm


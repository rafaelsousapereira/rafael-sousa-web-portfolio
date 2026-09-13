'use client'

import { useEffect, useMemo } from 'react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import type { ContactService } from '@/application/contact/contact-service'
import {
  createContactSchema,
  toContactInput,
  type ContactFormValues,
} from '@/application/contact/contact-schema'
import { sendContactMessage } from '@/application/contact/send-contact-message'
import { useI18n } from '@/shared/providers/i18n-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type ContactFormProps = {
  contactService: ContactService
}

const emptyValues: ContactFormValues = {
  email: '',
  name: '',
  subject: '',
  message: '',
}

const ContactForm = ({ contactService }: ContactFormProps) => {
  const { t } = useI18n()

  const submitEmailFormSchema = useMemo(
    () => createContactSchema(t.contact.validation),
    [t.contact.validation],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    trigger,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(submitEmailFormSchema),
    defaultValues: emptyValues,
  })

  const hasFieldErrors = Object.keys(errors).length > 0

  useEffect(() => {
    if (!hasFieldErrors) {
      return
    }

    void trigger()
  }, [hasFieldErrors, submitEmailFormSchema, trigger])

  const handleSendEmail = async (data: ContactFormValues) => {
    const result = await sendContactMessage(
      contactService,
      toContactInput(data),
    )

    if (result.ok) {
      toast.success(t.contact.success)
      reset(emptyValues)
      return
    }

    if (result.reason === 'config_missing') {
      console.error(
        '[contact-form] Contact service configuration is missing public identifiers.',
      )
      toast.warning(t.contact.warning.configMissing)
      return
    }

    if (result.reason === 'network') {
      toast.warning(t.contact.warning.network)
      return
    }

    console.error('[contact-form] Contact send failed:', result.message)
    toast.error(result.message || t.contact.error)
  }

  return (
    <div className="page-container py-8">
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
              <Label htmlFor="contact-subject">{t.contact.subjectLabel}</Label>
              <Input
                id="contact-subject"
                type="text"
                aria-invalid={errors.subject ? true : undefined}
                aria-describedby={
                  errors.subject ? 'contact-subject-error' : undefined
                }
                {...register('subject')}
              />
              {errors.subject && (
                <p
                  id="contact-subject-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.subject.message}
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

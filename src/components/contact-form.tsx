'use client'

import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
const submitEmailFormSchema = z.object({
  name: z
    .string()
    .min(5, 'Nome deve ter no minímo 5 caracteres')
    .max(50, 'Nome deve conter no maxímo 50 caracteres'),
  email: z.string().email('Email é obrigatório'),
  message: z.string().min(5, 'Mensagem deve conter no minímo 5 caracteres'),
})

type SubmitEmailFormSchema = z.infer<typeof submitEmailFormSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm<SubmitEmailFormSchema>({
    resolver: zodResolver(submitEmailFormSchema),
    defaultValues: { email: '', name: '', message: '' },
  })

  const handleSendEmail = (data: SubmitEmailFormSchema) => {
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const SERVICE_ID: string | undefined =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
    const TEMPLATE_ID: string | undefined =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''

    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
      to_name: 'Rafael Sousa Pereira | Support',
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: USER_ID,
      })
      .then(() => {
        toast.success('E-mail enviado com sucesso !')
      })
      .catch(() => {
        toast.error('Erro ao enviar e-mail, Tente novamente')
      })
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', name: '', message: '' })
    }
  }, [formState, reset])

  return (
    <div className="page-container py-8">
      <ToastContainer theme="dark" />
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="mx-auto mt-4 max-w-md"
      >
        <fieldset>
          <legend className="heading-page mb-2 w-full text-center">
            Contato
          </legend>

          <p className="text-body mb-6 text-center">Me envie uma mensagem!</p>

          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Digite Seu Nome</Label>
              <Input
                id="contact-name"
                type="text"
                aria-invalid={errors.name ? true : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Digite Seu E-mail</Label>
              <Input
                id="contact-email"
                type="email"
                aria-invalid={errors.email ? true : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Digite Sua Mensagem</Label>
              <Textarea
                id="contact-message"
                rows={4}
                aria-invalid={errors.message ? true : undefined}
                {...register('message')}
              />
              {errors.message && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send className="size-5" strokeWidth={1.5} />
              Enviar Mensagem
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm

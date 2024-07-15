import { Mail, Send } from 'lucide-react'
import { InputComponent } from './input-component'
import { TextAreaComponent } from './textarea-componet'
import { ButtonComponent } from './button-component'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { LabelComponent } from './label-component'

const submitEmailFormSchema = z.object({
  name: z
    .string()
    .min(5, 'Nome deve ter no minímo 5 caracteres')
    .max(50, 'Nome deve conter no maxímo 50 caracteres'),
  email: z.string().email('Email é obrigatório'),
  message: z.string().min(5, 'Mensagem deve conter no minímo 5 caracteres'),
})

type SubmitEmailFormSchema = z.infer<typeof submitEmailFormSchema>

export const ContactForm = () => {
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

  const handleSubmitEmailForm = (data: SubmitEmailFormSchema) => {
    alert(`Nome: ${data.name}, ${data.email}, ${data.message}`)
    
    if (formState.isSubmitted) {
      alert("Mensagem enviada com sucesso!")
    } else {
      alert("Falha ao enviar mensagem. Tente novamente!")
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', name: '', message: '' })
    }
  }, [formState, reset])

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSubmitEmailForm)}
        className="max-w-md mx-auto mt-11"
      >
        <fieldset id="fieldset-header">
          <legend className="flex text-2xl text-violet-500 font-extrabold text-center my-8 mx-2">
            <Mail
              className="flex mr-1"
              size={30}
              strokeWidth={2.5}
              absoluteStrokeWidth
            />
            Entre em contato por e-mail
          </legend>

          <div className="max-sm:mx-5">

            <div className='relative z-0 w-full mb-6 group'>
              <InputComponent
                {...register('name')}
                id="event-subject"
                type="text"
                aria-invalid={errors.name?.message ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-0">
                  {errors.name?.message}
                </p>
              )}

              <LabelComponent>Digite Seu Nome</LabelComponent>
            </div>
            
            <div className='relative z-0 w-full mb-6 group'>
              <InputComponent
                {...register('email')}
                id="event-email"
                type="email"
                aria-invalid={errors.email?.message ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <LabelComponent>Digite Seu E-mail</LabelComponent>
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <TextAreaComponent
                {...register('message')}
                id="event-message"
                aria-invalid={errors.message?.message ? 'true' : 'false'}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message?.message}</p>
              )}
              <LabelComponent>Digite Sua Mensagem</LabelComponent>
            </div>

            <ButtonComponent type="submit">
              <Send
                className="flex justify-center my-1 mr-1"
                size={20}
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              Enviar Mensagem
            </ButtonComponent>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

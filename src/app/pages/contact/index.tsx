"use client"

import { Send } from 'lucide-react'
import InputForm from '../../../components/input-form'
import TextAreaForm from '../../../components/textarea-form'
import ButtonForm from '../../../components/button-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import LabelForm from '../../../components/label-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

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

    const USER_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
    const SERVICE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
    const TEMPLATE_ID: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""

    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
      to_name: 'Rafael Sousa Pereira | Support',
    }

    emailjs.init(USER_ID)

    emailjs.send(
      SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: USER_ID,
      }
    )
    .then((response) => {
        toast.success("E-mail enviado com sucesso !")
        console.log("'Message has been sent': ", response.status, response.text)
      })
      .catch((error) => {
        toast.error("Erro ao enviar e-mail, Tente novamente")
        console.error("Error sending message, try again later: ", error)
      }
    )
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', name: '', message: '' })
    }
  }, [formState, reset])

  return (
    <div>
      <ToastContainer theme='dark' />
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="max-w-md mx-auto mt-11"
      >
        <fieldset id="fieldset-header">
          <legend className="flex text-4xl  text-center text-violet-600 font-extrabold my-2">
            Contato
          </legend>

          <div className="max-sm:mx-5">
            <p className="text-center text-lg text-violet-400 font-normal mb-2">
            Me envie uma mensagem!
            </p>

            <div className='relative z-0 w-full mb-6 group'>
              <InputForm
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

              <LabelForm>Digite Seu Nome</LabelForm>
            </div>
            
            <div className='relative z-0 w-full mb-6 group'>
              <InputForm
                {...register('email')}
                id="event-email"
                type="email"
                aria-invalid={errors.email?.message ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <LabelForm>Digite Seu E-mail</LabelForm>
            </div>

            <div className='relative z-0 w-full mb-6 group'>
              <TextAreaForm
                {...register('message')}
                id="event-message"
                aria-invalid={errors.message?.message ? 'true' : 'false'}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message?.message}</p>
              )}
              <LabelForm>Digite Sua Mensagem</LabelForm>
            </div>

            <ButtonForm type="submit">
              <Send
                className="flex justify-center my-1 mr-1"
                size={20}
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              Enviar Mensagem
            </ButtonForm>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm
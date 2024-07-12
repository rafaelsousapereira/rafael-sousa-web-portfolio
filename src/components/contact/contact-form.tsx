import { Mail, Send } from "lucide-react"
import { InputComponent } from "./input-component"
import { TextAreaComponent } from "./textarea-componet"
import { ButtonComponent } from "./button-component"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from "react"

const submitEmailFormSchema = z.object({
  Email: z.string().email("Email é obrigatório"),
  Assunto: z.string()
    .min(5, "Assunto deve ter no minímo 5 caracteres")
    .max(50, "Assunto deve conter no maxímo 50 caracteres"),
  Mensagem: z.string().min(5, "Mensagem deve conter no minímo 5 caracteres"),
})

type SubmitEmailFormSchema = z.infer<typeof submitEmailFormSchema>

export const ContactForm = () => {
  const { register, handleSubmit, formState, formState: { errors }, reset } = useForm<SubmitEmailFormSchema>({
    resolver: zodResolver(submitEmailFormSchema),
    defaultValues: { Email: "",  Assunto: "", Mensagem: "", }
  })
  
  const handleSubmitEmailForm = (data: SubmitEmailFormSchema) => {
    console.log(data)
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ Email: "",  Assunto: "", Mensagem: "", });
    }
  }, [formState, reset]);

  return (
    <div>
      <form 
        onSubmit={handleSubmit(handleSubmitEmailForm)}
        className="max-w-md mx-auto mt-11"
      >
        <fieldset id="fieldset-header">
          <legend className="flex text-2xl text-violet-500 font-extrabold text-center my-8 mx-2"
          >
            <Mail className="flex mr-1" size={30} strokeWidth={2.5} absoluteStrokeWidth />Entre em contato por e-mail
          </legend>
            
            <div className="max-sm:mx-5">
              <InputComponent  
                { ...register("Email") } 
                id="event-email" 
                type="email" 
                aria-invalid={ errors.Email?.message ? "true" : "false" } 
              />
              {errors.Email && <p className="text-sm text-red-500">{errors.Email.message}</p>}

              <InputComponent 
                {...register("Assunto")} 
                id="event-subject" 
                type="text"
                aria-invalid={ errors.Assunto?.message ? "true" : "false" } 
              />
              {errors.Assunto && <p className="text-sm text-red-500 mt-0">{errors.Assunto?.message}</p>}

              <TextAreaComponent 
                {...register("Mensagem")} 
                id="event-message"
                aria-invalid={ errors.Mensagem?.message ? "true" : "false" } 
                />
                {errors.Mensagem && <p className="text-sm text-red-500">{errors.Mensagem?.message}</p>}
              
              <ButtonComponent type="submit">
                <Send className="flex justify-center my-1 mr-1" size={20} strokeWidth={1.5} absoluteStrokeWidth />
                Enviar
              </ButtonComponent>
            </div>

        </fieldset>
      </form>
    </div>
  )
}
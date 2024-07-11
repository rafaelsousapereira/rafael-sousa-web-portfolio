import { Mail, Send } from "lucide-react"
import { InputComponent } from "./input-component"
import { TextAreaComponent } from "./textarea-componet"
import { ButtonComponent } from "./button-component"

export const ContactForm = () => {
  return (
    <div>
      <form className="max-w-md mx-auto mt-11">
        <fieldset id="fieldset-header">
          <legend className="flex text-2xl text-violet-500 font-extrabold text-center my-8 mx-2"
          >
            <Mail className="flex justify-center mr-1" size={30} strokeWidth={2.5} absoluteStrokeWidth />Entre em contato por e-mail
          </legend>
            
            <div className="max-sm:mx-5">
              <InputComponent id="event-email" name="Email" type="email" />
              <InputComponent id="event-subject" name="Assunto" type="text" />
              <TextAreaComponent id="event-message" name="Mensagem" />
              <ButtonComponent>
              <Send
                className="flex justify-center my-1 mr-1"
                size={20}
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              Enviar
              </ButtonComponent>
            </div>
        </fieldset>
      </form>
    </div>
  )
}
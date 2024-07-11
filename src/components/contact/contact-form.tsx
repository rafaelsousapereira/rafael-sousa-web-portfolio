import { Mail } from "lucide-react"
import { InputComponent } from "./input-component"
import { TextAreaComponent } from "./textarea-componet"
import { ButtonComponent } from "./button-component"

export const ContactForm = () => {
  return (
    <div>
      <form className="max-w-md mx-auto mt-11">
        <fieldset id="fieldset-header">
          <legend className="flex text-3xl text-gray-500 font-extrabold text-center my-8"
          >
            <Mail className="flex justify-center my-1 mr-2" size={30} strokeWidth={2.5} absoluteStrokeWidth /> Entre em contato 
          </legend>
            
            <div className="max-sm:mx-5">
              <InputComponent id="event-email" name="Email" type="email" />
              <InputComponent id="event-subject" name="Assunto" type="text" />
              <TextAreaComponent id="event-message" name="Mensagem" />
              <ButtonComponent />
            </div>
        </fieldset>
      </form>
    </div>
  )
}
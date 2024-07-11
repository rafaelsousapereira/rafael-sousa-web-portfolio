import { InputComponent } from "./input-component"
import { TextAreaComponent } from "./textarea-componet"

export const ContactForm = () => {
  return (
    <div>
      <form className="max-w-md mx-auto mt-11">
        <fieldset id="fieldset-header">
          <legend className="text-3xl text-gray-500 font-extrabold text-center my-8">Contato</legend>
            
            <div className="max-sm:mx-5">
              <InputComponent id="event-email" name="Email" type="email" />
              <InputComponent id="event-subject" name="Assunto" type="text" />
              <TextAreaComponent id="event-message" name="Mensagem" />

              <button 
                className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-semibold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Enviar
              </button>
            </div>
        </fieldset>
      </form>
    </div>
  )
}
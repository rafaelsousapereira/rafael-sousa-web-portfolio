import { Send } from "lucide-react"
import { ComponentProps } from "react"

interface ButtonComponentProps extends ComponentProps<"button">{}

export const ButtonComponent = (buttonProps: ButtonComponentProps) => {
  return (
    <div>
      <button {...buttonProps}
        className="flex text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-semibold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        <Send
          className="flex justify-center my-1 mr-1"
          size={20}
          strokeWidth={1.5}
          absoluteStrokeWidth
        />
        Enviar
      </button>
    </div>
  )
}
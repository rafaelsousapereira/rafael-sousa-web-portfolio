import { ComponentProps } from "react"

interface TextAreaComponentProps extends ComponentProps<"textarea">{}

export const TextAreaComponent = (textareaProps: TextAreaComponentProps) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <textarea {...textareaProps}
        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" name={textareaProps.name} 
        id={textareaProps.id} 
        placeholder=" " 
        required
      />
      <label 
        className="peer-focus:font-semibold absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="event-message"
        >
          {textareaProps.name}
      </label>
    </div>
  )
}
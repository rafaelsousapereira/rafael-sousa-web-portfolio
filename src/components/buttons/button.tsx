import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = (props: ButtonProps) => {
  return (
      <button {...props} 
        className="font-extrabold border-2 hover:text-violet-500 border-gray-300 hover:border-violet-500 p-2 rounded w-48 hover:bg-zinc-50/5 transition" 
      > 
        {props.children}
      </button>
  )
}
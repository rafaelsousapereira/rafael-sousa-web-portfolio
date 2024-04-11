import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button {...props} 
        className="font-extrabold border hover:text-violet-600 border-violet-300 hover:border-violet-600 p-2 rounded w-48 hover:bg-zinc-50/5 transition" 
      > 
        {props.children}
      </button>
    </div>
  )
}
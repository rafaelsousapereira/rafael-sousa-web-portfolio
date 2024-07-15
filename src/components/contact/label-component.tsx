import { ComponentProps } from "react";

interface LabelComponentProps extends ComponentProps<'label'> {}

export const LabelComponent = (props: LabelComponentProps) => {
  return (
    <label
      className="peer-focus:font-semibold absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      htmlFor={props.id}
    >
      {props.children}
    </label>
  )
} 
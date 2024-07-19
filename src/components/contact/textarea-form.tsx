import { ComponentProps, ForwardedRef, forwardRef } from 'react'

interface TextAreaComponentProps extends ComponentProps<'textarea'> {}

export const TextAreaForm = forwardRef(
  (props: TextAreaComponentProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { ...textareaProps } = props

    return (
      <textarea
        {...textareaProps}
        ref={ref}
        className="block py-2.5 px-0 w-full text-lg text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
        name={textareaProps.name}
        id={textareaProps.id}
        placeholder=" "
      />
    )
  },
)

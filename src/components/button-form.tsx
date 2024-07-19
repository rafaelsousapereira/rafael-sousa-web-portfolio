import React from 'react'
import { ComponentProps } from 'react'

interface ButtonComponentProps extends ComponentProps<'button'> {}

const ButtonForm = (buttonProps: ButtonComponentProps) => {
  return (
    <div className="mt-5">
      <button
        {...buttonProps}
        className="flex text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-semibold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800  max-sm:justify-center"
      >
        {buttonProps.children}
      </button>
    </div>
  )
}

export default ButtonForm
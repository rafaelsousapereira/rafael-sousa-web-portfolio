import { ComponentProps } from 'react'
import { metadata } from '../../data/data'

interface ImageHomeProps extends ComponentProps<"img"> {}

export const ImageHome = (props: ImageHomeProps) => {
  return (
    <img
      {...props}
      className={
        "m-auto mt-14 w-[45%] rounded-full border-2 border-gray-300 aspect-w-16 aspect-h-9 object-cover transition-all duration-200 ease-in-out block hover:hue-rotate-7 hover:contrast-101 hover:saturate-200 transform hover:scale-110 hover:rotate-negative-2 max-lg:w-[65%] hover:border-violet-500 hover:opacity-75"
      }
      src={metadata.person.image}
      alt="Foto homem tocando guitarra"
    />
  )
}
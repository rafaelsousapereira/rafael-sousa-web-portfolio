import React from "react"
import { ComponentProps } from 'react'
import { metadata } from '../data/infoPages'

interface ImageHomeProps extends ComponentProps<'img'> {}

const ImageHome = (props: ImageHomeProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className={
        'static m-auto mt-14 w-[30%] rounded-lg border-2 border-gray-300 aspect-w-16 aspect-h-9 object-cover transition-all duration-200 ease-in-out block hover:hue-rotate-7 hover:contrast-101 hover:saturate-200 transform hover:scale-110 hover:rotate-negative-2 max-md:w-[60%] max-sm:w-[60%] hover:border-violet-500 hover:opacity-75'
      }
      src={metadata.person.image}
      alt="foto Rafael tocando guitarra"
    />
  )
}

export default ImageHome
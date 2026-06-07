import { ComponentProps } from 'react'
import { metadata } from '@/data/infoPages'
import { cn } from '@/shared/lib/utils'

type ImageHomeProps = ComponentProps<'img'>

const ImageHome = ({ className, ...props }: ImageHomeProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className={cn(
        'mx-auto mt-8 block w-full max-w-xs rounded-lg border-2 border-border object-cover sm:max-w-sm lg:mt-14',
        className,
      )}
      src={metadata.person.image}
      alt="foto Rafael tocando guitarra"
    />
  )
}

export default ImageHome

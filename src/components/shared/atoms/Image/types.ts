import { ImageProps, StaticImageData } from 'next/image'

import { ReactNode } from 'react'

export interface IImageProps extends Omit<ImageProps, 'src'> {
  className?: string
  errorComponent?: ReactNode
  src?: string | StaticImageData
}

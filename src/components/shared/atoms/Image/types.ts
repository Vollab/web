import { ImageProps, StaticImageData } from 'next/image'

export interface IImageProps extends Omit<ImageProps, 'src'> {
  src?: string | StaticImageData
  className?: string
}

'use client'

import { IImageProps } from './types'

import OriginalImage from 'next/image'

import { useEffect, useState } from 'react'

import { twMerge } from 'tailwind-merge'

export const Image = ({
  src,
  className,
  errorComponent,
  ...props
}: IImageProps) => {
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <>
      {errorComponent && error ? errorComponent : <></>}

      <OriginalImage
        width={500}
        height={500}
        draggable='false'
        onError={() => setError(true)}
        src={
          error
            ? '/images/image_placeholder.svg'
            : src || '/images/image_placeholder.svg'
        }
        className={twMerge(
          'object-cover',
          className,
          errorComponent && error ? 'hidden' : 'block'
        )}
        {...props}
      />
    </>
  )
}

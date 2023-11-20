'use client'

import { IImageProps } from './types'

import OriginalImage from 'next/image'

import { useEffect, useState } from 'react'

export const Image = ({ src, className, ...props }: IImageProps) => {
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <OriginalImage
      width={500}
      height={500}
      draggable='false'
      onError={() => setError(true)}
      src={error ? '/image_placeholder.svg' : src || '/image_placeholder.svg'}
      className={`object-cover ${className}`}
      {...props}
    />
  )
}

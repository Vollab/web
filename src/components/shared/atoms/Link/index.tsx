'use client'

import { ILinkProps } from './types'

import OriginalLink from 'next/link'

import { forwardRef } from 'react'

export const Link = forwardRef<any, ILinkProps>(
  ({ children, className, href, ...props }, ref) => (
    <OriginalLink
      ref={ref}
      href={href}
      {...props}
      className={`text-lg text-primary-500 hover:text-primary-800 ${className}`}
    >
      {children}
    </OriginalLink>
  )
)

Link.displayName = 'Link'

'use client'

import { IButtonProps } from './types'

import { twMerge } from 'tailwind-merge'

export const Button = ({
  children,
  variant,
  className,
  ...props
}: IButtonProps) => {
  const sharedTw =
    'text-gray-50 font-medium rounded-lg px-6 py-3 hover:contrast-125 transition-all duration-300'

  const variantsTw = {
    info: 'bg-info-500',
    error: 'bg-error-500',
    senary: 'bg-senary-500',
    warning: 'bg-warning-500',
    primary: 'bg-primary-500',
    quinary: 'bg-quinary-500',
    success: 'bg-success-500',
    tertiary: 'bg-tertiary-500',
    secondary: 'bg-secondary-500',
    quaternary: 'bg-quaternary-500',
    gray: 'bg-gray-100 text-gray-300 hover:bg-gray-300 hover:text-gray-50'
  }

  const buttonClassName = variant
    ? twMerge(sharedTw, variantsTw[variant], className)
    : className

  return (
    <button type='button' className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

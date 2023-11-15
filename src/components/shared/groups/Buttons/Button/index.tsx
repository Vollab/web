'use client'

import { IButtonProps } from './types'

import { twMerge } from 'tailwind-merge'

export const Button = ({
  color,
  variant,
  children,
  className,
  ...props
}: IButtonProps) => {
  const sharedTw =
    'border-2 shadow-sm font-medium rounded-3xl px-6 py-3 transition-all duration-300 hover:contrast-125'

  const variantsTw: Record<'primary' | 'secondary', any> = {
    primary: {
      info: 'bg-info-500 text-gray-50 border-info-500',
      error: 'bg-error-500 text-gray-50 border-error-500',
      senary: 'bg-senary-500 text-gray-50 border-senary-500',
      warning: 'bg-warning-500 text-gray-50 border-warning-500',
      primary: 'bg-primary-500 text-gray-50 border-primary-500',
      quinary: 'bg-quinary-500 text-gray-50 border-quinary-500',
      success: 'bg-success-500 text-gray-50 border-success-500',
      tertiary: 'bg-tertiary-500 text-gray-50 border-tertiary-500',
      secondary: 'bg-secondary-500 text-gray-50 border-secondary-500',
      quaternary: 'bg-quaternary-500 text-gray-50 border-quaternary-500',
      gray: 'bg-gray-100 text-gray-300 hover:bg-gray-300 hover:text-gray-50 border-gray-500'
    },
    secondary: {
      primary: 'border-2 border-primary-500 text-primary-500',
      info: 'border-2 border-info-500 text-info-500',
      error: 'border-2 border-error-500 text-error-500',
      senary: 'border-2 border-senary-500 text-senary-500',
      warning: 'border-2 border-warning-500 text-warning-500',
      quinary: 'border-2 border-quinary-500 text-quinary-500',
      success: 'border-2 border-success-500 text-success-500',
      tertiary: 'border-2 border-tertiary-500 text-tertiary-500',
      secondary: 'border-2 border-secondary-500 text-secondary-500',
      quaternary: 'border-2 border-quaternary-500 text-quaternary-500',
      gray: 'border-2 border-gray-500 text-gray-500'
    }
  }

  const getButtonTw = () => {
    let buttonTw = className

    if (color && variant === undefined)
      buttonTw = twMerge(sharedTw, variantsTw['primary'][color], className)

    if (color && variant)
      buttonTw = twMerge(sharedTw, variantsTw[variant][color], className)

    return buttonTw
  }

  return (
    <button type='button' className={getButtonTw()} {...props}>
      {children}
    </button>
  )
}

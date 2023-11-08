'use client'

import { IFieldProps } from './types'

import { LeftIcon } from './LeftIcon'
import { PasswordEye } from './PasswordEye'
import { useField } from './useField'

import { forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

export const Field = forwardRef<any, IFieldProps>(
  (
    {
      tws,
      type,
      error,
      className,
      icon: iconProp,
      color = 'primary',
      as: Element = 'label',
      ...props
    },
    ref
  ) => {
    const { useProps, styles } = useField({
      type,
      error,
      color,
      icon: iconProp
    })

    return (
      <Element
        className={twMerge(
          'shadow-sm relative flex items-center justify-center bg-gray-50 rounded-3xl px-2 border',
          error ? 'border-error-400' : 'border-gray-200',
          className
        )}
      >
        <LeftIcon {...useProps.leftIcon} />

        <input
          ref={ref}
          {...useProps.input}
          className={twMerge(
            'min-w-0 flex-1 px-2 py-3 bg-transparent outline-none placeholder:text-gray-300',
            tws?.input
          )}
          style={styles.input}
          {...props}
        />

        <PasswordEye {...useProps.passwordEye} />
      </Element>
    )
  }
)

Field.displayName = 'Field'

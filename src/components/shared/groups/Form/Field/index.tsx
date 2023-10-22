'use client'

import { IFieldProps } from './types'

import { LeftIcon } from './LeftIcon'
import { PasswordEye } from './PasswordEye'
import { useField } from './useField'

import { forwardRef } from 'react'

export const Field = forwardRef<any, IFieldProps>(
  ({ type, icon: iconProp, error, className, tw, ...props }, ref) => {
    const { useProps, styles } = useField({
      tw,
      type,
      error,
      className,
      icon: iconProp
    })

    return (
      <label {...useProps.field}>
        <>
          <LeftIcon {...useProps.leftIcon} />

          <input
            ref={ref}
            {...useProps.input}
            style={styles.input}
            {...props}
          />

          <PasswordEye {...useProps.passwordEye} />
        </>
      </label>
    )
  }
)

Field.displayName = 'Field'

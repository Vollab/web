'use client'

import { IFieldProps } from './types'

import { forwardRef, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { PrimaryButton } from 'src/components/shared/groups/Buttons/PrimaryButton'
import Tooltip from 'src/components/shared/molecules/Tooltip'

import { Danger, Hide, Show } from 'src/assets/icons'

export const Field = forwardRef<any, IFieldProps>(
  (
    {
      type,
      icon,
      error,
      borderTw,
      className,
      customTheme,
      insideButton,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const isFocusedColor =
      customTheme || (isFocused ? colors.primary[500] : colors.tertiary[400])

    const showPasswordColor =
      customTheme || (error ? colors.error[500] : isFocusedColor)

    const iconComponent = icon ? (
      icon({
        fill:
          customTheme ||
          (isFocused ? colors.primary[500] : colors.tertiary[400])
      })
    ) : (
      <></>
    )

    return (
      <div
        className={`
          relative flex items-center justify-center bg-gray-100 rounded-xl px-2
          ${className}
          ${borderTw ? borderTw : 'border border-transparent'}
        `}
        style={{
          borderWidth: borderTw ? undefined : 1,
          borderColor: borderTw
            ? undefined
            : customTheme || (error ? colors.error[400] : 'transparent')
        }}
      >
        {error ? (
          <Tooltip
            color={colors.error[500]}
            trigger={() => (
              <div>
                <Danger className='h-6' fill={colors.error[500]} />
              </div>
            )}
            content={() => (
              <span className='text-gray-50'>{error.message}</span>
            )}
          />
        ) : (
          iconComponent
        )}

        <input
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          className='min-w-0 text-lg flex-1 p-4 bg-transparent outline-none text-primary-500 placeholder:text-gray-300'
          {...props}
        />

        {type === 'password' && (
          <button type='button' onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? (
              <Hide fill={showPasswordColor} className='h-6' />
            ) : (
              <Show fill={showPasswordColor} className='h-6' />
            )}
          </button>
        )}

        {insideButton && (
          <PrimaryButton
            onClick={insideButton.onClick}
            className='absolute right-0 top-[50%] -translate-y-[50%]'
          >
            {insideButton.title}
          </PrimaryButton>
        )}
      </div>
    )
  }
)

Field.displayName = 'Field'

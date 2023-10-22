import { IProps, IUseFieldParams } from './types'

import { useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { twMerge } from 'tailwind-merge'

export const useField = ({
  tw,
  type,
  error,
  className,
  icon: iconProp,
  color: colorProp
}: IUseFieldParams) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const isFocusedColor = isFocused
    ? colors[colorProp][500]
    : colors[colorProp][400]
  const color = error ? colors.error[500] : isFocusedColor

  const styles = { input: { color } }

  const fieldDefaultTw =
    'shadow-sm relative flex items-center justify-center bg-gray-50 rounded-3xl px-2 border'

  const inputDefaultTw = `min-w-0 flex-1 px-2 py-3 bg-transparent outline-none placeholder:text-gray-300`

  const tws = {
    input: twMerge(inputDefaultTw, tw?.input),

    field: twMerge(
      fieldDefaultTw,
      error ? 'border-error-400' : 'border-gray-200',
      className
    )
  }

  const onEyeClick = () => {
    setShowPassword(prev => !prev)
  }

  const useProps: IProps = {
    field: { className: tws.field },

    leftIcon: { error, icon: iconProp ? iconProp({ fill: color }) : undefined },

    input: {
      className: tws.input,
      onBlur: () => setIsFocused(false),
      onFocus: () => setIsFocused(false),
      type: type === 'password' ? (showPassword ? 'text' : 'password') : type
    },

    passwordEye: {
      fill: color,
      show: showPassword,
      onClick: onEyeClick,
      enabled: type === 'password'
    }
  }

  return { useProps, styles }
}

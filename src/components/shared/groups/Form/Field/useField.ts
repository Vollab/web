import { IProps, IUseFieldParams } from './types'

import { useState } from 'react'

import { colors } from 'src/styles/custom/colors'

export const useField = ({
  type,
  error,

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

  const onEyeClick = () => {
    setShowPassword(prev => !prev)
  }

  const useProps: IProps = {
    leftIcon: { error, icon: iconProp ? iconProp({ fill: color }) : undefined },

    input: {
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

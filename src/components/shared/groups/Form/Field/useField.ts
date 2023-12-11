import { IProps, IUseFieldParams } from './types'

import { useEffect, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

export const useField = ({
  type,
  error,
  onBlurProp,
  onFocusProp,
  icon: iconProp,
  color: colorProp
}: IUseFieldParams) => {
  const [color, setColor] = useState(colors[colorProp][500])
  const [showPassword, setShowPassword] = useState(false)

  const styles = { input: { color } }

  const onEyeClick = () => {
    setShowPassword(prev => !prev)
  }

  useEffect(() => {
    if (error) setColor(colors.error[500])
    else setColor(colors[colorProp][500])
  }, [colorProp, error])

  const useProps: IProps = {
    leftIcon: { error, icon: iconProp ? iconProp({ fill: color }) : undefined },

    input: {
      onBlur: e => {
        setColor(error ? colors.error[500] : colors[colorProp][500])
        onBlurProp && onBlurProp(e)
      },
      onFocus: e => {
        setColor(error ? colors.error[500] : colors[colorProp][500])
        onFocusProp && onFocusProp(e)
      },
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

'use client'

import { IButtonProps } from '../types'

import { CSSProperties, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

export const PrimaryButton = ({
  disabled,
  className,
  color = 'primary',
  ...props
}: IButtonProps) => {
  const [isHover, setIsHover] = useState(false)
  const primaryColor = disabled ? colors[color][300] : colors[color][500]

  const tw = `text-gray-50 border`

  const style: CSSProperties = {
    borderColor: isHover && !disabled ? colors[color][400] : primaryColor,
    backgroundColor: isHover && !disabled ? colors[color][400] : primaryColor
  }

  return (
    <button
      style={style}
      type='button'
      disabled={disabled}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`px-4 py-2 rounded-md font-semibold  ${tw} ${className}`}
      {...props}
    />
  )
}

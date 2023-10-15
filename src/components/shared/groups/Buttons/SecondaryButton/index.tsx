'use client'

import { IButtonProps } from '../types'

import { CSSProperties, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

export const SecondaryButton = ({
  disabled,
  className,
  color = 'primary',
  ...props
}: IButtonProps) => {
  const [isHover, setIsHover] = useState(false)

  const styleColor = disabled ? colors[color][200] : colors[color][500]

  const tw = `text-gray-50 border`

  const style: CSSProperties = {
    color: isHover && !disabled ? colors.gray[50] : styleColor,
    borderColor: styleColor,
    backgroundColor: isHover && !disabled ? styleColor : colors.gray[50]
  }

  return (
    <button
      style={style}
      type='button'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`rounded-full py-1 px-3 font-semibold ${tw} ${className}`}
      {...props}
    />
  )
}

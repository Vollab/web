'use client'

import { ReactNode } from 'react'

import { IClassNameProps, TElement } from 'src/types/react.types'

import { MotionProps, motion } from 'framer-motion'

interface IMotionProps extends IClassNameProps {
  style?: any
  as?: TElement
  children?: ReactNode
  animation: MotionProps
}

export const Motion = ({
  style,
  children,
  className,
  animation,
  as: element = 'div'
}: IMotionProps) => {
  const MotionElement = (motion as any)[element]

  return (
    <MotionElement
      {...animation}
      className={className}
      style={style || animation.style || {}}
    >
      {children}
    </MotionElement>
  )
}

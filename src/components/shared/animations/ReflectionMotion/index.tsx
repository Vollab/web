import { Motion } from 'src/components/shared/atoms/Motion'

import { IClassNameProps } from 'src/types/react.types'

import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface IReflectionMotionProps extends IClassNameProps {
  skew?: number[]
  delay?: number
  x?: (string | number)[]
  opacityRotation?: number
  color?: [number, number, number]
  opacity?: [number, number, number, number, number]
}

export const ReflectionMotion = ({
  className,
  delay = 0,
  skew = [-20, -30],
  opacityRotation = -20,
  x = ['-200%', '250%'],
  color = [255, 255, 255],
  opacity = [1, 0.13, 0.13, 0.5, 0.1]
}: IReflectionMotionProps) => {
  const animation: MotionProps = {
    animate: { x, skew },
    transition: { repeat: Infinity, duration: 3, delay }
  }

  const colorString = color.toString()

  return (
    <Motion
      animation={animation}
      className={twMerge(
        'w-1/2 h-[200%] absolute left-0 -top-1/2 blur-[15px]',
        className
      )}
      style={{
        opacity: opacity[0],
        backgroundImage: `
        linear-gradient(
          ${opacityRotation}deg,
          rgba(${colorString}, ${opacity[1]}) 0%,
          rgba(${colorString}, ${opacity[2]}) 33%,
          rgba(${colorString}, ${opacity[3]}) 66%,
          rgba(${colorString}, ${opacity[4]}) 100%
        )
      `
      }}
    />
  )
}

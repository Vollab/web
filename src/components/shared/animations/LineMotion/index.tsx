import { ILineMotionProps } from './types'

import { Motion } from 'src/components/shared/atoms/Motion'

import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const LineMotion = ({
  className,
  delay = 0,
  duration = 3,
  opacity = [0.4, 1, 1, 1, 1]
}: ILineMotionProps) => {
  const containerMotion: MotionProps = {
    transition: { delay, duration, repeat: Infinity },
    animate: { x: ['-100%', '100%'], opacity: [1, 0] }
  }

  return (
    <Motion
      animation={containerMotion}
      className={twMerge('flex flex-col justify-evenly', 'flex-1', 'w-full')}
    >
      <div
        className={className}
        style={{
          borderRadius: 9999,
          opacity: opacity[0],
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255, 255, 255, ${opacity[1]}) 0%,
              rgba(255, 255, 255, ${opacity[2]}) 33%,
              rgba(255, 255, 255, ${opacity[2]}) 66%,
              rgba(255, 255, 255, ${opacity[2]}) 100%
            )
          `
        }}
      />
    </Motion>
  )
}

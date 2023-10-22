'use client'

import { IClassNameProps } from 'src/types/react.types'

import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface ILoadingProps extends IClassNameProps {
  size?: number
}

export const Loading = ({ size = 16, className }: ILoadingProps) => (
  <div className={twMerge('relative h-11 w-11', className)}>
    <div
      className='absolute left-1/2 top-1/2'
      style={{ transform: `translate(${-size / 2}px, ${-size / 2}px` }}
    >
      {new Array(8).fill('').map((_, index) => (
        <div
          key={index}
          className='absolute -translate-y-1/2 -translate-x-1/2'
          style={{ rotate: 45 * index + 'deg', height: size, width: size }}
        >
          <motion.div
            animate={{
              scale: [0, 0.8, 0],
              transition: {
                duration: 0.8,
                repeatDelay: 0.1,
                repeat: Infinity,
                delay: index * 0.1
              }
            }}
            className='bg-gray-50 h-2 w-2 rounded-full'
          />
        </div>
      ))}
    </div>
  </div>
)

'use client'

import { Rotation } from './Rotation'

import { Triangle } from 'src/assets/icons'

import { motion } from 'framer-motion'

interface IBgSectionProps {
  delay: number
  duration: number
}

export const BgSection = ({ delay, duration }: IBgSectionProps) => (
  <motion.div
    className='absolute h-full w-full overflow-visible'
    animate={{
      y: ['-100vh', '100vh'],
      opacity: [0.8, 1, 0.8],
      transition: {
        delay: delay,
        ease: 'linear',
        repeat: Infinity,
        duration: duration,
        repeatType: 'loop'
      }
    }}
  >
    <Rotation from={0} to={45} className='absolute top-0 -right-[25%]'>
      <Triangle className='h-[27vh] w-[62vw] overflow-visible rotate-[-20deg]' />
    </Rotation>

    <Rotation from={0} to={-45} className=' absolute top-1/4 -left-[20%]'>
      <Triangle className='h-[27vh] w-[62vw] overflow-visible rotate-[180deg] -translate-y-[30%]' />
    </Rotation>

    <Rotation from={45} to={90} className=' absolute top-2/4 -right-[10%]'>
      <Triangle className='h-[27vh] w-[62vw] overflow-visible rotate-[20deg] translate-y-[10%]' />
    </Rotation>

    <Rotation from={0} to={-45} className='absolute top-3/4 left-0'>
      <Triangle className='h-[27vh] w-[62vw] overflow-visible rotate-[80deg] translate-y-[10%] -translate-x-[30%]' />
    </Rotation>
  </motion.div>
)

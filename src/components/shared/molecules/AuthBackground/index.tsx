'use client'

import { Triangle } from 'src/assets/icons'

import { motion } from 'framer-motion'

const Rotation = ({ children, from, to, className }: any) => (
  <motion.div
    animate={{
      rotate: [from, to],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror'
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

const BgSection = ({ delay, duration }: any) => (
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

export const AuthBackground = () => {
  const duration = 15
  const secondDelay = duration / 2

  return (
    <div className='bg-primary-500 fixed top-0 left-0 w-screen h-screen -z-10'>
      <BgSection delay={0} duration={duration} />
      <BgSection delay={secondDelay} duration={duration} />
    </div>
  )
}

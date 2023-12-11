import { MotionProps } from 'framer-motion'

export const slideDuration = 1

export const slideAnimation = (dir = 1): MotionProps => ({
  variants: {
    initial: { x: `${dir * 100}%`, opacity: 0 },
    animate: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', duration: slideDuration, bounce: 0 }
    }
  },
  animate: 'animate',
  initial: 'initial'
})

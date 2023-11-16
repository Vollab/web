import { IComponentProps } from 'src/types/react.types'

import { motion } from 'framer-motion'

interface IRotationProps extends IComponentProps {
  to: number
  from: number
}

export const Rotation = ({ children, from, to, className }: IRotationProps) => (
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

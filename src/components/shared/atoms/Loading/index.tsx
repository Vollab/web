import { motion } from 'framer-motion'

export const Loading = () => (
  <div className='relative'>
    {new Array(8).fill('').map((_, index) => (
      <div
        key={index}
        className={`
          h-4 w-4
          absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
        `}
        style={{ rotate: 45 * index + 'deg' }}
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
)

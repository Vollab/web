import background from 'public/images/background.png'

import { Image } from 'src/components/shared/atoms/Image'

import { motion } from 'framer-motion'

export const Background = () => (
  <div className='fixed top-0 left-0 right-0 bottom-0 -z-10 w-screen h-screen'>
    <div className='bg-gradient-to-b from-gray-50 to-gray-50  h-[300vh] w-full absolute opacity-[0.989]' />

    <motion.div
      animate={{ y: ['0vh', '-100vh'] }}
      transition={{
        duration: 500,
        repeat: Infinity,
        repeatType: 'loop',
        type: 'tween',
        ease: 'linear'
      }}
      className='relative -z-20 border'
    >
      <Image
        alt=''
        quality={40}
        width={1920}
        height={960.4}
        src={background}
        className='-z-20 w-[100vw] h-[100vh]'
      />
    </motion.div>

    <motion.div
      animate={{ y: ['0%', '-100%'] }}
      transition={{
        duration: 500,
        repeat: Infinity,
        repeatType: 'loop',
        type: 'tween',
        ease: 'linear'
      }}
      className='absolute -z-20 border top-[100vh]'
    >
      <Image
        alt=''
        quality={40}
        width={1920}
        height={960.4}
        src={background}
        className='-z-20 w-[100vw] h-[100vh]'
      />
    </motion.div>
  </div>
)

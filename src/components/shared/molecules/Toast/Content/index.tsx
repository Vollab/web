import { useEffect, useState } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { IInfo } from '..'
import { AnimatePresence, motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

interface IContentProps {
  info?: IInfo
  index: number
}

const contentVariants = {
  error: 'Falha',
  success: 'Sucesso',
  info: 'Informação'
}

const titleContainerTv = tv({
  base: 'pb-3 border-b-2 w-full text-center relative z-20 flex items-center justify-center',
  defaultVariants: { variant: 'info' },
  variants: {
    variant: {
      success: 'border-b-success-500',
      error: 'border-b-error-500',
      info: 'border-b-info-500'
    }
  }
})

const titleTv = tv({
  base: 'text-lg font-semibold',
  defaultVariants: { variant: 'info' },
  variants: {
    variant: {
      success: 'text-success-500',
      error: 'text-error-500',
      info: 'text-info-500'
    }
  }
})

export const Content = ({ info, index }: IContentProps) => {
  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)

    setTimeout(
      () => {
        setShowing(false)
      },
      info?.timeout || 7000 + index * 300
    )
  }, [info?.timeout, info, index])

  return (
    <AnimatePresence>
      {showing && (
        <motion.li
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: (index * 300) / 1000 }
          }}
          exit={{ x: '100%', opacity: 0 }}
          initial={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className='p-4 rounded-lg flex flex-col items-center justify-center gap-3 max-w-[200px] overflow-hidden'
        >
          <div className='bg-opacity-[.9] bg-white backdrop-blur-[2px] border border-opacity-43 border-solid border-white shadow-md rounded-lg w-full h-full absolute z-10 top-0' />

          <div className={titleContainerTv({ variant: info?.variant })}>
            <span className={titleTv({ variant: info?.variant })}>
              {info?.title ||
                (info?.variant ? contentVariants[info.variant] : '')}
            </span>
          </div>

          <p className='relative z-20 text-gray-600 text-center'>
            {info?.content || 'Tente novamente mais tarde'}
          </p>

          <Button
            color={info?.variant}
            onClick={() => setShowing(false)}
            className='relative z-30 w-full py-2 rounded-lg'
          >
            Entendi!
          </Button>
        </motion.li>
      )}
    </AnimatePresence>
  )
}

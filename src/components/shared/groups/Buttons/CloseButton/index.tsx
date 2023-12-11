import { Button } from '../Button'

import { Close } from 'src/assets/icons'

import { TButtonProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

export const CloseButton = ({
  className,
  ...props
}: Omit<TButtonProps, 'color'>) => (
  <div className={twMerge('relative w-5 h-5', className)}>
    <Button
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 group/close'
      {...props}
    >
      <Close className='h-4 w-4 fill-error-100 group-hover/close:fill-error-500 group-hover/close:scale-110 transition-all duration-200' />
    </Button>
  </div>
)

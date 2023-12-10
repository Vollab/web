import { Button } from '../Button'

import { colors } from 'src/styles/custom/colors'

import { Close } from 'src/assets/icons'

import { TButtonProps } from 'src/types/react.types'

export const CloseButton = (props: Omit<TButtonProps, 'color'>) => (
  <Button className='p-0 w-8 h-8' {...props}>
    <Close className='h-4 w-4' fill={colors.error[500]} />
  </Button>
)

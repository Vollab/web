import { Button } from '../Button'

import { colors } from 'src/styles/custom/colors'

import { Add } from 'src/assets/icons/Add'

import { TButtonProps } from 'src/types/react.types'

export const AddButton = (props: Omit<TButtonProps, 'color'>) => (
  <Button color='success' className='p-0 w-8 h-8' {...props}>
    <Add className='h-4 w-4' fill={colors.gray[50]} />
  </Button>
)

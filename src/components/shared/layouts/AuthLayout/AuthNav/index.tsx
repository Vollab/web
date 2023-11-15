import { Button } from '../../../groups/Buttons/Button'

import { colors } from 'src/styles/custom/colors'

import { Arrow } from 'src/assets/icons'

import { TButtonProps } from 'src/types/react.types'

export interface IAuthNavProps {
  onBackClick: TButtonProps['onClick']
}

export const AuthNav = ({ onBackClick }: IAuthNavProps) => (
  <nav className='absolute top-0 left-0 w-full px-2 py-2'>
    <Button className='p-2' onClick={onBackClick}>
      <Arrow className='h-5 w-5' fill={colors.gray[50]} dir='left' />
    </Button>
  </nav>
)

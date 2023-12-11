import { IFooterProps } from './types'

import { Button } from '../../../Buttons/Button'

import { LinesMotion } from 'src/components/shared/animations/LinesMotion'

import { CheckMark } from 'src/assets/icons'

export const Footer = ({ onConfirmClick }: IFooterProps) => (
  <footer className='h-[73px] flex items-center justify-center bg-primary-500 relative'>
    <Button
      onClick={onConfirmClick}
      className='absolute z-20 w-[88px] h-[88px] flex items-center justify-center rounded-full right-[22px] bottom-[19px] bg-success-500'
    >
      <CheckMark className='w-[25px] h-[22px]' fill='#fff' />
    </Button>

    <LinesMotion />

    <span className='relative z-10 font-secondary font-[900] text-[18px] leading-[21px] text-white'>
      CLIQUE E CONFIRME
    </span>
  </footer>
)

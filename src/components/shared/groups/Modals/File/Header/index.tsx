import { IHeaderProps } from './types'

import { Button } from '../../../Buttons/Button'

import { LineMotion } from 'src/components/shared/animations/LineMotion'

import { Close } from 'src/assets/icons'
import { Reload } from 'src/assets/icons/Reload'

export const Header = ({ closeModal, onReloadClick }: IHeaderProps) => (
  <header className='bg-primary-400 h-[53px] flex items-center justify-center'>
    <Button onClick={closeModal} className='h-full px-[27px]'>
      <Close className='h-[16px] w-[15px]' fill='#FFFFFF' />
    </Button>

    <span className='font-secondary font-[500] text-[18px] leading-[21px] text-[#FFE0E2] flex-1 pr-[27px] text-center'>
      arraste para ajustar
    </span>

    <Button
      onClick={onReloadClick}
      className='overflow-hidden relative flex items-center justify-center gap-[7px] h-full rounded-bl-[24px] pr-[12px] pl-[10px] bg-warning-500'
    >
      <Reload className='h-[15px] w-[15px]' fill='#FFFFFF' />

      <div className='absolute left-0 h-full w-full flex flex-col justify-evenly'>
        <LineMotion className='w-[40%] h-[12px]' duration={2} delay={0.3} />
        <LineMotion className='w-[30%] h-[12px]' duration={2.3} />
        <LineMotion className='w-{20%} h-[12px]' duration={2.4} delay={0.1} />
      </div>

      <span className='font-secondary font-[700] text-[16px] leading-[19px] text-[#fff] flex items-center justify-center h-full'>
        carregar
      </span>
    </Button>
  </header>
)

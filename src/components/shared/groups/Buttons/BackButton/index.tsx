'use client'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Arrow, ISimpleArrowProps } from 'src/assets/icons'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

export interface IBackButtonProps extends IClassNameProps {
  fill?: string
  arrowTw?: string
  dir?: ISimpleArrowProps['dir']
}

export const BackButton = ({
  dir,
  fill,
  arrowTw,
  className
}: IBackButtonProps) => {
  const { back } = useRouter()

  const onBackClick = () => {
    back()
  }

  return (
    <Button onClick={onBackClick} className={twMerge('flex gap-1', className)}>
      <Arrow
        dir={dir || 'left'}
        fill={fill || colors.primary[500]}
        className={twMerge('h-5 w-5', arrowTw)}
      />
    </Button>
  )
}

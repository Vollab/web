'use client'

import { Button } from '../Button'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Avatar } from 'src/assets/icons'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IAvatarButtonProps extends IClassNameProps {
  fill?: string
  route: string
  avatar?: string
}

export const AvatarButton = ({
  route,
  avatar,
  className,
  fill = colors.primary[500]
}: IAvatarButtonProps) => {
  const { push } = useRouter()

  const onSeeProfileClick = () => {
    push(route)
  }

  return (
    <Button
      onClick={onSeeProfileClick}
      className={twMerge(
        'text-left text-primary-500 text-lg font-medium justify-self-end',
        className
      )}
    >
      <Avatar src={avatar} fill={fill} className='h-full w-full rounded-full' />
    </Button>
  )
}

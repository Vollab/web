'use client'

import { Button } from '../Button'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Avatar } from 'src/assets/icons'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IAvatarButtonProps extends IClassNameProps {
  route: string
  avatar?: string
}

export const AvatarButton = ({
  route,
  avatar,
  className
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
      <div className='h-full w-full bg-gray-50 rounded-full border border-gray-50 p-[1px]'>
        <Avatar
          src={avatar}
          className='h-full w-full'
          fill={colors.tertiary[500]}
        />
      </div>
    </Button>
  )
}

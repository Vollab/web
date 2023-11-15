'use client'

import { Button } from '../Button'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Avatar } from 'src/assets/icons'

interface IAvatarButtonProps {
  route: string
  avatar?: string
}

export const AvatarButton = ({ route, avatar }: IAvatarButtonProps) => {
  const { push } = useRouter()

  const onSeeProfileClick = () => {
    push(route)
  }

  return (
    <Button
      onClick={onSeeProfileClick}
      className='text-left text-primary-500 text-lg font-medium justify-self-end'
    >
      {avatar ? (
        <Image alt='avatar' src={avatar} className='h-11 w-11 rounded-full' />
      ) : (
        <div className='h-14 w-14 bg-gray-50 rounded-full border border-gray-50 p-[1px]'>
          <Avatar className='h-full w-full' fill={colors.tertiary[500]} />
        </div>
      )}
    </Button>
  )
}

'use client'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'

import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'

import { useDemandContext } from 'src/contexts/Demand'

export const OrdererAvatar = () => {
  const { demand } = useDemandContext()
  const { data: avatarData } = useAvatar({ id: demand?.orderer.id })

  return (
    <AvatarButton
      className='h-16 w-16 row-span-2'
      avatar={avatarData?.avatar}
      route={`/users/${demand?.orderer.id}`}
    />
  )
}

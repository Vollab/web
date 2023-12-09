'use client'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'

import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'

import { useDemandContext } from 'src/contexts/Demand'

export const OrdererAvatar = () => {
  const { demand } = useDemandContext()

  const { data: avatarData } = useAvatar({ id: demand?.orderer.id })

  return (
    <AvatarButton
      avatar={avatarData?.avatar}
      route={`/users/${demand?.orderer.id}`}
    />
  )
}

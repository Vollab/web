import { useRouter } from 'next/navigation'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Avatar } from 'src/assets/icons'

export const AvatarButton = () => {
  const { push } = useRouter()
  const { data } = useCurrentUser()
  const { data: avatarData } = useAvatar({ id: data?.user.id })

  const onProfileClick = () => {
    push('/profile')
  }

  return (
    <Button onClick={onProfileClick}>
      <Avatar
        src={avatarData?.avatar}
        fill={colors.primary[500]}
        className='h-12 w-12'
      />
    </Button>
  )
}

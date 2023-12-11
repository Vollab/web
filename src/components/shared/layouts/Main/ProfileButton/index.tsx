import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Profile } from 'src/assets/icons'

export const ProfileButton = ({
  fill = colors.gray[50]
}: {
  fill?: string
}) => {
  const { push } = useRouter()

  const onProfileClick = () => {
    push('/profile')
  }

  return (
    <Button
      onClick={onProfileClick}
      className='py-4 w-full flex items-center justify-center'
    >
      <Profile fill={fill} className='h-6 w-6' />
    </Button>
  )
}

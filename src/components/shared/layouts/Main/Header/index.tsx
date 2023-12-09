import { AvatarButton } from '../AvatarButton'

import { useRouter } from 'next/navigation'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { colors } from 'src/styles/custom/colors'

import { Loading } from 'src/components/shared/atoms/Loading'
import { Button } from 'src/components/shared/groups/Buttons/Button'

import { queryClient } from 'src/contexts/ReactQuery'

import { infos } from 'src/static/infos'

import { Logout } from 'src/assets/icons'

export const Header = () => {
  const { push } = useRouter()
  const { data } = useCurrentUser()

  const user = data?.user

  const onLogoutClick = () => {
    document.cookie =
      'session_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie =
      'session_refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    queryClient.invalidateQueries('current-user')

    push('/sign-in')
  }

  return (
    <header className='flex p-4 items-center shadow-md fixed top-0 left-0 right-0 bg-gray-50 z-10'>
      {user ? (
        <>
          <AvatarButton />

          <div className='flex flex-col ml-4 gap-1'>
            <span className='font-semibold text-lg'>
              Olá, {user?.name?.split(' ')[0]}
            </span>

            {user?.role && (
              <span
                className='font-medium'
                style={{ color: infos.roles[data.user.role].color }}
              >
                {infos.roles[user.role].label}
              </span>
            )}
          </div>

          <Button className='ml-auto' onClick={onLogoutClick}>
            <Logout className='h-5 w-5 stroke-gray-500 hover:stroke-error-500' />
          </Button>
        </>
      ) : (
        <Loading fill={colors.primary[500]} />
      )}
    </header>
  )
}

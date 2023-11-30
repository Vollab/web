'use client'

import { Image } from '../../atoms/Image'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useUserContext } from 'src/contexts/User'

import { infos } from 'src/static/infos'

import { useSignOut } from 'src/hooks/api/useSignOut'

import { Avatar } from 'src/assets/icons'
import { House } from 'src/assets/icons/House'
import { Logout } from 'src/assets/icons/Logout'
import { Profile } from 'src/assets/icons/Profile'
import { Projects } from 'src/assets/icons/Projects'

import { IChildrenProps } from 'src/types/react.types'

interface IMainLayoutProps extends IChildrenProps {
  hideHeader?: boolean
}

export const MainLayout = ({
  children,
  hideHeader = false
}: IMainLayoutProps) => {
  const { push } = useRouter()
  const { mutate } = useSignOut()
  const { user } = useUserContext()

  const onLogoutClick = () => {
    mutate({})
    push('/sign-in')
  }

  const onMyDemandsClick = () => {
    push('/my-demands')
  }

  const onDemandsClick = () => {
    push('/demands')
  }

  const onProfileClick = () => {
    push('/profile')
  }

  return (
    <>
      {!hideHeader && (
        <header className='flex p-4 items-center shadow-md fixed top-0 left-0 right-0 bg-gray-50 z-10'>
          <Button onClick={onProfileClick}>
            {user?.avatar ? (
              <Image
                alt='avatar'
                src={user.avatar}
                className='h-12 w-12 rounded-full object-cover border border-primary-500'
              />
            ) : (
              <Avatar fill={colors.primary[500]} className='h-12 w-12' />
            )}
          </Button>

          <div className='flex flex-col ml-4 gap-1'>
            <span className='font-semibold text-lg'>
              Olá, {user?.name?.split(' ')[0]}
            </span>

            {user?.role && (
              <span
                className='font-medium'
                style={{ color: infos.roles[user.role].color }}
              >
                {infos.roles[user.role].label}
              </span>
            )}
          </div>

          <Button className='ml-auto' onClick={onLogoutClick}>
            <Logout className='h-5 w-5 stroke-gray-500 hover:stroke-error-500' />
          </Button>
        </header>
      )}

      {children}

      <nav className='bg-primary-500 fixed bottom-0 left-0 right-0 z-10'>
        <ul className='flex items-center justify-center'>
          <li className='flex-1'>
            <Button
              onClick={onMyDemandsClick}
              className='py-4 w-full flex items-center justify-center'
            >
              <Projects fill={colors.gray[50]} className='h-6 w-6' />
            </Button>
          </li>

          <li className='flex-1'>
            <Button
              onClick={onDemandsClick}
              className='py-4 w-full flex items-center justify-center'
            >
              <House fill={colors.gray[50]} className='h-7 w-7' />
            </Button>
          </li>

          <li className='flex-1'>
            <Button
              onClick={onProfileClick}
              className='py-4 w-full flex items-center justify-center'
            >
              <Profile fill={colors.gray[50]} className='h-6 w-6' />
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'

import { Avatar } from 'src/assets/icons'
import { House } from 'src/assets/icons/House'
import { Logout } from 'src/assets/icons/Logout'
import { Profile } from 'src/assets/icons/Profile'
import { Projects } from 'src/assets/icons/Projects'

import { IChildrenProps } from 'src/types/react.types'

export const MainLayout = ({ children }: IChildrenProps) => {
  return (
    <>
      <header className='flex p-4 items-center shadow-md fixed top-0 left-0 right-0 bg-gray-50'>
        <Avatar fill={colors.primary[500]} className='h-12 w-12' />

        <div className='flex flex-col ml-4 gap-1'>
          <span className='font-semibold text-lg'>Olá, Miguel</span>
          <span className='text-secondary-500 font-medium'>Candidato</span>
        </div>

        <Button className='ml-auto'>
          <Logout className='h-5 w-5 stroke-gray-500 hover:stroke-red-500' />
        </Button>
      </header>

      {children}

      <nav className='bg-primary-500 fixed bottom-0 left-0 right-0'>
        <ul className='flex items-center justify-center'>
          <li className='flex-1'>
            <Button className='py-4 w-full flex items-center justify-center'>
              <Projects fill={colors.gray[50]} className='h-6 w-6' />
            </Button>
          </li>

          <li className='flex-1'>
            <Button className='py-4 w-full flex items-center justify-center'>
              <House fill={colors.gray[50]} className='h-7 w-7' />
            </Button>
          </li>

          <li className='flex-1'>
            <Button className='py-4 w-full flex items-center justify-center'>
              <Profile fill={colors.gray[50]} className='h-6 w-6' />
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

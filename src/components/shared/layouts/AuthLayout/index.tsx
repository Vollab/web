import { AuthBackground } from '../../molecules/AuthBackground'

import { colors } from 'src/styles/custom/colors'

import { RoundedTop } from 'src/assets/icons/RoundedTop'
import { Logo } from 'src/assets/images'

import { IChildrenProps } from 'src/types/react.types'

export const AuthLayout = ({ children }: IChildrenProps) => (
  <main className='flex flex-col h-screen overflow-x-hidden'>
    <AuthBackground />

    <header className='flex flex-1 items-center justify-center w-full'>
      <Logo className='h-16' />
    </header>

    <div className='bg-gray-50 relative w-screen'>
      <RoundedTop fill={colors.gray[50]} />

      {children}
    </div>
  </main>
)

import { AuthBackground } from '../../molecules/AuthBackground'

import { ReactNode } from 'react'

import { colors } from 'src/styles/custom/colors'

import { RoundedTop } from 'src/assets/icons/RoundedTop'
import { Logo } from 'src/assets/images'

interface IAuthLayoutProps {
  title: string
  children: ReactNode
}

export const AuthLayout = ({ children, title }: IAuthLayoutProps) => (
  <main className='flex flex-col h-screen overflow-x-hidden'>
    <AuthBackground />

    <header className='flex flex-1 items-center justify-center flex-col w-full px-4 space-y-4'>
      <Logo className='h-16' />

      <h1 className='text-h6 text-center font-semibold text-gray-50'>
        {title}
      </h1>
    </header>

    <div className='bg-gray-50 relative w-screen py-2'>
      <RoundedTop fill={colors.gray[50]} />

      {children}
    </div>
  </main>
)

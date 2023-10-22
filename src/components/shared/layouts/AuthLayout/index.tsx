import { AuthBackground } from '../../molecules/AuthBackground'
import { AuthNav, IAuthNavProps } from './AuthNav'

import { colors } from 'src/styles/custom/colors'

import { RoundedTop } from 'src/assets/icons/RoundedTop'
import { Logo } from 'src/assets/images'

import { IChildrenProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IAuthLayoutProps extends IChildrenProps, Partial<IAuthNavProps> {
  title?: string
}

export const AuthLayout = ({
  title,
  children,
  className,
  onBackClick
}: IAuthLayoutProps) => (
  <>
    {onBackClick && <AuthNav onBackClick={onBackClick} />}

    <main className='flex flex-col h-screen overflow-x-hidden'>
      <AuthBackground />

      <header className='flex flex-1 items-center justify-center flex-col w-full px-4 space-y-4'>
        <Logo className='h-16' />

        {title && (
          <h1 className='text-h6 text-center font-semibold text-gray-50'>
            {title}
          </h1>
        )}
      </header>

      <div className={twMerge('relative w-screen py-2 bg-gray-50', className)}>
        <RoundedTop fill={colors.gray[50]} />

        {children}
      </div>
    </main>
  </>
)

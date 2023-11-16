import { AuthBackground } from '../../molecules/AuthBackground'
import { AuthNav, IAuthNavProps } from './AuthNav'

import { colors } from 'src/styles/custom/colors'

import { RoundedTop } from 'src/assets/icons/RoundedTop'
import { Logo } from 'src/assets/images'

import { IComponentProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IAuthLayoutProps extends IComponentProps, Partial<IAuthNavProps> {
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

    <main
      className='
        flex flex-col h-screen overflow-x-hidden bg-gray-50 items-center justify-center
        hxs:bg-transparent
        2sm:grid 2sm:grid-cols-9
      '
    >
      <AuthBackground
        className='
          hidden
          hxs:block
        '
      />

      <header
        className='
          flex items-center justify-center flex-col w-full px-4 space-y-4
          hxs:flex-1
          2sm:h-full 2sm:order-2 2sm:col-span-4
        '
      >
        <Logo className='h-16' />

        {title && (
          <h1
            className='
              text-h6 text-center font-semibold text-primary-500
              hxs:text-gray-50
            '
          >
            {title}
          </h1>
        )}
      </header>

      <div
        className={twMerge(
          `
            relative w-screen py-2 bg-gray-50
            2sm:h-full 2sm:w-full 2sm:col-span-5 2sm:flex 2sm:items-center
          `,
          className
        )}
      >
        <RoundedTop
          fill={colors.gray[50]}
          className='
            block
            2sm:hidden
          '
        />

        <div
          className='
            max-w-[400px] mx-auto w-full px-4
            xs:px-6
            2sm:px-8 2sm:max-w-[450px]
          '
        >
          {children}
        </div>
      </div>
    </main>
  </>
)

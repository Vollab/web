'use client'

import { Background } from './Background'
import { Header } from './Header'
import { Nav } from './Nav'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { IChildrenProps } from 'src/types/react.types'

interface IMainLayoutProps extends IChildrenProps {
  hideHeader?: boolean
}

export const MainLayout = ({
  children,
  hideHeader = false
}: IMainLayoutProps) => {
  useCurrentUser()

  return (
    <>
      {!hideHeader && <Header />}

      {children}

      <Background />

      <Nav />
    </>
  )
}

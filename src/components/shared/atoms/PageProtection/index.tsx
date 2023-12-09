'use client'

import { Splash } from '../../organisms/Splash'

import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { IChildrenProps } from 'src/types/react.types'

const unProtectedRoutes = ['/sign-in', '/sign-up']

export const PageProtection = ({ children }: IChildrenProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isAllowed, setIsAllowed] = useState<boolean>()

  useEffect(() => {
    if (
      !!globalThis.document.cookie
        .split('=')
        .find(row => row === 'session_refresh')
    ) {
      unProtectedRoutes.find(route => route.startsWith(pathname)) &&
        router.push('/demands')
    }

    setIsAllowed(true)
  }, [pathname, router])

  return <>{isAllowed ? children : <Splash />}</>
}

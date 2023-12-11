'use client'

import { Splash } from '../../organisms/Splash'

import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { queryClient } from 'src/contexts/ReactQuery'

import { IChildrenProps } from 'src/types/react.types'

const unProtectedRoutes = ['/sign-in']

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

    queryClient.invalidateQueries('current-user')

    setIsAllowed(true)
  }, [pathname, router])

  return <>{isAllowed ? children : <Splash />}</>
}

'use client'

import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { Splash } from 'src/components/shared/organisms/Splash'

import { IChildrenProps } from 'src/types/react.types'

const unProtectedRoutes = ['sign-in', 'sign-up']

const ProtectedRouteLayout = ({ children }: IChildrenProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isAllowed, setIsAllowed] = useState<boolean>()

  useEffect(() => {
    if (
      !!!globalThis.document.cookie
        .split('=')
        .find(row => row === 'session_refresh')
    ) {
      router.push('/sign-in')
    } else {
      setIsAllowed(true)

      unProtectedRoutes.find(route => route.startsWith(pathname)) &&
        router.push('/demands')
    }
  }, [pathname, router])

  return <>{isAllowed ? children : <Splash />}</>
}

export default ProtectedRouteLayout

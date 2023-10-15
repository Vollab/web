'use client'

import { IUseProtectedRouteParams } from './types'

import { useEffect } from 'react'

export const useProtectedRoute = ({
  enabled = true
}: IUseProtectedRouteParams) => {
  // const { push } = useRouter()
  // const { data, isLoading } = useUser()
  // const [allowed, setAllowed] = useState(false)

  // useEffect(() => {
  // if (!isLoading && enabled) {
  //   if (!data?.id) push('/')
  //   else setAllowed(true)
  // }
  // }, [push, data, isLoading, enabled])

  useEffect(() => {
    // if (enabled && getToken()) setAllowed(true)
    // else redirect('/signin')
  }, [enabled])

  return { allowed: true }
}

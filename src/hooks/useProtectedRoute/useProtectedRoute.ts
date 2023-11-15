'use client'

import { IUseProtectedRouteParams } from './types'

import { getToken, useUser } from '../api/useUser'

import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

export const useProtectedRoute = ({
  enabled = true
}: IUseProtectedRouteParams) => {
  const { push } = useRouter()
  const { data, isLoading } = useUser()
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    if (!isLoading && enabled) {
      if (!data?.id) push('/')
      else setAllowed(true)
    }
  }, [push, data, isLoading, enabled])

  useEffect(() => {
    if (enabled && getToken()) setAllowed(true)
    else redirect('/signin')
  }, [enabled])

  return { allowed }
}

'use client'

import { useRouter } from 'next/navigation'

import { useCallback, useEffect } from 'react'

import { Loading } from 'src/components/shared/atoms/Loading'
import { AuthBackground } from 'src/components/shared/molecules/AuthBackground'

import { Logo } from 'src/assets/images'

export const Splash = () => {
  const { push } = useRouter()

  const updateRoute = useCallback(() => {
    setTimeout(() => {
      push('/sign-in')
    }, 300)
  }, [push])

  useEffect(() => {
    updateRoute()
  }, [updateRoute])

  return (
    <>
      <AuthBackground />

      <div className='flex items-center justify-center flex-col space-y-4 h-screen w-screen'>
        <Logo className='h-18' />

        <Loading />
      </div>
    </>
  )
}

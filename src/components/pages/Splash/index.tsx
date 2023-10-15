'use client'

import { Loading } from 'src/components/shared/atoms/Loading'
import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'

import { Logo } from 'src/assets/images'

export const Splash = () => (
  <AuthLayout>
    <div className='flex items-center justify-center w-screen h-screen flex-col space-y-10'>
      <Logo className='h-18' />

      <Loading />
    </div>
  </AuthLayout>
)

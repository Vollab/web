'use client'

import { useEffect, useState } from 'react'

import { Loading } from 'src/components/shared/atoms/Loading'
import { AuthBackground } from 'src/components/shared/molecules/AuthBackground'

import { Logo } from 'src/assets/images'

import { AnimatePresence } from 'framer-motion'

export const Splash = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className='fixed left-0 right-0 w-screen h-screen z-50'>
      <AuthBackground />

      <div className='flex items-center justify-center flex-col space-y-4 h-screen w-screen'>
        <Logo className='h-18' />

        <AnimatePresence>{isMounted && <Loading />}</AnimatePresence>
      </div>
    </div>
  )
}

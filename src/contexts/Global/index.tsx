'use client'

import { IGlobalContextProps } from './types'

import { ToastProvider } from '../Toast'
import { UserProvider } from '../User'

import { ReactQueryProvider } from 'src/contexts/ReactQuery'

export const GlobalProvider = ({ children }: IGlobalContextProps) => (
  <ReactQueryProvider>
    <ToastProvider>
      <UserProvider>{children}</UserProvider>
    </ToastProvider>
  </ReactQueryProvider>
)

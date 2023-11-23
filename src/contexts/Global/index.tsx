'use client'

import { IGlobalContextProps } from './types'

import { ToastProvider } from '../Toast'

import { ReactQueryProvider } from 'src/contexts/ReactQuery'

export const GlobalProvider = ({ children }: IGlobalContextProps) => (
  <ReactQueryProvider>
    <ToastProvider>{children}</ToastProvider>
  </ReactQueryProvider>
)

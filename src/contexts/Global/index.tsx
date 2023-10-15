'use client'

import { IGlobalContextProps } from './types'

import { ReactQueryProvider } from 'src/contexts/ReactQuery'

export const GlobalProvider = ({ children }: IGlobalContextProps) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
)

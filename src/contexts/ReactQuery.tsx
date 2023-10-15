'use client'

import { IChildrenProps } from 'src/types/react.types'

import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

export const ReactQueryProvider = ({ children }: IChildrenProps) => (
  <QueryClientProvider client={queryClient}>
    {children}

    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>
)

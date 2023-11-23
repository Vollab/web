'use client'

import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

export interface ISignUpContext {
  page: 'initial' | 'candidate' | 'orderer'
  setPage: TSetState<ISignUpContext['page']>
}

export const SignUpContext = createContext<ISignUpContext>({
  page: 'initial',
  setPage: () => {}
})

export const SignUpProvider = ({ children }: IChildrenProps) => {
  const [page, setPage] = useState<ISignUpContext['page']>('initial')

  return (
    <SignUpContext.Provider value={{ page, setPage }}>
      {children}
    </SignUpContext.Provider>
  )
}

export const useSignUpContext = () => useContext(SignUpContext)

'use client'

import { Candidate } from './Candidate'
import { Initial } from './Initial'
import { Orderer } from './Orderer'

import { createContext, useState } from 'react'

import { TSetState } from 'src/types/react.types'

export const SignUpContext = createContext<{
  page: string
  setPage: TSetState<string>
}>({ page: 'initial', setPage: () => {} })

export const Pages = () => {
  const [page, setPage] = useState('initial')

  return (
    <SignUpContext.Provider value={{ page, setPage }}>
      {page === 'initial' && <Initial />}
      {page === 'candidate' && <Candidate />}
      {page === 'orderer' && <Orderer />}
    </SignUpContext.Provider>
  )
}

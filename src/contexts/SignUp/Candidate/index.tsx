import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { Request } from 'types-vollab/dist/v2/auth/api/candidates/sign-up/(all)/POST'

interface ICandidateContext {
  candidateData: Request
  setCandidateData: TSetState<Request>
}

const initial: ICandidateContext['candidateData'] = {
  name: '',
  email: '',
  phone: '',
  password: '',
  biography: '',
  activity_areas: []
}

const CandidateContext = createContext<ICandidateContext>({
  candidateData: initial,
  setCandidateData: () => {}
})

export const CandidateProvider = ({ children }: IChildrenProps) => {
  const [candidateData, setCandidateData] = useState<Request>(initial)

  return (
    <CandidateContext.Provider value={{ candidateData, setCandidateData }}>
      {children}
    </CandidateContext.Provider>
  )
}

export const useCandidateContext = () => useContext(CandidateContext)

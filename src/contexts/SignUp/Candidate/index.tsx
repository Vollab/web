import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { CandidateSignUpRequest } from 'types-vollab/dist/routes/candidates/sign-up'
import { Link } from 'types-vollab/dist/shared/link'

interface ICandidateData extends CandidateSignUpRequest {
  links?: Link[]
  avatar?: string
  activityAreas?: { value: string; label: string }[]
}

interface ICandidateContext {
  candidateData: ICandidateData
  setCandidateData: TSetState<ICandidateData>
}

const initial: ICandidateData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  biography: ''
}

const CandidateContext = createContext<ICandidateContext>({
  candidateData: initial,
  setCandidateData: () => {}
})

export const CandidateProvider = ({ children }: IChildrenProps) => {
  const [candidateData, setCandidateData] = useState<ICandidateData>(initial)

  return (
    <CandidateContext.Provider value={{ candidateData, setCandidateData }}>
      {children}
    </CandidateContext.Provider>
  )
}

export const useCandidateContext = () => useContext(CandidateContext)

import { createContext, useContext, useState } from 'react'

import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import { IChildrenProps, TSetState } from 'src/types/react.types'

import { CandidateSignUpRequest } from 'types-vollab/dist/routes/candidates/sign-up'

interface ICandidateData extends CandidateSignUpRequest {
  links?: ILinksFormProps['links']
  avatar?: { url: string; formData: FormData }
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

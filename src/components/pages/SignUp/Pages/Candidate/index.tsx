import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

import { createContext, useContext, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'
import { Steps } from 'src/components/shared/molecules/Steps'

import { TSetState } from 'src/types/react.types'

import { SignUpContext } from '..'
import { CandidateSignUpRequest } from 'types-vollab/dist/routes/candidates/sign-up'
import { Link } from 'types-vollab/dist/shared/link'

interface ICandidateData extends CandidateSignUpRequest {
  links?: Link[]
  avatar?: string
  activityAreas?: { value: string; label: string }[]
}

interface ICandidateContext {
  step: number
  setStep: TSetState<number>
  candidateData: ICandidateData
  setCandidateData: TSetState<ICandidateData>
}

const initialCandidateData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  biography: ''
}

export const CandidateContext = createContext<ICandidateContext>({
  step: 1,
  setStep: () => {},
  setCandidateData: () => {},
  candidateData: initialCandidateData
})

export const Candidate = () => {
  const [step, setStep] = useState(1)
  const { setPage } = useContext(SignUpContext)
  const [candidateData, setCandidateData] =
    useState<ICandidateData>(initialCandidateData)

  const onBackClick = () => {
    step === 1 ? setPage('initial') : setStep(prev => prev - 1)
  }

  return (
    <AuthLayout onBackClick={onBackClick}>
      <Steps quantity={3} filledQuantity={step} color={colors.secondary[500]} />

      <CandidateContext.Provider
        value={{ setStep, step, setCandidateData, candidateData }}
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </CandidateContext.Provider>
    </AuthLayout>
  )
}

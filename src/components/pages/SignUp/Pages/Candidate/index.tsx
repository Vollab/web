import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'

import { createContext, useContext, useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'
import { Steps } from 'src/components/shared/molecules/Steps'

import { TSetState } from 'src/types/react.types'

import { SignUpContext } from '..'

export const CandidateContext = createContext<{
  step: number
  setStep: TSetState<number>
}>({ step: 1, setStep: () => {} })

export const Candidate = () => {
  const [step, setStep] = useState(1)
  const { setPage } = useContext(SignUpContext)

  const onBackClick = () => {
    if (step === 1) setPage('initial')
    else setStep(prev => prev - 1)
  }

  return (
    <AuthLayout onBackClick={onBackClick}>
      <Steps quantity={4} filledQuantity={step} color={colors.secondary[500]} />

      <CandidateContext.Provider value={{ setStep, step }}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </CandidateContext.Provider>
    </AuthLayout>
  )
}

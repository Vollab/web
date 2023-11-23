'use client'

import { createContext, useContext, useState } from 'react'

import { IChildrenProps, TSetState } from 'src/types/react.types'

interface IStepsContext {
  step: number
  setStep: TSetState<IStepsContext['step']>
}

const StepsContext = createContext<IStepsContext>({
  step: 1,
  setStep: () => {}
})

export const StepsProvider = ({ children }: IChildrenProps) => {
  const [step, setStep] = useState<IStepsContext['step']>(1)

  return (
    <StepsContext.Provider value={{ step, setStep }}>
      {children}
    </StepsContext.Provider>
  )
}

export const useStepsContext = () => useContext(StepsContext)

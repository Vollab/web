'use client'

import { Steps } from '../../molecules/Steps'

import { StepsProvider, useStepsContext } from 'src/contexts/SignUp/Steps'

import { IChildrenProps } from 'src/types/react.types'

interface IStepsLayoutProps extends IChildrenProps {
  color: string
  stepsQuantity: number
}

export const StepsLayoutComponent = ({
  color,
  stepsQuantity,
  children
}: IStepsLayoutProps) => {
  const { step } = useStepsContext()

  return (
    <>
      <Steps color={color} filledQuantity={step} quantity={stepsQuantity} />

      {children}
    </>
  )
}

export const StepsLayout = ({ children, ...props }: IStepsLayoutProps) => (
  <StepsProvider>
    <StepsLayoutComponent {...props}>{children}</StepsLayoutComponent>
  </StepsProvider>
)

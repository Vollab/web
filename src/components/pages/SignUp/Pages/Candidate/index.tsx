import { About } from './About'
import { Optional } from './Optional'
import { Personal } from './Personal'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'
import { Steps } from 'src/components/shared/molecules/Steps'

import { CandidateProvider } from 'src/contexts/SignUp/Candidate'

import { useBackClick } from 'src/hooks/SignUp/useBackClick'

export const Candidate = () => {
  const { onBackClick, step } = useBackClick()

  return (
    <AuthLayout onBackClick={onBackClick}>
      <Steps color={colors.secondary[500]} filledQuantity={step} quantity={3} />

      <CandidateProvider>
        {step === 1 && <Personal />}
        {step === 2 && <About />}
        {step === 3 && <Optional />}
      </CandidateProvider>
    </AuthLayout>
  )
}

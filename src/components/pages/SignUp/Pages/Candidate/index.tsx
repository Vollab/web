import { Required } from './Required'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/Auth'
import { Steps } from 'src/components/shared/molecules/Steps'

import { useBackClick } from 'src/hooks/SignUp/useBackClick'

export const Candidate = () => {
  const { onBackClick, step } = useBackClick()

  return (
    <AuthLayout onBackClick={onBackClick}>
      <Steps color={colors.secondary[500]} filledQuantity={step} quantity={2} />

      {step === 1 && <Required />}
      {/* {step === 3 && <Optional />} */}
    </AuthLayout>
  )
}

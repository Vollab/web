import { Optional } from './Optional'
import { Required } from './Required'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/Auth'
import { Steps } from 'src/components/shared/molecules/Steps'

import { useBackClick } from 'src/hooks/SignUp/useBackClick'

export const Orderer = () => {
  const { onBackClick, step } = useBackClick()

  return (
    <AuthLayout onBackClick={step === 1 ? onBackClick : undefined}>
      <Steps color={colors.tertiary[500]} filledQuantity={step} quantity={2} />

      {step === 1 && <Required />}
      {step === 2 && <Optional />}
    </AuthLayout>
  )
}

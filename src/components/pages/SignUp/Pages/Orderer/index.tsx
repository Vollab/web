import { About } from './About'
import { Optional } from './Optional'
import { Personal } from './Personal'

import { colors } from 'src/styles/custom/colors'

import { AuthLayout } from 'src/components/shared/layouts/AuthLayout'
import { Steps } from 'src/components/shared/molecules/Steps'

import { OrdererProvider } from 'src/contexts/SignUp/Orderer'

import { useBackClick } from 'src/hooks/SignUp/useBackClick'

export const Orderer = () => {
  const { onBackClick, step } = useBackClick()

  return (
    <AuthLayout onBackClick={onBackClick}>
      <OrdererProvider>
        <Steps
          quantity={3}
          filledQuantity={step}
          color={colors.tertiary[500]}
        />

        {step === 1 && <Personal />}
        {step === 2 && <About />}
        {step === 3 && <Optional />}
      </OrdererProvider>
    </AuthLayout>
  )
}

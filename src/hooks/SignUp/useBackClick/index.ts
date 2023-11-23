import { useSignUpContext } from 'src/contexts/SignUp'
import { useStepsContext } from 'src/contexts/SignUp/Steps'

export const useBackClick = () => {
  const { setPage } = useSignUpContext()
  const { step, setStep } = useStepsContext()

  const onBackClick = () => {
    if (step === 1) setPage('initial')
    else setStep(prev => prev - 1)
  }

  return { onBackClick, step }
}

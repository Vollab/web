import { useCandidateContext } from 'src/contexts/SignUp/Candidate'
import { useStepsContext } from 'src/contexts/SignUp/Steps'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { email, name, newPassword, phone } from 'src/schemas'

interface IPersonal {
  name: string
  email: string
  phone: string
  password: string
}

const resolver = joiResolver(
  Joi.object({ email, name, phone, password: newPassword })
)

export const usePersonal = () => {
  const { setStep } = useStepsContext()
  const { setCandidateData, candidateData } = useCandidateContext()

  const { register, handleSubmit, formState, setValue } = useForm<IPersonal>({
    resolver,
    defaultValues: {
      name: candidateData?.name,
      email: candidateData?.email,
      phone: candidateData?.phone,
      password: candidateData?.password
    }
  })

  const onSubmit = (data: IPersonal) => {
    setCandidateData(prev => ({ ...prev, ...data }))
    setStep(2)
  }

  return { handleSubmit, onSubmit, register, formState, setValue }
}

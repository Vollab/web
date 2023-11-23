import { useOrdererContext } from 'src/contexts/SignUp/Orderer'
import { useStepsContext } from 'src/contexts/SignUp/Steps'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { email, newPassword, phone } from 'src/schemas'

interface IStep1 {
  email: string
  phone: string
  password: string
}

const resolver = joiResolver(
  Joi.object({ email, phone, password: newPassword })
)

export const usePersonal = () => {
  const { setStep } = useStepsContext()
  const { setOrdererData, ordererData } = useOrdererContext()
  const { register, handleSubmit, formState, setValue } = useForm<IStep1>({
    resolver,
    defaultValues: {
      email: ordererData?.email,
      phone: ordererData?.phone,
      password: ordererData?.password
    }
  })

  const onSubmit = (data: IStep1) => {
    setOrdererData(prev => ({ ...prev, ...data }))
    setStep(2)
  }

  return { handleSubmit, onSubmit, register, formState, setValue }
}

import { FormEventHandler } from 'react'

import { useSignUpOrderer } from 'src/api/requests/auth/signUpOrderer/useSignUpOrderer'

import { useStepsContext } from 'src/contexts/SignUp/Steps'
import { useToastContext } from 'src/contexts/Toast'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { biography, email, name, newPassword, phone } from 'src/schemas'
import { Request } from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'

const resolver = joiResolver(
  Joi.object({ email, name, phone, password: newPassword, biography })
)

export const useRequired = () => {
  const { mutateAsync } = useSignUpOrderer()
  const { toastRef } = useToastContext()
  const { setStep } = useStepsContext()

  const { register, handleSubmit, formState, setValue } = useForm<Request>({
    resolver,
    defaultValues: { name: '', email: '', phone: '', password: '' }
  })

  const onSubmit = handleSubmit(async data => {
    const res = await mutateAsync(data)

    if (!res.orderer) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    toastRef?.current?.triggerToast([
      {
        variant: 'success',
        title: 'Cadastrado com sucesso',
        content: 'Adicione algumas informações opcionais!'
      }
    ])

    setStep(2)
  })

  const onTextAreaChange: FormEventHandler<any> = e =>
    setValue('biography', e.currentTarget.value)

  return { onSubmit, register, formState, setValue, onTextAreaChange }
}

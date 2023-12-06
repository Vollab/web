import { FormEventHandler } from 'react'

import { useSignUp } from 'src/hooks/api/candidates/useSignUp'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { biography, email, name, newPassword, phone } from 'src/schemas'
import { Request } from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'

const resolver = joiResolver(
  Joi.object({ email, name, phone, password: newPassword, biography })
)

export const useRequired = () => {
  const { mutateAsync } = useSignUp()

  const { register, handleSubmit, formState, setValue } = useForm<Request>({
    resolver,
    defaultValues: { name: '', email: '', phone: '', password: '' }
  })

  const onSubmit = handleSubmit(async data => {
    await mutateAsync(data)
  })

  const onTextAreaChange: FormEventHandler<any> = e =>
    setValue('biography', e.currentTarget.value)

  return { onSubmit, register, formState, setValue, onTextAreaChange }
}

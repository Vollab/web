import { useRouter } from 'next/navigation'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useToastContext } from 'src/contexts/Toast'
import { useUserContext } from 'src/contexts/User'

import { useSignIn } from 'src/hooks/api/useSignIn'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useHookForm } from 'react-hook-form'
import { email, password } from 'src/schemas'
import { SignInRequest } from 'types-vollab/dist/routes/sign-in'
import { ErrorResponse } from 'types-vollab/dist/shared/error'

const resolver = joiResolver(Joi.object({ email, password }))

export const useForm = () => {
  const { push } = useRouter()
  const { mutateAsync } = useSignIn()
  const { setUser } = useUserContext()
  const { toastRef } = useToastContext()
  const { handleSubmit, register, formState } = useHookForm<SignInRequest>({
    resolver,
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: SignInRequest) => {
    const toastInfos: IInfo[] = []

    try {
      const { user } = await mutateAsync(data)
      setUser(user)
      push('/demands')
    } catch (err) {
      const error: ErrorResponse['errors'] = err as any

      error.forEach(e => {
        if (e.message === 'Invalid credentials')
          toastInfos.push({
            content: 'E-mail e/ou senha incorreto!',
            variant: 'error'
          })
      })
    } finally {
      toastRef?.current?.triggerToast(toastInfos)
    }
  }

  const onSignUpClick = () => {
    push('/sign-up')
  }

  return {
    onSignUpClick,
    submitHandler: handleSubmit(onSubmit),
    props: {
      email: {
        ...register('email'),
        error: formState.errors.email
      },
      password: { ...register('password'), error: formState.errors.password }
    }
  }
}

import { useRouter } from 'next/navigation'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useToastContext } from 'src/contexts/Toast'

import { useSignIn } from 'src/hooks/api/useSignIn'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useHookForm } from 'react-hook-form'
import { email, password } from 'src/schemas'
import { Request } from 'types-vollab/dist/modules/auth/api/sign-in/POST'

const resolver = joiResolver(Joi.object({ email, password }))

export const useForm = () => {
  const { push } = useRouter()
  const { mutateAsync } = useSignIn()
  const { toastRef } = useToastContext()

  const { handleSubmit, register, formState } = useHookForm<Request>({
    resolver,
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: Request) => {
    const toastInfos: IInfo[] = []

    try {
      await mutateAsync(data)

      push('/demands')
    } catch (err) {
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

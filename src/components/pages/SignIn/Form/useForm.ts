import { useRouter } from 'next/navigation'

import { useSignIn } from 'src/api/requests/auth/signIn/useSignIn'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { useToastContext } from 'src/contexts/Toast'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useHookForm } from 'react-hook-form'
import { email, password } from 'src/schemas'
import { Request } from 'types-vollab/dist/src/modules/auth/api/sign-in/POST'

const resolver = joiResolver(Joi.object({ email, password }))

export const useForm = () => {
  const { push } = useRouter()
  const { mutateAsync } = useSignIn()
  const { toastRef } = useToastContext()
  const { refetch } = useCurrentUser(false)
  const { handleSubmit, register, formState } = useHookForm<Request>({
    resolver,
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: Request) => {
    const response = await mutateAsync(data)

    if (!response.user) {
      toastRef?.current?.triggerToast([
        { variant: 'error', content: 'Falha ao fazer login' }
      ])
    }
    const { data: currentUserData } = await refetch()

    if (currentUserData?.user) {
      push('/demands')
    }
  }

  const onSignUpClick = () => {
    push('/sign-up')
  }

  return {
    onSignUpClick,
    submitHandler: handleSubmit(onSubmit),
    props: {
      email: { ...register('email'), error: formState.errors.email },
      password: { ...register('password'), error: formState.errors.password }
    }
  }
}

import { IUseSignInMutation } from './types'

import { useEffect } from 'react'

import { useUserContext } from 'src/contexts/User'

import { useMutation } from 'src/hooks/useMutation'

import { signIn } from 'src/requests/signin'

export const useSignIn = () => {
  const { setUser } = useUserContext()
  const { data, isSuccess, mutate, mutateAsync } =
    useMutation<IUseSignInMutation>(data => signIn(data))

  useEffect(() => {
    if (isSuccess) setUser(data?.user)
  }, [data?.user, isSuccess, setUser])

  return { mutate, mutateAsync }
}

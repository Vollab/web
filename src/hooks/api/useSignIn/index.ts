import { IUseSignInMutation } from './types'

import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/useMutation'

import { signIn } from 'src/requests/signin'

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(data => signIn(data), {
    onSuccess: data => {
      queryClient.setQueryData('user', data)
    }
  })

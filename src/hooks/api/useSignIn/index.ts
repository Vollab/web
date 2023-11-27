import { IUseSignInMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { signIn } from 'src/requests/signin'

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(data => signIn(data))

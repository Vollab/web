import { IUseSignInMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { signIn } from 'src/requests/sign-in'

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(body => signIn(body))

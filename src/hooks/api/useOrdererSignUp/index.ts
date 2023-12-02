import { IUseOrdererSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { signupOrderer } from 'src/requests/signup/orderer'

export const useOrdererSignUp = () =>
  useMutation<IUseOrdererSignUpMutation>(signupOrderer)

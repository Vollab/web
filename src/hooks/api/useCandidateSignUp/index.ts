import { IUseCandidateSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { signupCandidate } from 'src/requests/signup/candidate'

export const useCandidateSignUp = () =>
  useMutation<IUseCandidateSignUpMutation>(signupCandidate)

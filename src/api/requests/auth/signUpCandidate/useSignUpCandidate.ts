import { signUpCandidate } from './signUpCandidate'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'

interface IUseSignUpMutation {
  request: Request
  response: Response
}

export const useSignUp = () => useMutation<IUseSignUpMutation>(signUpCandidate)

import { signUpCandidate } from './signUpCandidate'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/candidates/sign-up/POST'
import { ErrorResponse } from 'types-vollab/dist/src/shared/error'

interface IUseSignUpMutation {
  request: Request
  response: Response & ErrorResponse
}

export const useSignUp = () => useMutation<IUseSignUpMutation>(signUpCandidate)

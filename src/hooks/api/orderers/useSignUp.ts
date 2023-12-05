import { useMutation } from 'src/hooks/useMutation'

import { signup } from 'src/requests/candidates/signup'

import type {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/orderers/sign-up/POST'

interface IUseSignUpMutation {
  request: Request
  response: Response
}

export const useSignUp = () => useMutation<IUseSignUpMutation>(signup)

import { signUpOrderer } from './signUpOrderer'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/orderers/sign-up/POST'

interface IUseSignUpOrdererMutation {
  request: Request
  response: Response
}

export const useSignUpOrderer = () =>
  useMutation<IUseSignUpOrdererMutation>(signUpOrderer)

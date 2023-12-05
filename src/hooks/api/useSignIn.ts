import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/useMutation'

import { signIn } from 'src/requests/sign-in'

import type {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/sign-in/POST'

interface IUseSignInMutation {
  request: Request
  response: Response
}

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(signIn, {
    onSuccess: data => {
      queryClient.setQueryData('user', data)
    }
  })

import { getCurrentUser } from '../../currentUser/get/getCurrentUser'
import { signIn } from './signIn'

import { queryClient } from 'src/contexts/ReactQuery'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

import {
  Request,
  Response
} from 'types-vollab/dist/src/modules/auth/api/sign-in/POST'

interface IUseSignInMutation {
  request: Request
  response: Response
}

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(signIn, {
    onSuccess: () => {
      queryClient.fetchQuery('current-user', { queryFn: getCurrentUser })
    }
  })

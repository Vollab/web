import { IUseSignInMutation } from './types'

import { updateToken } from '../useUser'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useSignIn = () =>
  useMutation<IUseSignInMutation>(
    request => api.post({ body: request, url: `/sign-in` }),
    {
      onSuccess: data => {
        updateToken(data.token)
      }
    }
  )

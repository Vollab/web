import { IUseSignUpMutation, IUseSignUpParams } from './types'

import { updateToken } from '../useUser'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useSignup = ({ role }: IUseSignUpParams) => {
  const mutation = useMutation<IUseSignUpMutation>(
    request => api.post({ body: request, url: `/sign-up/${role}` }),
    {
      onSuccess: data => {
        updateToken(data.token)
      }
    }
  )

  return mutation
}

import { IUseCandidateSignUpMutation } from './types'

import { updateToken } from '../useUser'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useCandidateSignup = () => {
  const mutation = useMutation<IUseCandidateSignUpMutation>(
    async request => {
      const response = await api.post({
        body: request,
        url: '/signup/candidate'
      })

      return response
    },
    {
      onSuccess: data => {
        updateToken(data.token)
      }
    }
  )

  return mutation
}

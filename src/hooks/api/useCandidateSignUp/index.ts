import { IUseCandidateSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useCandidateSignUp = () =>
  useMutation<IUseCandidateSignUpMutation>(request =>
    api.post({ data: request, url: `/candidates/sign-up` })
  )

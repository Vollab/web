import { IUseOrdererSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useOrdererSignUp = () =>
  useMutation<IUseOrdererSignUpMutation>(request =>
    api.post({ data: request, url: `/orderers/sign-up` })
  )

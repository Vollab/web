import { TSignUp } from './types'

import { api } from 'src/services/api'

export const signUp: TSignUp = request =>
  api.post({ data: request, url: `/candidates/sign-up` })

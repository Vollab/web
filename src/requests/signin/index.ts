import { TSignIn } from './types'

import { api } from 'src/services/api'

export const signIn: TSignIn = data => api.post({ url: `/sign-in`, data })

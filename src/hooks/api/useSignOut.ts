import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useSignOut = () =>
  useMutation(() => api.post({ url: '/sign-out' }))

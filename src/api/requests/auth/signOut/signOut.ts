import { api } from 'src/api/core'

export const signOut = () => api.post({ url: '/sign-out' })

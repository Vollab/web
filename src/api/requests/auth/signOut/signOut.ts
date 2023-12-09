import { interceptor } from 'src/api/core/interceptor'

export const signOut = () =>
  interceptor({ route: '/sign-out', method: 'POST', service: 'auth' })

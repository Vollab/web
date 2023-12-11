import { interceptor } from 'src/api/core/interceptor'

import { Response } from 'types-vollab/dist/src/modules/auth/api/current-user/GET'

type TGetCurrentUser = () => Promise<Response>

export const getCurrentUser: TGetCurrentUser = async () => {
  const res = await interceptor({ route: '/current-user' })

  if (!res.errors) return res
  else if (res.errors[0].message === 'Token expired') {
    await interceptor({ route: '/refresh', method: 'POST' })

    const response = await interceptor({ route: '/current-user' })

    return response
  }
}

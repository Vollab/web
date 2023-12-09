import { interceptor } from 'src/api/core/interceptor'

import { Response } from 'types-vollab/dist/src/modules/auth/api/current-user/GET'

type TGetCurrentUser = () => Promise<Response>

export const getCurrentUser: TGetCurrentUser = () =>
  interceptor({ route: '/current-user' })

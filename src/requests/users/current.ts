import { interceptor } from 'src/services/api/interceptor'

import type { Response } from 'types-vollab/dist/modules/auth/api/current-user/GET'

type TGetCurrentUser = () => Promise<Response>

export const getCurrentUser: TGetCurrentUser = () =>
  interceptor({ route: '/current-user' })

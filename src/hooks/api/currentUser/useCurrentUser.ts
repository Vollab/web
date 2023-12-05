import { useQuery } from 'src/hooks/useQuery'

import { getCurrentUser } from 'src/requests/current-user/current'

import type { Response } from 'types-vollab/dist/src/modules/auth/api/current-user/GET'

interface IUseCurrentUserQuery {
  response: Response
}

export const useCurrentUser = () =>
  useQuery<IUseCurrentUserQuery>('current-user', getCurrentUser)

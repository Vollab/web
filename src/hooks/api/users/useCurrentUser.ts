import { useQuery } from 'src/hooks/useQuery'

import { getCurrentUser } from 'src/requests/users/current'

import type { Response } from 'types-vollab/dist/modules/auth/api/current-user/GET'

interface IUseCurrentUserQuery {
  response: Response
}

export const useCurrentUser = () =>
  useQuery<IUseCurrentUserQuery>('user', getCurrentUser)

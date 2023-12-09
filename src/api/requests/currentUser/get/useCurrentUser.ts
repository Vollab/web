import { getCurrentUser } from './getCurrentUser'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/auth/api/current-user/GET'

interface IUseCurrentUserQuery {
  response: Response
}

export const useCurrentUser = () =>
  useQuery<IUseCurrentUserQuery>('current-user', getCurrentUser)

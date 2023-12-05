import { useQuery } from 'src/hooks/useQuery'

import { getUser } from 'src/requests/users/user'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/GET'

export interface IUseUserQuery {
  response: Response
}

export const useUser = ({ id }: Params) =>
  useQuery<IUseUserQuery>(['user', id], () => getUser({ id }))

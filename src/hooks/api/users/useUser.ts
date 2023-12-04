import { useQuery } from 'src/hooks/useQuery'

import { getUser } from 'src/requests/users/user'

import type {
  Params,
  Response
} from 'types-vollab/dist/modules/auth/api/users/[id]/GET'

export interface IUseUserQuery {
  response: Response
}

export const useUser = ({ id }: Params) =>
  useQuery<IUseUserQuery>(['users', id], () => getUser({ id }))

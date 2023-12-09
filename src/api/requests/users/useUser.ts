import { getUser } from './getUser'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/GET'

export interface IUseUserQuery {
  response: Response
}

export const useUser = ({ id }: Params) =>
  useQuery<IUseUserQuery>(['users', id], () => getUser({ id }))

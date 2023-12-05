import { useQuery } from 'src/hooks/useQuery'

import { getOrderer } from 'src/requests/orderers/orderer'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/auth/api/users/[id]/GET'

export interface IUseOrdererQuery {
  response: Response
}

export const useOrderer = ({ id }: Params) =>
  useQuery<IUseOrdererQuery>(['users', id], () => getOrderer({ id }))

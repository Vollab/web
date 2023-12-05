import { useQuery } from 'src/hooks/useQuery'

import { getDemand } from 'src/requests/demands/demand'

import type {
  Params,
  Response
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'

interface IUseDemandQuery {
  response: Response
}

export const useDemand = ({ id }: Params) =>
  useQuery<IUseDemandQuery>(['demands', id], () => getDemand({ id }))

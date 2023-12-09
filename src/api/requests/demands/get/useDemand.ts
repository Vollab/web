import { getDemand } from './getDemand'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'

interface IUseDemandQuery {
  response: Response
}

export const useDemand = ({ id = '' }: { id?: string }) =>
  useQuery<IUseDemandQuery>(['demand', id], () => getDemand({ id: id }), {
    enabled: !!id
  })

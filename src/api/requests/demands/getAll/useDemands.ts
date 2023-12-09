import { getDemands } from './getDemands'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

import { Response } from 'types-vollab/dist/src/modules/demands/api/demands/GET'

interface IUseDemandsQuery {
  response: Response
}

export const useDemands = () =>
  useQuery<IUseDemandsQuery>('demands', getDemands)

import { useQuery } from 'src/hooks/useQuery'

import { getDemands } from 'src/requests/demands/demands'
import type { Response } from 'types-vollab/dist/modules/demands/api/demands/GET'

interface IUseDemandsQuery {
  response: Response
}

export const useDemands = () =>
  useQuery<IUseDemandsQuery>(['demands'], getDemands)

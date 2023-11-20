import { IUseDemandsQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { getDemands } from 'src/requests/demands/getDemands'

export const useDemands = () =>
  useQuery<IUseDemandsQuery>(['demands'], getDemands)

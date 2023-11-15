import { IUseDemandsQuery } from './types'

import { DemandParams } from 'common/types/routes/demands/id'

import { useQuery } from 'src/hooks/useQuery'

import { getDemand, selectDemand } from 'src/requests/demands/getDemand'

export const useDemand = ({ id }: DemandParams) =>
  useQuery<IUseDemandsQuery>(['demands', id], () => getDemand({ id }), {
    select: selectDemand
  })

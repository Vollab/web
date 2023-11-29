import { IUseDemandsQuery } from './types'

import { useQuery } from 'src/hooks/useQuery'

import { getDemand } from 'src/requests/demands/getDemand'
import { DemandParams } from 'types-vollab/dist/routes/demands/[id]'

export const useDemand = ({ id }: DemandParams) =>
  useQuery<IUseDemandsQuery>(['demands', id], () => getDemand({ id }))

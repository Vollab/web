import { IUseDemandsQuery } from './types'

import { DemandsQueryParams } from 'common/types/routes/demands'

import { useQuery } from 'src/hooks/useQuery'

import { getDemands } from 'src/requests/demands/getDemands'

export const useDemands = ({ page }: DemandsQueryParams) =>
  useQuery<IUseDemandsQuery>(['demands', page.toString()], () =>
    getDemands({ page })
  )

import { IUseDemandsQuery } from './types'

import { DemandsQueryParams } from 'common/types/routes/demands'

import { useQuery } from 'src/hooks/useQuery'

import { api } from 'src/services/api'

export const useDemands = ({ page }: DemandsQueryParams) =>
  useQuery<IUseDemandsQuery>(['demands', page.toString()], () =>
    api.get({ url: `/demands?page=${page}` })
  )

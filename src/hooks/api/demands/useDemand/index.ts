import { IUseDemandsQuery } from './types'

import { DemandParams, DemandResponse } from 'common/types/routes/demands/id'

import { useQuery } from 'src/hooks/useQuery'

import { api } from 'src/services/api'

export const useDemand = ({ id }: DemandParams) =>
  useQuery<IUseDemandsQuery>(
    ['demands', id],
    () => api.get({ url: `/demands/${id}` }),
    {
      select: ({ vacancies, ...demand }: DemandResponse) => ({
        ...demand,
        vacancies: vacancies
          .sort((a, b) => {
            if (a.open && !b.open) return -1
            if (!a.open && b.open) return 1
            return 0
          })
          .map(({ location, ...vacancy }) => ({
            ...vacancy,
            location: `${location?.city}, ${location?.state}`
          }))
      })
    }
  )

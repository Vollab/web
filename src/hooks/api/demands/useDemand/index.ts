import { IUseDemandQuery } from './types'

import { useVacancies } from '../../currentUser/useVacancies'
import { getVacanciesWithStatus } from './getVacanciesWithStatus'

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { useQuery } from 'src/hooks/useQuery'

import { getDemand } from 'src/requests/demands/demand'

export const useDemand = ({ id }: Params) => {
  const { data: userData } = useVacancies()
  const { data } = useQuery<IUseDemandQuery>(['demands', id], () =>
    getDemand({ id })
  )

  const demand = data?.demand
  const vacancies = data?.vacancies
  const userVacancies = userData?.vacancies

  let formattedVacancies = vacancies

  if (vacancies && userVacancies)
    formattedVacancies = getVacanciesWithStatus({ userVacancies, vacancies })

  return {
    data: {
      demand,
      vacancies: formattedVacancies
    }
  }
}

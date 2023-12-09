import { ICurrentUserDemandVacanciesResponse } from './getDemandVacancies'

import { useCurrentUserVacancies } from 'src/api/requests/currentUser/getVacancies/useCurrentUserVacancies'
import { useDemand } from 'src/api/requests/demands/get/useDemand'
import { useDemandVacancies } from 'src/api/requests/demands/vacancies/get/useDemandVacancies'

import { addStatusInVacancies } from 'src/utils/addStatusInVacancies'

export interface IParams {
  id: string
}

type TUseCurrentUserDemandVacancies = (params: { id: string }) => {
  data: ICurrentUserDemandVacanciesResponse
}

export const useCurrentUserDemandVacancies: TUseCurrentUserDemandVacancies = ({
  id
}) => {
  const { data: demandData } = useDemand({ id })
  const { data: userVacanciesData } = useCurrentUserVacancies()
  const { data: demandVacanciesData } = useDemandVacancies({ demand_id: id })

  const vacancies = addStatusInVacancies({
    userVacancies: userVacanciesData?.vacancies,
    demandVacancies: demandVacanciesData?.vacancies
  })

  return {
    data: { demand: demandData?.demand, vacancies }
  }
}

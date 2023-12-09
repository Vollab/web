import { getDemand } from '../../demands/get/getDemand'
import { getDemandVacancies } from '../../demands/vacancies/get/getDemandVacancies'
import { getCurrentUserVacancies } from '../getVacancies/getCurrentUserVacancies'

import { TVacancy, addStatusInVacancies } from 'src/utils/addStatusInVacancies'

import { Response as DemandResponse } from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'

export interface ICurrentUserDemandVacanciesResponse {
  vacancies?: TVacancy[]
  demand?: DemandResponse['demand']
}

type TGetCurrentUserDemandVacancies = (params: {
  id: string
}) => Promise<ICurrentUserDemandVacanciesResponse>

export const getCurrentUserDemandVacancies: TGetCurrentUserDemandVacancies =
  async ({ id }: { id: string }) => {
    const { demand } = await getDemand({ id })
    const { vacancies: userVacancies } = await getCurrentUserVacancies()
    const { vacancies: demandVacancies } = await getDemandVacancies({
      demand_id: id
    })

    const vacancies = addStatusInVacancies({
      userVacancies,
      demandVacancies
    })

    return { demand, vacancies }
  }

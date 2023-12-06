import { interceptor } from 'src/services/api/interceptor'

import type {
  Response as DemandResponse,
  Params
} from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'
import type { Response as VacanciesResponse } from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/GET'

export interface IDemandResponse {
  demand: DemandResponse['demand']
  vacancies: VacanciesResponse['vacancies']
}

export type TGetDemand = (params: Params) => Promise<IDemandResponse>

export const getDemand: TGetDemand = async ({ id }) => {
  const demandsResponse: DemandResponse = await interceptor({
    method: 'GET',
    service: 'demand',
    route: `/demands/${id}`
  })

  const vacanciesResponse: VacanciesResponse = await interceptor({
    method: 'GET',
    service: 'vacancy',
    route: `/demands/${id}/vacancies`
  })

  return {
    demand: demandsResponse.demand,
    vacancies: vacanciesResponse.vacancies
  }
}

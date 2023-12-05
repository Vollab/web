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

export const getDemand: TGetDemand = () => {
  return { demand: {} } as unknown as Promise<any>
}

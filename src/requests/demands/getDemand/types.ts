import { DemandParams, Vacancy } from 'common/types/routes/demands/id'
import { DemandResponse } from 'common/types/routes/demands/id'

export interface IVacancy extends Omit<Vacancy, 'location'> {
  location: string
}

export interface IDemandResponse extends Omit<DemandResponse, 'vacancies'> {
  vacancies: IVacancy[]
}

export type TSelectDemand = (data: DemandResponse) => IDemandResponse
export type TGetDemand = (params: DemandParams) => Promise<DemandResponse>

import { DemandResponse, Vacancy } from 'common/types/routes/demands/id'

interface IVacancy extends Omit<Vacancy, 'location'> {
  location: string
}

interface IDemandResponse extends Omit<DemandResponse, 'vacancies'> {
  vacancies: IVacancy[]
}

export interface IUseDemandsQuery {
  response: IDemandResponse
}

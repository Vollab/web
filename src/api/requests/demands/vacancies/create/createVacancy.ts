import { interceptor } from 'src/api/core/interceptor'

export interface ICreateVacancyParams {
  demand_id: string

  name: string
  city: string
  state: string
  work_mode: string
  description: string
  activity_area_id: string
}

export const createVacancy = ({ demand_id, ...data }: ICreateVacancyParams) =>
  interceptor({
    method: 'POST',
    service: 'vacancy',
    route: `demands/${demand_id}/vacancies`,
    request: { ...data, street: ' ' }
  })
